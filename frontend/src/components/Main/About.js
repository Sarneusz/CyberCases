import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { GitHub } from '@mui/icons-material';
import { Button } from '@mui/material';

//zakladka informacje

function AuthorsList() {
    const auth = [
        {
            avatar: "https://lh3.googleusercontent.com/a-/AFdZucovwDlBFRqytqetmxz4tn6ge0xg6N111cQDkqgQJA=s288-p-rw-no",
            name: "Mateusz Gruszkiewicz",
            role: "\nComputer Science Student at Maria Curie-Sklodowska University, Lublin.",
            stop: true,
        },
    ];

    const theme = useTheme();
    const h_style = { textAlign: 'center', marginBottom: "25px", fontWeight: 'light', color: theme.palette.mode === "dark" ? "#fff" : "#444" };

    return (
        <div style={{ textAlign: 'center', justifyContent: "center" }}>

            {/*Dos/DDoS -Ataki typu DoS (z ang. Denial of Service) oraz DDoS (z ang. Distributed Denial of Service) to jedna z najpopularniejszych broni w rękach cyberprzestępców. Główna różnica między atakami DoS i DDoS polega na tym, że ten pierwszy jest atakiem, do którego wykorzystywany jest jeden komputer, podczas gdy drugi obejmuje wiele komputerów atakujących jeden system. Komputery oraz systemy biorące udział w ataku wysyłają do atakowanego zapytania, na które atakowany stara się odpowiadać. Bardzo duża ilość zapytań doprowadza do wykorzystania wszystkich dostępnych zasobów atakowanej sieci, a w efekcie do przerwy w działaniu lub nawet zawieszenia atakowanego systemu.*/}

            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                O autorze
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px", marginLeft: "auto", marginRight: "auto", marginTop: "25px", marginBottom: "45px" }}>
                {auth.map((os) => (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={os.name} src={os.avatar}  sx={{ width: 46, height: 46 }}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">{os.name}</Typography>
                                }
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {os.role}
                                    </Typography>
                                }
                            />
                        </ListItem>

                        {!os.stop ? <Divider variant="inset" component="li"></Divider> : <></>}
                    </>
                ))}
            </List>

            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                Źródło
            </Typography>

            <a href="https://github.com/Sarneusz/Praca-Licencjacka." rel="noreferrer" target={"_blank"} style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ margin: "5px", textDecoration: "none" }} startIcon={<GitHub />}>
                    Repozytorium w serwisie GitHub
                </Button>
            </a>
        </div>
    );
}

export default function AboutInfo() {
    return <>
        <AuthorsList></AuthorsList>
    </>;
}

