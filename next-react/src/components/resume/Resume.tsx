import { ContactInfo, ContactInfoCategories, ExperienceInfo, ExperienceInfoCategory, ExperienceInfoProps, Info, RemoteCategory, SectionInscriptionType, SkillInfo, SkillInfoCategory, SkillInfoParams } from "@/app/data"
import { processInfo, titles } from "@/app/fetchInfo"
import { useReducer } from "react"
import { Class, ValueOf } from "type-fest"
import { Contacts } from "./Contact"
import { ResumeController } from "./ResumeController"
import ResumePage from "./ResumePage"
import Titles from "./Titles"
import Sections from "./sections/Sections"
import { Contact_Category_Enum, Experience_Category_Enum, GetInfoQuery, Inscription_Type_Enum, Remote_Category_Enum, Skill_Category_Enum } from "@/gql/graphql"
import { DateTime, Interval as DateTimeInterval } from "luxon"

const infoReducers: {
	titles: React.Reducer<Info["titles"], {
		type: "titles"
	}>
	contacts: React.Reducer<Info["contacts"], {
		type: "contacts",
		contact: { name: keyof Info["contacts"], value: ValueOf<Info["contacts"]> }
	}>,
	sections: React.Reducer<Info["sections"], {
		type: "sections",
		section: { name: keyof Info["sections"], value: ValueOf<Info["sections"]> },
		sectionItem?: { name: string }
	}>
} = {
	titles: (titles, action) =>
		titles,
	contacts: (contacts, action) => {
		console.log({contacts, action})
		return ({
		...contacts,
		[action.contact.name]: new ContactInfo({
			...action.contact.value!.props,
			visible: !(action.contact.value?.props.visible ?? true)
		})
	})},
	sections: (sections, action) => ({
		...sections,
		[action.section.name]: action.sectionItem
			? {
				visible: (action.section.value?.visible ?? true),
				value: action.section.value?.value.map((sectionItem) =>
					(sectionItem.props.name !== action.sectionItem!.name)
						? sectionItem
						: ((() => {
							const map: {
								type: Class<unknown>
								sectionInfo: (props: ExperienceInfoProps | SkillInfoParams) => ExperienceInfo | SkillInfo
							}[] = [
								{ type: ExperienceInfo, sectionInfo: props => new ExperienceInfo(props as ExperienceInfoProps) },
								{ type: SkillInfo, sectionInfo: props => new SkillInfo(props as SkillInfoParams) },
							]

							return map
								.find(({ type }) => sectionItem instanceof type)
								?.sectionInfo({ ...sectionItem.props, visible: !sectionItem.props.visible })
								?? sectionItem
						})() as (ExperienceInfo | SkillInfo))
				)
			}
			: { visible: !(action.section.value?.visible ?? true), value: action.section.value?.value }
	})
}

type InfoReducer = React.Reducer<
	Info,
	React.ReducerAction<ValueOf<typeof infoReducers>> | { type: "overwrite", value: Partial<Info> }>
const infoReducer: InfoReducer = (info, action) => ({
	titles: info.titles,
	contacts: action.type !== "contacts" ? info.contacts : infoReducers.contacts(info.contacts, action as React.ReducerAction<typeof infoReducers["contacts"]>),
	sections: action.type !== "sections" ? info.sections : infoReducers.sections(info.sections, action as React.ReducerAction<typeof infoReducers["sections"]>),
	...(action.type === "overwrite" ? action.value : {})
})

const contactCategoryMapper: Record<Contact_Category_Enum, ContactInfoCategories> = {
	[Contact_Category_Enum.Basic]: "basic",
	[Contact_Category_Enum.Account]: "accounts"
}

const getContacts = (data?: GetInfoQuery) => {
	return Object.fromEntries(
		data?.contacts.map(contact => [
			contact.name,
			new ContactInfo({
				category: contactCategoryMapper[contact.category],
				data: contact.data,
				href: contact.href ?? undefined,
				visible: contact.visible
			})
		] as const
		)
		?? []
	)
}

const skillCategoryMapper: Record<Skill_Category_Enum, SkillInfoCategory> = {
	[Skill_Category_Enum.FrameworkOrLibrary]: "framework or library",
	[Skill_Category_Enum.Language]: "language",
	[Skill_Category_Enum.OtherSkillOrTool]: "other skill or tool",
	[Skill_Category_Enum.ProgrammingLanguage]: "programming language",
}

