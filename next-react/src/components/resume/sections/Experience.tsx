import type {ExperienceInfo, ExperienceInfoProps, SkillInfo} from "@/app/data"
import FAIcon from "@/components/FAIcon"
import {faCalendar, faGraduationCap, faMapMarked} from "@fortawesome/free-solid-svg-icons"
import ReactMarkdown from "react-markdown"
import {ReactMarkdownOptions} from "react-markdown/lib/react-markdown"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkSmartypants from "remark-smartypants"
import {Skills} from "./Skill"

import {alphabeticalComparer, dateOrIntervalComparer, experienceComparer} from "@/util/fns"
import Link from "next/link"

import type {HTMLAttributes, HTMLProps, PropsWithChildren} from "react"
import React from "react"
import {DateTime, Interval as DateTimeInterval} from "luxon"

type ExperienceProps = ExperienceInfoProps & { experienceID: string } & React.HTMLAttributes<HTMLElement>

const Markdown: React.FC<ReactMarkdownOptions> = options =>
	<ReactMarkdown
		{...options}
		remarkPlugins={[
			remarkGfm,
			// retextEnglish,
			// [retextSpell, dictionary], // no spell checker for now
			// retextIndefiniteArticle,
			// retextDiacritics,
			// retextSmartypants,

			// NOTE: This is used to to implement remarkSmartypants which uses retext
			// I can't make it work right here tho.
			//     (tree) => {
			// 	     visit(tree, "text", node => {
			// 	       node.value = String(retext()
			//           .use(retextSmartypants)
			//           .processSync(node.value))
			// 	     })
			//     }
			[remarkSmartypants, {dashes: "oldschool"}],
			// retextSyntaxMentions,
			// retextEmoji,
			remarkEmoji,
			// [remarkRetext, [unified().use(retextEnglish)]],
			...(options.remarkPlugins ?? [])
		]}/>

const InlineMarkdown: React.FC<ReactMarkdownOptions> = options =>
	<Markdown
		{...options}
		components={{
			p: ({children}) => <>{children}</>,
			...options.components
		}}
	/>

const md = (text: string) => <InlineMarkdown>{text}</InlineMarkdown>

type WrapperProps = PropsWithChildren & React.HTMLAttributes<HTMLElement> & { Component: React.FC<PropsWithChildren & React.HTMLAttributes<HTMLElement>> }
const Wrapper: React.FC<WrapperProps> = ({Component, children, className}) =>
	<Component className={className}>{children}</Component>

