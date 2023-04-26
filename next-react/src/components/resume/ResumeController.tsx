import { ContactInfo, ContactInfoCategories, ExperienceInfo, Info, SkillInfo } from "@/app/data";
import { alphabeticalComparer, experienceComparer } from "@/util/fns";
import React, { Dispatch, PropsWithChildren, ReducerAction } from "react";
import { Entries } from "type-fest";
import { InfoReducer } from "./Resume";

type ResumeControllerProps =
	{ info: Info, setInfo: Dispatch<ReducerAction<InfoReducer>> }
	& React.HTMLAttributes<HTMLElement>

type ToggleBubbleProps = PropsWithChildren & {
	name: string;
	visible: boolean;
	onToggle?: () => void;
};

const ToggleBubble: React.FC<ToggleBubbleProps> = ({ name, visible, onToggle, children }) =>
	<button
		key={`resume-controller-contacts-${name}`}
		className={[
			// "inline-block",
			"px-1",
			"border",
			"rounded-md",
			"border-[#517dd4]",
			visible ? "bg-[#517dd4] text-white" : "bg-white text-[#517dd4]",
			children ? "px-2 py-1" : "py-0",
		].join(" ")}
		onClick={onToggle}
	>
		{name}
		{children ?? null}
	</button>

export const ResumeController: React.FC<ResumeControllerProps> = ({ info, setInfo, className }) =>
	<aside className={`bg-black break-inside-avoid whitespace-nowrap py-8 pr-4 ${className}`}>
		<details open className="ml-4">
			<summary className="text-white">Contacts</summary>
			<div className="flex flex-wrap gap-2">
				{Object.entries(info.contacts).map(([name, contact]) =>
					<ToggleBubble key={`resume-controller-contacts-${name}`} name={name} visible={contact?.props.visible ?? true} onToggle={() => setInfo({ type: "contacts", contact: { name, value: contact } })} />)}
			</div>
		</details>

		<details open className="ml-4">
			<summary>Sections</summary>
			{(Object.entries(info.sections) as Entries<Info["sections"]>).map(([name, section]) =>
				<details key={`resume-controller-sections-${name}`} className="ml-4" open>
					<summary>
						<input
							type="checkbox"
							checked={section?.visible ?? true}
							onChange={() => setInfo({ type: "sections", section: { name, value: section } })}
							className="mr-1" />
						<span>{name}</span>
					</summary>
					<div className="flex flex-wrap gap-2">
						{section?.value.sort((a, b) => ((a as ExperienceInfo).props.description && (b as ExperienceInfo).props.description)
								? experienceComparer(a as ExperienceInfo, b as ExperienceInfo)
								: alphabeticalComparer<SkillInfo>(skill => skill.props.name)(a as SkillInfo, b as SkillInfo)
						).map((sectionItem) =>
							<div key={`resume-controller-sections-${name}-${sectionItem.props.name}`}>
								<ToggleBubble
									name={sectionItem.props.name}
									visible={sectionItem.props.visible}
									onToggle={() => setInfo({
										type: "sections",
										section: { name, value: section },
										sectionItem: { name: sectionItem.props.name }
									})}
								>{(sectionItem as ExperienceInfo).props.inscription ? <><br/>{(sectionItem as ExperienceInfo).props.inscription}</> : null}</ToggleBubble>
							</div>
						) ?? null}
					</div>
				</details>)}
		</details>
	</aside>;

export default ResumeController

export type {
	ResumeControllerProps
}