const inscriptionTypeMapper: Record<Inscription_Type_Enum, SectionInscriptionType> = {
	[Inscription_Type_Enum.Inline]: "inline",
	[Inscription_Type_Enum.Under]: "under"
}

const experienceCategoryMapper: Record<Experience_Category_Enum, ExperienceInfoCategory> = {
	[Experience_Category_Enum.Education]: "education",
	[Experience_Category_Enum.Internship]: "internship",
	[Experience_Category_Enum.Job]: "job",
	[Experience_Category_Enum.Project]: "project",
	[Experience_Category_Enum.Volunteer]: "volunteer",
}

const remoteCategoryMapper: Record<Remote_Category_Enum, RemoteCategory> = {
	[Remote_Category_Enum.Hybrid]: "hybrid",
	[Remote_Category_Enum.Onsite]: "onsite",
	[Remote_Category_Enum.Remote]: "remote",
}

const getSections = (data?: GetInfoQuery): Partial<Info["sections"]> => {
	
	const getSkills: (categories?: SkillInfoCategory[]) => SkillInfo[] =
		(categories) =>
			(data?.skills.map(skill => new SkillInfo({
				name: skill.name,
				category: skillCategoryMapper[skill.category],
				display: skill.name ?? undefined,
				href: skill.href ?? undefined,
				visible: skill.visible
			})) ?? [])
				.filter(skill => categories?.includes(skill.props.category) ?? true)
				
	const getSkill: (name: string, categories?: SkillInfoCategory[]) => SkillInfo =
		(name, categories) =>
			getSkills(categories).find(skill => skill.props.name === name)
			?? new SkillInfo({ category: "N/A", name, display: `[${name}] NOT FOUND`, visible: true })
	
	// TODO: merge experiences and projects
			
	const getExperiences: (categories: ExperienceInfoCategory[]) => ExperienceInfo[] = (categories) =>
		(data?.experiences
			.map(experience => new ExperienceInfo({
					name: experience.name,
					name_href: experience.name_href ?? undefined,
					category: experienceCategoryMapper[experience.category],
					inscription: experience.inscription ?? undefined,
					inscription_type: inscriptionTypeMapper[experience.inscription_type],
					inscription_href: experience.inscription_href ?? undefined,
					date: DateTimeInterval.fromDateTimes(
						DateTime.fromISO(experience.date_start),
						experience.date_end ? DateTime.fromISO(experience.date_end) : DateTime.now()
					),
					location: experience.location ?? undefined,
					remote: remoteCategoryMapper[experience.remote],
					skills: experience.experience_skills.map(skill => getSkill(skill.skill.name)),
					description: experience.description ?? undefined,
					items: experience.items?.split("\\n"),
					visible: experience.visible
				})
			)
		?? [])
			.filter((experience) => categories.includes(experience.props.category))
	
	return {
		"Education": { visible: true, value: getExperiences(["education"]) },
		"Experience": { visible: true, value: getExperiences(["job", "internship", "volunteer"]) },
		"Languages": { visible: true, value: getSkills(["language"]) },
		"Programming Languages": { visible: true, value: getSkills(["programming language"]) },
		"Frameworks + Libraries": { visible: true, value: getSkills(["framework or library"]) },
		"Other Skills + Tools": { visible: true, value: getSkills(["other skill or tool"]) },
		"Personal Projects": { visible: true, value: getExperiences(["project"]) },
	}
}

const Resume: React.FC<{ rawInfo: GetInfoQuery }> = ({ rawInfo }) => {
	const [info, setInfo] = useReducer(infoReducer, processInfo({ titles, contacts: getContacts(rawInfo), sections: getSections(rawInfo) }))
	
	console.log(rawInfo.experiences[0].date_start)
	
	return (
		<main className="grid grid-flow-col grid-cols-[auto,1fr]">
			<ResumePage className="px-[48pt] text-justify [&_*]:leading-tight bg-[#ffffff]">
				<Titles {...info.titles} />
				<Contacts {...info.contacts} />
				<Sections {...info.sections} />
			</ResumePage>
			
			<ResumeController info={info} setInfo={setInfo}/>
		</main>
	)
}

export default Resume

export type {
	InfoReducer
}

