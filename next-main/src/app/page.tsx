import ResumeApolloWrapper from "@/components/resume/ResumeDataWrapper"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const Home: React.FC = () =>
	<ResumeApolloWrapper uri={process.env["HASURA_URI"]!} token={process.env["HASURA_AUTH_TOKEN"]!} />

export default Home
