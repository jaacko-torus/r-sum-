import { H2 } from "../../Typography";

interface TaglineProps {
	tagline?: string;
}

const Tagline = ({ tagline }: TaglineProps) => {
	return !tagline ? null : (
		<H2 css={{
			fontFamily: `"Gentium Book Basic"`,
			textAlign: "center",
			color: "#ff0000",
		}}>
			{tagline}
		</H2>
	);
};

export default Tagline
