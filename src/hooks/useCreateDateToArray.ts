export interface IUseCreateDateToArray {
	array: Array<any>
	title: string
}

export const useCreateDateToArray = ({
	array,
	title,
}: IUseCreateDateToArray) => {
	let newArray = []
	let newItems: Array<any> = []
	array
		.slice(0, 6)
		.map(item => newItems.push({ id: item.id, name: item.name, link: item.id }))

	newArray.push({
		title: title,
		items: newItems,
	})
	return { newArray }
}
