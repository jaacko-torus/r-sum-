import type { NextPage } from "next"
import Link from "next/link";

import Resume from "../components/Resume"

const Home: NextPage = () => {
	return (
		<div>
			<div
				css={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>	
				<Link href="/about">Go to the about page</Link>
				<Resume/>
			</div>
		</div>
	)
}

export default Home
