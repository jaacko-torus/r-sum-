import Link from "next/link"

export type NameInfo = { first: string, last?: string, spacing: boolean, href?: string }
export type DataInfo = { data: string, href?: string }
export type EventInfo = {
	title: string,
	subtitle?: string,
	date: string,
	location: string
	description?: React.ReactNode,
	items?: string[],
}

type SkillProps = { name: string, display?: string, href?: string }
export class Skill {
	name: string
	display: string
	href: string | null
	
	private constructor({ name, display, href }: SkillProps) {
		this.name = name
		this.display = display ?? name
		this.href = href ?? null
	}
	
	static define({ name, display, href }: SkillProps) { return new Skill({ name, display, href }) }
}

export interface Info {
	["name"]: NameInfo,
	["tagline"]?: string,

	["basic"]: {
		["email"]?: DataInfo,
		["phone"]?: DataInfo,
		["location"]?: DataInfo,
	},

	["accounts"]: {
		["github"]?: DataInfo,
		["itchio"]?: DataInfo
		["linkedin"]?: DataInfo,
		["npm"]?: DataInfo,
	},

	["education"]?: EventInfo[],
	["experience"]?: EventInfo[],
	["languages"]?: Skill[],
	["programming languages"]?: Skill[],
	["frameworks + libraries"]?: Skill[],
	["other skills + tools"]?: Skill[],
	["personal projects"]?: Skill[],
}

export interface InputInfo {
	["name"]: string | NameInfo,
	["tagline"]?: string,

	["basic"]: {
		["email"]?: string | DataInfo,
		["phone"]?: string | DataInfo,
		["location"]?: string | DataInfo,
	},

	["accounts"]: {
		["github"]?: string | DataInfo,
		["itchio"]?: string | DataInfo
		["linkedin"]?: string | DataInfo,
		["npm"]?: string | DataInfo,
	},

	["education"]?: EventInfo[],
	["experience"]?: EventInfo[],
	["languages"]?: Skill[],
	["programming languages"]?: Skill[],
	["frameworks + libraries"]?: Skill[],
	["other skills + tools"]?: Skill[],
	["personal projects"]?: Skill[],
}

