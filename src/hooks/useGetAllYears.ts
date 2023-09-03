export const useGetAllYears = () => {
	const years = []

	for (let year = 2023; year >= 1990; year--) {
		years.push({ id: years.length, name: year })
	}

	return { years }
}
