import fleurs from '../assets/fleurs.jpg'
import lierre from '../assets/lierre.jpg'
import monstrera from '../assets/monstera.jpg'
import ficus from '../assets/ficus.jpg'
import pothos from '../assets/pothos.jpg'
import yucca from '../assets/yucca.jpg'
// import geranium from '../assets/geranium.jpg'
import basilique from '../assets/basilique.jpg'
/*import bakker from '../assets/Bakker.jpg'
import calathea from '../assets/calathea.jpg'*/
import thymCitron from '../assets/thymCitron.jpg'
/*import graminee from '../assets/graminee.jpg'
import lavande from '../assets/lavande.jpg'*/
import strelitzia from '../assets/strelitzia.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classic',
		id: '12a',
		water :'2',
		light: '3',
		cover: monstrera,
		price : 20
	},
	{
		name: 'ficus lyrata',
		category: 'classic',
		id: '2b',
		water :'1',
		light: '2',
		cover: ficus,
		price : 15


	},
	{
		name: 'silver pothos ',
		category: 'classic',
		id: '3d',
		water :'3',
		light: '2',
		cover: pothos,
		price : 19


	},
	{
		name: 'yucca',
		category: 'greasy plant ',
		id: '4c',
		water :'3',
		light: '3',
        cover : yucca,
		price : 13

	},
	{
		name: 'flowers ',
		category: 'greasy plant ',
		id: '4d',
		water :'2',
		light: '1',
        cover : fleurs,
		price : 5

	},
	/*{
		name: 'graminee',
		category: 'greasy plant',
		id: '4e',
		water :'2',
		light: '2',
		cover : graminee,
		price : 31
	},*/
	/*{
		name: 'lavande',
		category: 'greasy plant',
		id: '4f',
		water :'3',
		light: '2',
		cover : lavande,
		price : 25
	},*/
	{
		name: 'ivy',
		category: 'outside ',
		id: '5d',
		water :'2',
		light: '3',
		cover :lierre,
		price : 10

	},
	/*{
		name: 'geranium',
		category: 'outside ',
		id: '5f',
		water :'2',
		light: '2',
		cover : geranium,
		price : 25

	},*/
	{
		name: 'basilic',
		category: 'outside ',
		id: '5g',
		water :'2',
		light: '3',
        cover : basilique,
		price : 18

	},
	/*{
		name: 'calathea',
		category: 'outside',
		id: '5h',
		water :'2',
		light: '1',
		cover : calathea,
		price : 32
	},
	
	{
	name: 'bakker',
	category: 'inside ',
	id: '6i',
	water :'2',
	light: '3',
	cover : bakker,
	price : 20
	},
	*/
	{
		name: 'thym-Citron',
		category: 'inside',
		id: '6k',
		water :'3',
		light: '2',
		cover : thymCitron,
		price : 20
	},
	

	{
		name: 'strelitzia',
		category: 'inside',
		id: '6l',
		water :'2',
		light: '2',
		cover : strelitzia,
		price : 35
	}
	
	
]