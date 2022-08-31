import { Avatar } from '@mui/material';
import marek from '../components/avatars/mariusz.png';
import wieslaw from '../components/avatars/wieslaw.png';
import karol from '../components/avatars/karol.png';

export const modules = [
	{
		disabled: false,
		to: 'marek',
		algoProps: {
			title: 'Pan Marek',
			type: 'Ransomware',
		},
		// component: <Marek/>,
		icon: (
			<Avatar sx={{ height: 200, width: 200 }} src={marek} />
		),
		tag: 'Biznesmen',
	},
	{
		disabled: false,
		to: 'wieslaw',
		algoProps: {
			title: 'Pan Wiesław',
			type: 'Identity theft',
		},
		icon: (
			<Avatar sx={{ height: 200, width: 200 }} src={wieslaw}/>
		),
		tag: 'Sekretarz',
	},
	{
		disabled: false,
		to: 'karol',
		algoProps: {
			title: 'Pan Karol',
			type: 'Phishing',
		},
		icon: (
			<Avatar sx={{ height: 200, width: 200 }} src={karol}/>
		),
		tag: 'Student',
	},
];
