export const useGetDate = (dateStr: string) => {
	const date = new Date(dateStr)

	const monthNames = [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	]

	const monthName = monthNames[date.getMonth()]

	const date_relese = dateStr.split('-')
	const day = date_relese[2]
	const year = date_relese[0]
	return { monthName, day, year }
}
