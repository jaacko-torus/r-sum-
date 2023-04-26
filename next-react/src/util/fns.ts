import { ExperienceInfo } from "@/app/data"
import { DateTime, Interval as DateTimeInterval } from "luxon"

export const alphabeticalComparer =
	<T>(extractor: (data: T) => string) =>
		(a: T, b: T) => {
			const notCompared = /\./g

			const rawA = extractor(a).replaceAll(notCompared, "")
			const rawB = extractor(b).replaceAll(notCompared, "")

			const processedA = rawA.replaceAll(notCompared, "")
			const processedB = rawB.replaceAll(notCompared, "")

			const equal = processedA === processedB

			if (equal) {
				if (rawA < rawB) return -1
				if (rawA > rawB) return 1
				return 0
			} else {
				if (processedA < processedB) return -1
				if (processedA > processedB) return 1
				return 0
			}

		}

export const dateOrIntervalComparer = (a: DateTime | DateTimeInterval, b: DateTime | DateTimeInterval) => {
			const dateStart = (date: DateTime | DateTimeInterval) => date instanceof DateTimeInterval ? date.start : date
			return dateStart(b).valueOf() - dateStart(a).valueOf()
		}

export const experienceComparer = (a: ExperienceInfo, b: ExperienceInfo) => dateOrIntervalComparer(a.props.date, b.props.date)


