import { Avatar } from '@mui/material';
import marek from '../components/avatars/mariusz.png';
import wieslaw from '../components/avatars/wieslaw.png';
import karol from '../components/avatars/karol.png';

export const modules = [
	{
		to: 'bubble-sort',
		algoProps: {
			title: 'Pan Marek',
			type: 'Ransomware',
			description:
				'Metoda sortowania o złożoności czasowej i pamięciowej . Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek, w jakim się sortuje tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.',
		},
		icon: (
			<Avatar
				sx={{ height: 200, width: 200 }}
				src={marek}
			/>
		),
		tag: 'Ransomware',
	},
	{
		to: 'merge-sort',
		algoProps: {
			title: 'Pan Wiesław',
			type: 'Identity theft',
			description:
				'Każdą iterację zaczynamy od wybrania elementu (startując od pierwszego miejsca w tablicy), który będziemy przyrównywać, do elementów znajdujących się na pozycjach poprzedzających. Jeżeli element znajdujący się przed wybranym przez nas elementem jest większy, przesuwamy się o jedno miejsce wstecz.',
		},
		icon: (
			<Avatar
				sx={{ height: 200, width: 200 }}
				src={wieslaw}
			/>
		),
		tag: 'Identity theft',
	},
	{
		to: 'selection-sort',
		algoProps: {
			title: 'Pan Karol',
			type: 'Phishing',
			description:
				'Sortowanie przez wybieranie - jedna z prostszych metod sortowania o złożoności O(n^2). Polega na wyszukaniu elementu mającego się znaleźć na żądanej pozycji i zamianie miejscami z tym, który jest tam obecnie. Operacja jest wykonywana dla wszystkich indeksów sortowanej tablicy.',
		},
		icon: (
			<Avatar
				sx={{ height: 200, width: 200 }}
				src={karol}
			/>
		),
		tag: 'Phishing',
	},
	// TODO -> Dopasować propsy ponizszych modułów tak jak są wyżej zrobione bubble-sort i merge-sort
	// {
	// 	disabled: true,
	// 	to: 'bfs',
	// 	algoProps: {
	// 		title: 'Przeszukiwanie wszerz',
	// 		description: 'Polega na odwiedzeniu wszystkich osiągalnych wierzchołków z danego wierzchołka.',
	// 		type: 'bfs',
	// 	},
	// 	icon: (
	// 		<SchemaOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Algorytmy grafowe',
	// },
];
