import {MapSwitch2} from "@/util/MapSwitch"
import {parsePhoneNumber} from "awesome-phonenumber"
import {ContactInfo, ContactInfoCategories, ContactInfoProps, Info, NameInfo} from "./data"

export const titles: Info["titles"] = {
	name: {first: "Julián Antonio", last: "Avar Campopiano", spacing: true},
	// tagline: "Software Engineer",
}

export const processInfo: (input_info: Info) => Info = (input_info: Info) => {
	const DataParser: <Mode extends "string" | "data", Data>(
		fromRaw: (input: MapSwitch2<Mode, ["string", string], ["data", Data]>) => Data
	) => (
		data: undefined | Parameters<typeof fromRaw>[0],
		partial?: Partial<Data>
	) => Data | undefined =
		(fromRaw) => (data, partial) => data && ({...fromRaw(data), ...partial})

	const ContactInfoParser = <Category extends ContactInfoCategories>(
		transformer: (rawData: ContactInfoProps<Category>) => Partial<ContactInfoProps<Category>>
	) => DataParser<"data", ContactInfo<Category>>(
		rawData => ({
			props: {
				...rawData.props,
				...(transformer ? transformer(rawData.props) : {}),
			}
		})
	)

	const defaults = {
		name: {first: "No name", spacing: false}
	}

	const result: Info = {
		...input_info,
		titles: {
			name: DataParser<"data", NameInfo>(name => name)(input_info.titles["name"]) ?? defaults.name,
			tagline: input_info.titles["tagline"],
		},
		contacts: {
			["email"]: ContactInfoParser<"basic">(({data}) => ({
				href: `mailto:${data}`
			}))(input_info["contacts"]["email"] as ContactInfo<"basic"> | undefined),
			["phone"]: ContactInfoParser<"basic">(({data}) => {
				const phone = parsePhoneNumber(data)
				return {
					data: phone.valid ? phone.number.national : data,
					href: phone.valid ? phone.number.rfc3966 : undefined
				}
			})(input_info.contacts["phone"] as ContactInfo<"basic"> | undefined),
			["location"]: ContactInfoParser(({data}) => ({
				href: `https://www.google.com/maps/place/${data.replaceAll(" ", "+")}`
			}))(input_info["contacts"]["location"]),
			["website"]: ContactInfoParser<"basic">(({data}) => ({
				href: `https://${data}`
			}))(input_info["contacts"]["website"] as ContactInfo<"basic"> | undefined),

			["github"]: ContactInfoParser<"accounts">(({data}) => ({
				href: `https://github.com/${data}/`
			}))(input_info["contacts"]["github"] as ContactInfo<"accounts"> | undefined),
			["itchio"]: ContactInfoParser<"accounts">(({data}) => ({
				href: `https://${data}.itch.io/`
			}))(input_info["contacts"]["itchio"] as ContactInfo<"accounts"> | undefined),
			["linkedin"]: ContactInfoParser<"accounts">(({data}) => ({
				href: `https://linkedin.com/in/${data}`
			}))(input_info["contacts"]["linkedin"] as ContactInfo<"accounts"> | undefined),
			["npm"]: ContactInfoParser<"accounts">(({data}) => ({
				href: `https://www.npmjs.com/~${data}`
			}))(input_info["contacts"]["npm"] as ContactInfo<"accounts"> | undefined),
			["orcid"]: ContactInfoParser<"accounts">(({data}) => ({
				href: `https://orcid.org/${data}`
			}))(input_info["contacts"]["orcid"] as ContactInfo<"accounts"> | undefined),
		},
	}

	return result
}
