import {Info, NameInfo} from "@/app/data"
import Link from "next/link"
import {Wrapper} from "./sections/Experience"
import {QRCodeSVG} from "qrcode.react"
import React from "react";

const Name: React.FC<NameInfo> = ({first, last, spacing, href}) => {
	const Space: React.FC = () => {
		const horizontalSpacing = spacing ? "px-[5pt]" : "px-0"
		return <span className={`${horizontalSpacing} selection:hidden`}> </span>
	}

	const text =
		<>
			{last
				? <>{first}<Space/>{last}</>
				: first}
		</>

	return (
		<div className="flex items-center justify-between">
			<QRCodeSVG
				value="https://www.julian-a-avar-c.me"
				size={80}
				imageSettings={{
					src: "/profile.png",
					height: 20,
					width: 20,
					excavate: true
				}}
				level="M"
				fgColor="#8f4f4f"
				className="inline"/>
			<h1>
				<Wrapper Component={({children}) => href
					? <Link href={href}>{children}</Link>
					: <>{children}</>}>
					{text}
				</Wrapper>
			</h1>
		</div>
	)
}

interface TaglineProps {
	tagline?: string,
	className?: string
}

const Tagline: React.FC<TaglineProps & React.HTMLAttributes<HTMLElement>> = ({tagline, className}) =>
	tagline ? <h2 className={className}>{tagline}</h2> : null

const Titles: React.FC<Info["titles"]> = ({name, tagline}) =>
	<>
		<Name {...name} />
		<Tagline tagline={tagline}/>
	</>

export default Titles
export {Name, Tagline}
export type {TaglineProps}
