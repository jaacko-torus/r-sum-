import { DateTime, Interval as DateTimeInterval } from "luxon"

export type NameInfo = { first: string, last?: string, spacing: boolean, href?: string }

export type ContactInfoCategories = "basic" | "accounts"
export type ContactInfoProps<Category extends ContactInfoCategories> = { category: Category, data: string, href?: string, visible: boolean }
export type ContactInfoParams<Category extends ContactInfoCategories> = ContactInfoProps<Category>
export class ContactInfo<Category extends ContactInfoCategories> {
	props: ContactInfoProps<Category>
	constructor(props: ContactInfoParams<Category>) { this.props = props }
}

export type SectionInscriptionType = "inline" | "under"
export type ExperienceInfoCategory = "education" | "internship" | "job" | "volunteer" | "project"
export type RemoteCategory = "onsite" | "hybrid" | "remote"
export type ExperienceInfoProps = {
	name: string,
	name_href?: string,
	category: ExperienceInfoCategory,
	inscription?: string,
	inscription_type: SectionInscriptionType,
	inscription_href?: string,
	date: DateTime | DateTimeInterval,
	location?: string,
	remote: RemoteCategory,
	skills?: (SkillInfo | undefined)[],
	description?: string,
	items?: string[],
	visible: boolean
}
export class ExperienceInfo {
	props: ExperienceInfoProps
	constructor(props: ExperienceInfoProps) { this.props = { ...props } }
}

export type SkillInfoCategory = "language" | "programming language" | "framework or library" | "other skill or tool" | "N/A"
export type SkillInfoProps = { name: string, category: SkillInfoCategory, display?: string, href?: string, visible: boolean }
export type SkillInfoParams = SkillInfoProps
export class SkillInfo {
	props: SkillInfoProps
	constructor(props: SkillInfoParams) { this.props = props }
}

export type SectionInfo<SectionType = ExperienceInfo | SkillInfo> = { value: SectionType[], visible: boolean }

export type Info = {
	titles: {
		name: NameInfo,
		tagline?: string,
	},
	
	contacts: Record<string, ContactInfo<ContactInfoCategories> | undefined>
	
	sections:
	{
		["Education"]?: SectionInfo<ExperienceInfo>,
		["Experience"]?: SectionInfo<ExperienceInfo>,
		["Languages"]?: SectionInfo<SkillInfo>,
		["Programming Languages"]?: SectionInfo<SkillInfo>,
		["Frameworks + Libraries"]?: SectionInfo<SkillInfo>,
		["Other Skills + Tools"]?: SectionInfo<SkillInfo>,
		["Personal Projects"]?: SectionInfo<ExperienceInfo>,
	}
}
