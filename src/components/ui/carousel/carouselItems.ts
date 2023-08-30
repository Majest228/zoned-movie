import { ICarousel } from '@/src/interfaces/carousel.interface'
import elemental from '../../../assets/elemental.jpg'
import meg from '../../../assets/meg2.webp'
import heart from '../../../assets/heart.jpg'
import trans from '../../../assets/trans.jpg'
import spider from '../../../assets/spider.jpg'
export const carousel: ICarousel[] = [
	{
		id: 0,
		banner: elemental,
		title: 'Elemental',
		overview:
			'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
	},
	{
		id: 1,
		banner: meg,
		title: 'Meg 2: The Trench',
		overview:
			'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
	},
	{
		id: 2,
		banner: heart,
		overview:
			'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.',
		title: 'Heart of Stone',
	},
	{
		id: 3,
		banner: trans,
		overview:
			'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
		title: 'Transformers: Rise of the Beasts',
	},
	{
		id: 4,
		banner: spider,
		overview:
			'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
		title: 'Spider-Man: Across the Spider-Verse',
	},
]
