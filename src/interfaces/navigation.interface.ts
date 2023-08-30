export interface INavigaitonMenu {
	id: number
	name: string
	link: string
	icon: string
}

export interface INavigaiton {
	title: string
	items: INavigaitonMenu[]
}