export const input_info: InputInfo = {
	name: { first: "Julián Antonio", last: "Avar Campopiano", spacing: true },
	tagline: "Software Engineer",

	basic: {
		email: "julian.a.avar@gmail.com",
		phone: "7736800681",
		location: "Champaign, IL",
	},

	accounts: {
		github: "jaacko-torus",
		itchio: "jaacko-torus",
		linkedin: "julian-avar-campopiano",
		npm: "jaacko-torus",
	},

	education: [
		{
			title: "Full Sail University",
			subtitle: "Bachelors in Computer Science",
			date: "October 2020--Present",
			location: "Winter Park, Florida",
		}, {
			title: "Bellecour École",
			subtitle: "Bachelors in Game Design",
			date: "September 2019--June 2020",
			location: "Lyon, France",
		},
	],

	experience: [
		{
			title: "Software Engineer",
			subtitle: "Frasca International, Inc.",
			date: "April 2022--Present",
			location: "Champaign, IL",
			items: [
				"Creating aircraft simulators to train pilots, using C++ and C#",
				"Developing internal tools with WPF and .NET",
			],
		}, {
			title: "Interactive & Web Developer",
			subtitle: "John Deere",
			date: "January--March 2022",
			location: "Davenport, IA",
			items: [
				"Refactored chunks of the JS DevOps code base",
				"Helped creating/maintaining docs for the JS DevOps repositories",
				"Created interactives using Unity",
				"Built library infrastructure for future interactives in C#",
			],
		}, {
			title: "Kitchen Staff",
			subtitle: "Panda Express",
			date: "October--November 2021",
			location: "Champaign, IL",
		}, {
			title: "Programming Tutor",
			subtitle: "iD Tech",
			date: "May--December 2021",
			location: "Campbell, CA",
			items: [
				"Taught general JavaScript, Python, Java, and C",
				"Taught 100+ students",
				"Taught age ranges 11--24, ~20% pursing a college degree",
			],
		}, {
			title: "Intern",
			subtitle: "Hayden Organic/Iron Sun Holdings",
			date: "May--September 2021",
			location: "NYC, NY",
		}, {
			title: "Game Jam Lead & Programmer",
			subtitle: "Jimmy's Test Site",
			date: "March 2020--November 2021",
			location: "Online Group",
			description: <>Online group created by Abdullah Salem ({<Link href="https://github.com/Fenguinn">@Fenguinn</Link>}) and me, later evolved to 10 programmers + 3 artists which took turns aiding our projects.We had people from USA, Brazil, France, and China.</>,
			items: [
				"Led 10+ people",
				"Taught C#, GDScript, and git workflows to new collaborators",
				"Took responsibility to finish things where others couldn't",
				"Learned to coordinate development and art teams",
			],
		},
	],
	
	"languages": [
		Skill.define({ name: "English" }),
		Skill.define({ name: "Spanish" })
	],
	
	"programming languages": [
		Skill.define({ name: "C"/*, href: "https://google.com" */}),
		Skill.define({ name: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" }),
		Skill.define({ name: "C++", href: "https://en.wikipedia.org/wiki/C++" }),
		Skill.define({ name: "CSS", href: "https://en.wikipedia.org/wiki/CSS" }),
		Skill.define({ name: "Fortran90" }),
		Skill.define({ name: "GDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)#GDScript" }),
		// Skill.define({ name: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" }), // Not enough real world experience yet
		Skill.define({ name: "HTML", href: "https://es.wikipedia.org/wiki/HTML" }),
		Skill.define({ name: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" }),
		Skill.define({ name: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" }),
		Skill.define({ name: "Julia" }),
		Skill.define({ name: "LaTeX", href: "https://en.wikipedia.org/wiki/LaTeX" }), // \LaTeX
		Skill.define({ name: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" }),
		Skill.define({ name: "Node", href: "https://en.wikipedia.org/wiki/Node.js" }),
		Skill.define({ name: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" }),
		Skill.define({ name: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" }),
		Skill.define({ name: "Scala", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" }),
		Skill.define({ name: "SQL", href: "https://en.wikipedia.org/wiki/SQL" }),
		Skill.define({ name: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" }),
	],
	
	"frameworks + libraries": [
		Skill.define({ name: "CodeMirror.js", href: "https://codemirror.net/" }),
		Skill.define({ name: "dat.GUI", href: "https://github.com/dataarts/dat.gui/" }),
		Skill.define({ name: "Defold", href: "https://defold.com/" }),
		Skill.define({ name: "Django", href: "https://www.djangoproject.com" }),
		Skill.define({ name: "Express", href: "https://expressjs.com/" }),
		Skill.define({ name: "Godot", href: "https://godotengine.org/" }),
		Skill.define({ name: "Gulp", href: "https://gulpjs.com" }),
		Skill.define({ name: "MatterJS", href: "https://brm.io/matter-js/" }),
		Skill.define({ name: "MongoDB", href: "https://www.mongodb.com/" }),
		Skill.define({ name: "MySQL", href: "https://www.mysql.com/" }),
		Skill.define({ name: "NextJS", href: "https://nextjs.org" }),
		Skill.define({ name: "NUnit", href: "https://nunit.org/" }),
		Skill.define({ name: "OCRA", href: "https://github.com/larsch/ocra/" }),
		Skill.define({ name: "P5JS", href: "https://p5js.org/" }),
		Skill.define({ name: "Phaser", href: "https://phaser.io/" }),
		Skill.define({ name: "PostCSS", href: "https://postcss.org/" }),
		Skill.define({ name: "PostgreSQL", href: "https://www.postgresql.org" }),
		Skill.define({ name: "React Native", href: "https://reactnative.dev/" }),
		Skill.define({ name: "React", href: "https://reactjs.org/" }),
		Skill.define({ name: "Rollup", href: "https://www.rollupjs.org/" }),
		Skill.define({ name: "Sass", href: "https://sass-lang.com/" }),
		Skill.define({ name: "SBT", href: "https://www.scala-sbt.org/" }),
		Skill.define({ name: "Snowpack", href: "https://www.snowpack.dev/" }),
		Skill.define({ name: "SolidJS", href: "https://www.solidjs.com/" }),
		Skill.define({ name: "Stylus", href: "https://stylus-lang.com/" }),
		Skill.define({ name: "UE4", href: "https://www.unrealengine.com/en-US/" }),
		Skill.define({ name: "Unity", href: "https://unity.com/" }),
		Skill.define({ name: "Vite", href: "https://vitejs.dev/" }),
		Skill.define({ name: "Webpack", href: "https://webpack.js.org/" }),
		Skill.define({ name: "WPF", href: "https://docs.microsoft.com/en-us/dotnet/desktop/wpf/" }),
		Skill.define({ name: "ZIO", href: "https://zio.dev/" }),
	],
	
	"other skills + tools": [
		Skill.define({ name: "Azure Cognitive Services", href: "https://azure.microsoft.com/en-us/services/cognitive-services/" }),
		Skill.define({ name: "Chrome Extension" }),
		Skill.define({ name: "CVS", href: "https://www.nongnu.org/cvs/" }),
		Skill.define({ name: "Git" }),
		Skill.define({ name: "Giter8", href: "http://www.foundweekends.org/giter8/" }),
		Skill.define({ name: "Heroku" }),
		Skill.define({ name: "Hoppscotch", href: "https://hoppscotch.io" }),
		Skill.define({ name: "IBM Watson Translator", href: "https://www.ibm.com/cloud/watson-language-translator" }),
		Skill.define({ name: "Mill", href: "https://com-lihaoyi.github.io/mill" }),
		Skill.define({ name: "NPM" }),
		Skill.define({ name: "Postman", href: "https://www.postman.com" }),
		Skill.define({ name: "Regex" }),
		Skill.define({ name: "SVN", href: "https://subversion.apache.org" }),
		Skill.define({ name: "Unix" }),
		Skill.define({ name: "WSL" }),
		Skill.define({ name: "Yarn" }),
	]
}