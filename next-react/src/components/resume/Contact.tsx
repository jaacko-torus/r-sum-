import {ContactInfoCategories, ContactInfoProps, Info} from "@/app/data"
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core"
import {faGithub, faItchIo, faLinkedin, faNpm, faOrcid} from "@fortawesome/free-brands-svg-icons"
import {faAt, faMapMarked, faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import type {PropsWithChildren} from "react"
import React from "react";
import FAIcon from "../FAIcon"

const CONTACT_LINK_COLOR = "[&_*]:text-[#517dd4]"

type ContactProps = ContactInfoProps<ContactInfoCategories> & { icon: IconDefinition }

const Contact: React.FC<ContactProps & React.HTMLAttributes<HTMLElement>> = ({
	icon,
	data,
	href,
	visible,
	className
}) => {
	if (!visible) return null

	const Text: React.FC<PropsWithChildren & React.HTMLAttributes<HTMLElement>> = ({children, className}) =>
		<h6 className={className}><FAIcon icon={icon} size="xs" className="top-[1pt]"/>{children}</h6>

	return href
		?
		<Text className={`${CONTACT_LINK_COLOR} ${className}`}><Link href={href} className="no-underline">{data}</Link></Text>
		: <Text className={className}>{data}</Text>
}

const ContactConstructor: (icon: IconDefinition) => React.FC<ContactInfoProps<ContactInfoCategories>> =
	(icon) => {
		const InfoFieldOrNull: React.FC<ContactInfoProps<ContactInfoCategories> | undefined> = props => props
			? <Contact icon={icon} {...props} />
			: null
		return InfoFieldOrNull
	}

const contactInfoCategoryMapper: {
	contact: keyof Info["contacts"],
	Component: React.FC<ContactInfoProps<"basic" | "accounts">>
}[] = [
	{contact: "email", Component: ContactConstructor(faAt)},
	{contact: "phone", Component: ContactConstructor(faPhoneAlt)},
	{contact: "location", Component: ContactConstructor(faMapMarked)},

	{contact: "github", Component: ContactConstructor(faGithub)},
	{contact: "itchio", Component: ContactConstructor(faItchIo)},
	{contact: "linkedin", Component: ContactConstructor(faLinkedin)},
	{contact: "npm", Component: ContactConstructor(faNpm)},
	{contact: "orcid", Component: ContactConstructor(faOrcid)},
]

const contactInfoCategory: (contacts: Info["contacts"]) => (category: ContactInfoCategories) => JSX.Element[] =
	contacts => category => contactInfoCategoryMapper
		.filter(item =>
			contacts[item.contact]?.props.category === category)
		.map(({contact, Component}) =>
			<Component key={contact} {...contacts[contact]?.props!} />)

const Contacts: React.FC<Info["contacts"]> = (contacts) =>
	<section className="[&>section]:flex [&>section]:justify-evenly mb-8 [&_*]:text-base">
		<section>{contactInfoCategory(contacts)("basic")}</section>
		<section>{contactInfoCategory(contacts)("accounts")}</section>
	</section>

export default Contact
export {
	Contacts
}
export type {
	ContactProps
}

