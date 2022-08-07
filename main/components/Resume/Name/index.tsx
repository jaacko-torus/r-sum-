import { NameInfo } from "../index.data";
import { CSSObject, css } from "@emotion/react";
import { H1 } from "../../Typography";
import Link from "next/link";

const Name = ({ first, last, spacing, href }: NameInfo) => {
	const Space = () => {
		return <span css={css({
			"paddingLeft": "1em",
			"paddingRight": "1em",
			"::selection": { "display": "none" },
		})}> | </span>
	}
	
	const text = last
		? <>{first}<Space />{last}</>
		: <>{first}</>
	
	return <H1>{text}</H1>
	
	// const css: CSSObject = { textAlign: "center" }

	// const Space = () => {
	// 	const spacingValue = props.spacing ? "0.25em" : "0"
	// 	return <span css={{
	// 		"paddingLeft": spacingValue,
	// 		"paddingRight": spacingValue,
	// 		"::selection": { display: "none" }
	// 	}}> </span>
	// }

	// const text = props.last
	// 	? <>{props.first}<Space />{props.last}</>
	// 	: <>props.first</>

	// return (
	// 	<H1 css={css}>
	// 		{typeof props.href === "string"
	// 			? <Link href={props.href}>{text}</Link>
	// 			: text}
	// 	</H1>
	// )
}

export default Name