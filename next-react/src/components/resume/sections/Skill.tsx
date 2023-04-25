import {SkillInfo, SkillInfoParams} from "@/app/data"
import {alphabeticalComparer} from "@/util/fns"
import Link from "next/link"
import React, {PropsWithChildren} from "react"

type SkillProps = SkillInfoParams

const Skill: React.FC<SkillProps> = ({name, display, href, visible}) => {
	const Text: React.FC<PropsWithChildren<{ link?: boolean }>> = ({link, children}) => {
		const textColor = (link ?? false) ? "text-[#a53d3d]" : "text-[#848484]"
		return <p
			className={`border-solid border border-[#d1d1d1] px-1 rounded-md inline whitespace-nowrap ${textColor}`}>{children}</p>
	}

	return href
		? <Text link><Link className="no-underline text-inherit" href={href}>{display ?? name}</Link></Text>
		: <Text>{display ?? name}</Text>
}

interface SkillsProps {
	list: SkillInfo[]
	bubblesID: string
}

const Skills: React.FC<SkillsProps & React.HTMLAttributes<HTMLElement>> = ({list, bubblesID}) =>
	<div className="flex gap-[5px] p-0 flex-wrap break-before-avoid">{list
		.filter(skill => skill.props.visible)
		.sort(alphabeticalComparer<SkillInfo>(skill => skill.props.name))
		.map((skill, index) =>
			<Skill {...skill.props} key={`${bubblesID}-${index}}`}/>)}
	</div>

export default Skill
export {
	Skills
}
export type {
	SkillProps,
	SkillsProps
}

