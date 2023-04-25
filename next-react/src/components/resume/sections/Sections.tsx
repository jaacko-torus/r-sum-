import {ExperienceInfo, Info, SectionInfo, SkillInfo} from "@/app/data"
import {Class} from "type-fest"
import {Experiences} from "./Experience"
import {Skills} from "./Skill"
import React from "react";

const sectionMapper: (name: string) => {
	type: Class<unknown>,
	Component: (content: (ExperienceInfo | SkillInfo)[]) => JSX.Element
}[] = (name) => [
	{
		type: ExperienceInfo,
		Component: content =>
			<Experiences experiencesID={`resume-${name}`} list={content as ExperienceInfo[]}/>
	}, {
		type: SkillInfo,
		Component: content =>
			<Skills bubblesID={`resume-${name}`} list={content as SkillInfo[]}/>
	},
]

type SectionProps = { name: string, content: (SectionInfo<ExperienceInfo> | SectionInfo<SkillInfo>) }

const Section: React.FC<SectionProps> = ({name, content}) =>
	// HACK: Cannot use every directly, so there's some mapping involved to regularize the type.
	content.visible && content.value.at(0) && content.value.map(item => item.props).some(props => props.visible)
		?
		<section key={name}>
			<h3 className="break-after-avoid">{name}</h3>
			<hr className="my-2 border-[#d4ced0] border-[2px] rounded-[2px]"/>
			{sectionMapper(name)
					.find(({type}) => content.value.at(0)! instanceof type)
					?.Component(content.value)
				?? null}
		</section>
		: null

const Sections: React.FC<Info["sections"]> = sections =>
	<section className="columns-2">{Object
		.entries(sections)
		.filter(([, content]) => content.value.length)
		.map(([name, content]) => <Section key={`resume-section-${name}`} name={name} content={content}/>)}
	</section>

export default Sections