// const Experience: React.FC<ExperienceProps> = ({ name, inscription, inscription_type, skills, date, location, description, items, visible, experienceID }) => {
const Experience: React.FC<ExperienceProps> = ({
	name,
	name_href,
	category,
	inscription,
	inscription_type,
	inscription_href,
	date,
	location,
	remote,
	skills,
	description,
	items,
	visible,
	experienceID,
}) =>
	<div className="break-inside-avoid break-after-avoid">
		<div className="[&_*]:no-underline all-small-caps">
			<div className="flex items-baseline justify-between">
				<h4>{
					<Wrapper
						Component={({children}) => name_href
							? <Link href={name_href}>{children}</Link>
							: <>{children}</>}>
						{md(name)}
					</Wrapper>
				}</h4>
				{inscription && inscription_type === "inline" &&
					<Wrapper
						Component={({children}) => inscription_href
							? <Link href={inscription_href}>{children}</Link>
							: <>{children}</>}>
						{md(inscription)}
					</Wrapper>}
			</div>
			<div>
				{inscription && inscription_type === "under" &&
					<h6 className="text-base">
						<Wrapper
							Component={({children}) => inscription_href
								? <Link href={inscription_href}>{children}</Link>
								: <>{children}</>}>
							{md(inscription)}
						</Wrapper>
					</h6>}
			</div>
		</div>

		<div>
			<p className="flex justify-between tabular-nums">
				{category === "education"
					? <>
						<span>
							<FAIcon icon={faGraduationCap}/>
							{date instanceof DateTimeInterval
								? date.end.toFormat("LLLL, y")
								: [date.toFormat("LL/yyyy"), "Present"]
									.reduce((acc: string[], cur: string) => acc.includes(cur) ? acc : [...acc, cur], [])
									.map((dateRange, dateRangeIndex) =>
										<span key={`${experienceID}-dateRange-${dateRangeIndex}`}
											  className="-tracking-[2]">{dateRange}</span>)
									.flatMap((date, dateIndex) => [
										<span key={`${experienceID}-dateRangeSeparator-${dateIndex}`}>{md("--")}</span>,
										date
									])
									.slice(1)}
						</span>
						{date instanceof DateTimeInterval && date.end > DateTime.now() &&
							<span className="text-[#a5a5a5]">(expected)</span>}
						{!(date instanceof DateTimeInterval) &&
							<span className="text-[#a5a5a5]">({[date.toFormat("LL/yyyy"), "Present"]
								.reduce((acc: string[], cur: string) => acc.includes(cur) ? acc : [...acc, cur], [])
								.map((dateRange, dateRangeIndex) =>
									<span key={`${experienceID}-dateRange-${dateRangeIndex}`}
										  className="-tracking-[2]">{dateRange}</span>)
								.flatMap((date, dateIndex) => [
									<span key={`${experienceID}-dateRangeSeparator-${dateIndex}`}>{md("--")}</span>,
									date
								])
								.slice(1)})</span>}
					</>
					: <>
						<span>
							<FAIcon icon={faCalendar}/>
							{(date instanceof DateTimeInterval
								? date.toFormat("LL/yyyy").split(" \u2013 ")
								: [date.toFormat("LL/yyyy"), "Present"])
								.reduce((acc: string[], cur: string) => acc.includes(cur) ? acc : [...acc, cur], [])
								.map((dateRange, dateRangeIndex) =>
									<span key={`${experienceID}-dateRange-${dateRangeIndex}`}
										  className="-tracking-[2]">{dateRange}</span>)
								.flatMap((date, dateIndex) => [
									<span key={`${experienceID}-dateRangeSeparator-${dateIndex}`}>{md("--")}</span>,
									date
								])
								.slice(1)}
						</span>
						<span className="text-[#a5a5a5]">({Object
							.entries(
								(date instanceof DateTime
									? DateTimeInterval.fromDateTimes(date, DateTime.now())
									: date)
									.toDuration(["years", "months"])
									// A trick. Add 2 months, normalize, then subtract one so that:
									// 11 months => 11 months
									// 12 months => 1 year
									// 13 months => 1 year, 1 month
									.plus({months: 1})
									.normalize()
									.minus({months: 1})
									.toObject())
							.map(([unit, duration]) => [
								duration > 1 ? unit : unit.replace(/s$/, ""),
								Math.ceil(Number.parseFloat(duration))
							])
							.filter(([, duration]) => duration !== 0)
							.map(([unit, duration]) => `${duration} ${unit}`)
							.join(", ") || "1 month"
						})</span>
					</>}
			</p>
			{location && <p><FAIcon icon={faMapMarked}/>{location}</p>}
		</div>

		{skills && <Skills bubblesID={`${experienceID}-bubble-container`} list={(() => {
			const undefinedSkills = skills.filter(skill => skill === undefined)
			if (undefinedSkills.length) {
				console.debug("There are some skills that are not defined, please define them")
				console.debug({undefinedSkills})
			}
			return (skills.filter(skill => skill !== undefined) as SkillInfo[])
				// Alphabetical sort.
				.sort(alphabeticalComparer<SkillInfo>(skill => skill.props.name))
		})()}/>}

		{(() => { console.log({description}); return null })()}

		{description && <p>{<Markdown>{description}</Markdown>}</p>}

		{items &&
			<ul>{items.map((item, itemIndex) =>
				<li key={`${experienceID}-${itemIndex}`} className="py-0">{md(item)}</li>)}
			</ul>}
	</div>

interface ExperiencesProps {
	list: ExperienceInfo[]
	experiencesID: string
}

const Experiences: React.FC<ExperiencesProps> = ({list, experiencesID}) =>
	<div>{list
		.filter(experience => experience.props.visible)
		.sort(experienceComparer)
		.flatMap((experience, experienceIndex) => {
			const key = `resume-${experiencesID}-${experienceIndex}`
			return [
				<hr key={`${key}-hr`} className="my-1 mx-auto w-11/12 border-[#d1d1d1] border-[1px] border-dashed"/>,
				<Experience key={key} experienceID={key} {...experience.props} className="break-before-avoid"/>
			]
		})
		.slice(1)}
	</div>

export default Experience
export {
	Experiences,
	Wrapper,
}
export type {
	ExperienceProps,
	ExperiencesProps,
	WrapperProps,
}

