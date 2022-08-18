import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { WidgetsRounded } from '@mui/icons-material';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HelpIcon from '@mui/icons-material/Help';
//strona glowna

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.025)' : '#fafafa',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	boxShadow: 'none',
}));

export const Main = () => {
	const theme = useTheme();

	const icon_style = { fontSize: 90, marginBottom: "10px", color: theme.palette.primary.main };
	const h_style = { textAlign: 'center', marginBottom: "25px", fontWeight: 'light', color: theme.palette.mode === "dark" ? "#fff" : "#444" };

	const funcs = [
		{
			icon: <WidgetsRounded sx={icon_style}></WidgetsRounded>,
			title: "Ćwicz kreatywne myślenie",
			desc: "Wyciągaj wnioski na podstawie szczątkowych informacji, które uzyskasz w odpowiedziach klientów. Weryfikuj swoje przypuszczenia zadająć kolejne pytania.",
		},
		{
			icon: <HelpIcon sx={icon_style}></HelpIcon>,
			title: "Zadawaj pytania",
			desc: "Aby móc pomóc swoim klientom, musisz wiedzieć z jakim problemem się zmagają. Możesz zadać im aż 40 różnych pytań, na podstawie których wydedukujesz odpowiedź. To, czy idziesz w dobrym kierunku, sygnalizowane będzie odpowiednią buźką.",
		},
		{
			icon: <SchoolIcon sx={icon_style}></SchoolIcon>,
			title: "Ucz się metodyką PBL",
			desc: "Problem-Based Learning jest efektywną metodą kształcenia, polegającą na zmaganiu się z konkretnymi sytuacjami problemowymi, przy jednoczesnym poszerzaniu i zdobywaniu nowej wiedzy."
		},
	];

	return (
		<>
			<div style={{ height: "370px", textAlign: "center", marginTop: "-35px", marginBottom: "30px", background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 40%), radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 80%)` }}>
				<Typography variant="h3" sx={h_style} component="div" style={{paddingTop: "120px"}}>
					Witaj w <strong>CyberCases</strong>!
				</Typography>
				<p style={{color: theme.palette.mode === "dark" ? "#fff" : "#444"}}>Zanurz się w cybernetycznym świecie i rozwiąż problemy swoich klientów!</p>
			</div>

			<Typography variant="h4" gutterBottom sx={h_style} component="div">
				Funkcjonalności
			</Typography>

			<Grid container item spacing={3} style={{ marginBottom: "10px" }} justifyContent="center">
				{funcs.map((it) => (
					<Grid item xs={3}>
						<Item>
							{it.icon}
							<Typography variant="h6" component="div" style={{ marginBottom: "10px" }}>
								{it.title}
							</Typography>
							<p>{it.desc}</p>
						</Item>
					</Grid>
				))}
			</Grid>
		</>
	);
};
