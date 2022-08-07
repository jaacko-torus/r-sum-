import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"

import { H6 } from "../../Typography"
import { CSSObject } from "@emotion/react"
import Link from "next/link"
import { ReactNode } from "react"

interface FAIconProps {
	icon: IconDefinition
}

const FAIcon = ({ icon }: FAIconProps) => {
	return <FontAwesomeIcon
		icon={icon}
		style={{
			fontSize: "0.75em",
			paddingRight: "0.25em",
		}}
	/>
}

interface InfoFieldProps { icon: IconDefinition, data: string, href?: string, defaultLink?: boolean }
const InfoField = ({ icon, data, href, defaultLink }: InfoFieldProps) => {
	
	const Text = ({ data, css }: { data: ReactNode, css?: CSSObject }) =>
		<H6 css={css}><FAIcon icon={icon} />{data}</H6>

	return href && !defaultLink
		// ? <Link href={href}><Text data={data} css={{ color: "#556cd6" }} /></Link>
		? <Text data={<Link href={href}>data</Link>} css={{ color: "#556cd6" }} />
		: <Text data={data} />
}

export default InfoField
export type {
	InfoFieldProps
}
export {
	InfoField,
	FAIcon,
}
