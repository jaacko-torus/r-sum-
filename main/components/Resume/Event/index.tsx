import { faCalendar, faMapMarked } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from "uuid"

import { EventInfo } from "../index.data"
import { FAIcon } from "../InfoField"
import { H4, H6, P } from "../../Typography"

const Event = ({ title, subtitle, date, location, description, items }: EventInfo) => {
	return (
		<>
			<H4>{title}</H4>
			{subtitle && <H6>{subtitle}</H6>}
			
			<div css={{ columnCount: 2 }}>
				<P><FAIcon icon={faCalendar} />{date}</P>
				<P><FAIcon icon={faMapMarked} />{location}</P>
			</div>
			
			{description && <P>{description}</P>}
			
			{items && <ul>
				{items.map((item) => <li key={uuidv4()} css={{ paddingTop: 0, paddingBottom: 0 }}>{item}</li>)}
			</ul>}
		</>
	)
}

export default Event
