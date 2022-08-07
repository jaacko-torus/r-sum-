import { Info } from "@/app/data";
import { Dispatch, ReducerAction } from "react";
import { Entries } from "type-fest";
import { InfoReducer } from "./Resume";

type ResumeControllerProps = { info: Info, setInfo: Dispatch<ReducerAction<InfoReducer>> } & React.HTMLAttributes<HTMLElement>

export const ResumeController: React.FC<ResumeControllerProps> = ({ info, setInfo, className }) =>
	<aside className={`[&_*]:text-white bg-black break-inside-avoid whitespace-nowrap ${className}`}>
		<details open className="ml-4">
			<summary>Contacts</summary>
			{(Object.entries(info.contacts) as Entries<Info["contacts"]>).map(([name, contact]) =>
				<div key={`resume-controller-contacts-${name}`}>
					<input
						type="checkbox"
						checked={contact?.props.visible ?? true}
						onChange={() => setInfo({ type: "contacts", contact: { name, value: contact } })}
						className="mr-1" />
					<span>{name}</span>
				</div>)}
		</details>

		<details open className="ml-4">
			<summary>Sections</summary>
			{(Object.entries(info.sections) as Entries<Info["sections"]>).map(([name, section]) =>
				<details key={`resume-controller-sections-${name}`} className="ml-4">
					<summary>
						<input
							type="checkbox"
							checked={section?.visible ?? true}
							onChange={() => setInfo({ type: "sections", section: { name, value: section } })}
							className="mr-1" />
						<span>{name}</span>
					</summary>
					{section?.value.map((sectionItem) =>
						<div key={`resume-controller-sections-${name}-${sectionItem.props.name}`}>
							<input
								type="checkbox"
								checked={sectionItem.props.visible}
								onChange={() => setInfo({ type: "sections", section: { name, value: section }, sectionItem: { name: sectionItem.props.name } })}
								className="mr-1" />
							<span>{sectionItem.props.name}</span>
						</div>
					) ?? null}
				</details>)}
		</details>
	</aside>;

export default ResumeController

export type {
	ResumeControllerProps
}
