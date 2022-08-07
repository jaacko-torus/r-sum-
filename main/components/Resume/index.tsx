import { v4 as uuidv4 } from "uuid"
import type { PartialDeep } from "type-fest"
import "./style.module.css"

import "@fontsource/gentium-book-basic"

import Event from "./Event"
import Name from "./Name"
import Tagline from "./Tagline"

import {
	InfoField
} from "./InfoField"
import { DataInfo, Info, InputInfo, input_info, NameInfo, Skill } from "./index.data"
import { faAt, faMapMarked, faPhoneAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faItchIo, faLinkedin, faNpm } from "@fortawesome/free-brands-svg-icons"
import { CSSObject } from "@emotion/react";
import { H3, P } from "../Typography";
import Link from "next/link";

const info: (input_info: InputInfo) => Info = (input_info: InputInfo) => {
	function DataParser<Data>(fromString: ((s: string) => Data)) {
		return (
			data: string | Data,
			partial: PartialDeep<Data> | undefined = undefined
		) => ({
			...(typeof (data) === "string"
				? fromString(data)
				: data),
			...(partial as object)
		})
	}

	const DataInfoParser = (f: (data: string) => string) => DataParser<DataInfo>((data) => {
		return { data, href: data === "" ? undefined : f(data) }
	})

	return {
		...input_info,
		
		name: DataParser<NameInfo>((name) => {
			const [first, ...last] = name.split(" ")
			return { first, last: last.join(" "), spacing: false }
		})(input_info.name),
		tagline: input_info.tagline,

		basic: {
			email: DataInfoParser(data => `mailto:${data}`)(input_info.basic.email ?? ""),
			phone: DataInfoParser(data => `tel:${data}`)(input_info.basic.phone ?? ""),
			location: DataInfoParser(data => `https://www.google.com/maps/place/${data.replaceAll(" ", "+")}`)(input_info.basic.location ?? ""),
		},

		accounts: {
			github: DataInfoParser(user => `https://github.com/${user}/`)(input_info.accounts.github ?? ""),
			itchio: DataInfoParser(user => `https://${user}.itch.io/`)(input_info.accounts.itchio ?? ""),
			linkedin: DataInfoParser(user => `https://linkedin.com/in/${user}`)(input_info.accounts.linkedin ?? ""),
			npm: DataInfoParser(user => `https://www.npmjs.com/~${user}`)(input_info.accounts.npm ?? ""),
		},
	}
}

interface BubbleProps { data: string, href?: string, css?: CSSObject }
const Bubble = ({ data, href, css }: BubbleProps) => {
	const Text = ({ data, css }: { data: string, css?: CSSObject }) => (
		<P css={{
			border: "1px solid #666666",
			color: "#8f0d0d",
			padding: "2px",
			borderRadius: "5px",
			display: "inline",
			...css,
		}}>{data}</P>
	)
	
	return href
		? <Link href={href} css={{ /*textDecoration: "none", */...css }}>{data}</Link>
		: <Text data={data} css={css} />
}

const BubbleContainer = ({ list }: { list: Skill[] }) =>
	<div css={{ display: "flex", gap: "5px", padding: "0" }}>
		{list.map((skill) => skill.href
			? <Bubble key={uuidv4()} data={skill.display} />
			: <Bubble key={uuidv4()} data={skill.display} href={skill.href as string} />)}
	</div>

const Resume = () => {
	const processed_info = info(input_info)

	const InfoFieldConstructor = (icon: IconDefinition, defaultLink: boolean) => {
		const InfoFieldOrNull = (props?: DataInfo) => !props
			? <></>
			: <InfoField icon={icon} defaultLink={defaultLink} {...props} />
		return InfoFieldOrNull
	}

	const Email = InfoFieldConstructor(faAt, false)
	const Phone = InfoFieldConstructor(faPhoneAlt, false)
	const Location = InfoFieldConstructor(faMapMarked, false)
	// faGithub, faItchIo, faLinkedin, faNpm 
	const Github = InfoFieldConstructor(faGithub, false)
	const ItchIo = InfoFieldConstructor(faItchIo, false)
	const Linkedin = InfoFieldConstructor(faLinkedin, false)
	const Npm = InfoFieldConstructor(faNpm, false)

	return (
		<div>
			<Name {...processed_info["name"]} />
			<Tagline tagline={processed_info["tagline"]} />

			<div css={{
				display: "flex",
				justifyContent: "space-evenly",
				width: "800px",
			}}>
				<Email {...processed_info["basic"]["email"] as DataInfo} />
				<Phone {...processed_info["basic"]["phone"] as DataInfo} />
				<Location {...processed_info["basic"]["location"] as DataInfo} />
			</div>

			<div css={{
				display: "flex",
				justifyContent: "space-evenly",
			}}>
				<Github {...processed_info["accounts"]["github"] as DataInfo} />
				<ItchIo {...processed_info["accounts"]["itchio"] as DataInfo} />
				<Linkedin {...processed_info["accounts"]["linkedin"] as DataInfo} />
				<Npm {...processed_info["accounts"]["npm"] as DataInfo} />
			</div>

			<div css={{ columnCount: 1 }}>
				{processed_info["education"] && <>
					<H3>Education</H3>
					{processed_info["education"].map(event => <Event key={uuidv4()} {...event} />)}
				</>}
				
				{processed_info["experience"] && <>
					<H3>Experience</H3>
					{processed_info["experience"].map(event => <Event key={uuidv4()} {...event} />)}
				</>}
				
				{processed_info["languages"] && <>
					<H3>Languages</H3>
					<BubbleContainer list={processed_info["languages"]} />
				</>}
				
				{processed_info["programming languages"] && <>
					<H3>Programming Languages</H3>
					<BubbleContainer list={processed_info["programming languages"]} />
				</>}
				
				{processed_info["frameworks + libraries"] && <>
					<H3>Frameworks + Libraries</H3>
					<BubbleContainer list={processed_info["frameworks + libraries"]} />
				</>}
				
				{processed_info["other skills + tools"] && <>
					<H3>Other Skills + Tools</H3>
					<BubbleContainer list={processed_info["other skills + tools"]} />
				</>}
			</div>
		</div>
	)
}

export default Resume
