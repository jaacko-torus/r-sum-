"use client"

import { useGetInfoQuery } from "@/gql/graphql"
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql, useQuery } from "@apollo/client"
import { useState } from "react"
import Resume from "./Resume"

export const createApolloClient = (uri: string, token: string) => {
	return new ApolloClient({
		link: new HttpLink({
			uri,
			headers: {
				"Content-Type": "application/json",
				"X-Hasura-Admin-Secret": token
			}
		}),
		cache: new InMemoryCache(),
	})
}

const _useGetInfoQuery = () => useQuery(gql`
query GetInfo {
	contacts {
		id
		name
		href
		category
		data
		visible
	}
	experiences {
		id
		name
		name_href
		category
		inscription
		inscription_type
		inscription_href
		date_start
		date_end
		location
		remote
		experience_skills {
			skill {
				name
			}
		}
		description
		items
		visible
	}
	skills {
		id
		name
		href
		category
		description
		visible
	}
}
`)

const ResumeDataWrapper: React.FC = () => {
	const { loading, error, data } = useGetInfoQuery()
	
	if (loading) return <>loading...</>
	if (error) {
		console.info(error)
		return <>error... {error.message}</>
	}
	
	return <Resume rawInfo={data!}/>
}

type ResumeApolloWrapperProps = { uri: string, token: string }
const ResumeApolloWrapper: React.FC<ResumeApolloWrapperProps> = ({ uri, token }) => {
	const [client] = useState(createApolloClient(uri, token))
	
	return (
		<ApolloProvider client={client}>
			<ResumeDataWrapper />
		</ApolloProvider>
	)
}

export default ResumeApolloWrapper

export {
	ResumeDataWrapper
}
