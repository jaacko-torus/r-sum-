import type { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface FAIconProps {
	icon: IconDefinition,
	size?: SizeProp
}

const FAIcon: React.FC<FAIconProps & React.HTMLAttributes<HTMLElement>> = ({ icon, size, className }) => {
	return <FontAwesomeIcon icon={icon} className={`pr-1 ${className}`} size={size ?? "xs"} fixedWidth />
}

export default FAIcon

export type {
	FAIconProps
}
