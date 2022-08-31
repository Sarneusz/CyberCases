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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

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
    const h_style = { textAlign: 'center', marginBottom: "25px", fontWeight: 'light', color: theme.palette.mode === "dark" ? "#fff" : "#444"};

    return (

        <div style={{justifyContent: "center"}}>

            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                Słowniczek
            </Typography>

            <div id={"slowniczek"} style={{margin:'auto', maxWidth: '750px'}}>

            <Accordion>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography variant="h6" textAlign='center'>Dos/DDoS </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Najprostszy typ ataku DoS/DDoS to ciągłe wysyłanie określonych typów pakietów na adres IP atakowanego serwisu – do tego wysyłane pakiety mają na celu nie tylko wysycenie pasma na łączu internetowym, do którego podłączony jest serwis internetowy. Niektóre z ataków wykorzystują niedoskonałości protokołów internetowych, przez co angażują zasoby informatyczne atakowanego serwisu (np. serwera), wyczerpanie tych zasobów blokuje dostęp do niego.
                    </Typography>
                </AccordionDetails>
            </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Kradzież tożsamości </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            O kradzieży tożsamości mówimy w sytuacji, w której ktoś bezprawnie wejdzie w posiadanie danych osobowych innej osoby i wykorzysta je wbrew jej woli. Mówiąc wprost – podszywa się pod inną osobę, zazwyczaj w celu osiągnięcia korzyści majątkowej.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Ransomware </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Oprogramowanie ransomware ogranicza dostęp do systemu komputerowego i wymaga zapłacenia okupu, aby blokada została usunięta. W szeroko rozumianym pojęciu ransomware jest kategorią złośliwego oprogramowania, zaprojektowanego aby blokować dostęp do komputera, dopóki odpowiednia suma okupu nie zostanie uiszczona na konto przestępcy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Spyware </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Spyware to rodzaj złośliwego oprogramowania, które jest wykorzystywane przez hakerów do szpiegowania, aby zyskać dostęp do Twoich poufnych informacji, danych bankowych lub aktywności online. Gromadzi informacje na temat Twoich zwyczajów, surfowania w Internecie, historii przeglądania lub poufne dane (takie jak numery kart kredytowych), często korzysta z Internetu, aby przekazać te informacje osobom trzecim bez twojej wiedzy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Adware </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Adware to typ złośliwego oprogramowania malware , które wyświetla w nachalny sposób niechciane reklamy – zwykle w formie bannerów, wyskakujących okien lub paska narzędzi w przeglądarce, zwanego toolbarem. Może także automatycznie przekierowywać na określone strony internetowe, które potencjalnie mogą być kontrolowane przez przestępców.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Malware </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Malware to złośliwe oprogramowanie, które zostało stworzone z myślą o uszkodzeniu sprzętu lub kradzieży danych. Ten termin jest jednak bardzo szeroki i obejmuje zarówno fragmenty kodu, jak i programy szkodzące systemowi. Należy pamiętać, że malware nie jest tylko jednym typem oprogramowania, ale grupą różnych programów o zróżnicowanych funkcjach, które łączy jeden cel. Jest nim atak na wewnętrzny system urządzenia. W zależności od typu złośliwe oprogramowanie może dążyć do uszkodzenia podstawowych funkcjonalności systemu, skasowania danych, otworzeniu, tzw. tylnych drzwi do kolejnych ataków, blokady komputera lub atakowania reklamami. Celem malware jest również nielegalne zarabianie pieniędzy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Phishing </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Phishing to jedna z metod, która wykorzystywana jest przez cyberprzestępców do wyłudzenia wrażliwych danych. W wyniku tego ataku możesz stracić nie tylko dostęp do konta mailowego, lecz także środki zgromadzone na rachunku bankowym. Bardzo często robią to przez to poprzez wysyłanie fałszywych e-maili, lub przekierowywanie na fałszywe strony internetowe.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Back door </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Backdoor to luka obecna w zabezpieczeniach systemu komputerowego, która pozwala ominąć jego szyfrowanie i inne mechanizmy uwierzytelniania . Na język polski termin ten można przetłumaczyć jako „tylne drzwi”, co dobrze obrazuje sposób działania tego wirusa. Backdoor umożliwia cyberprzestępcom przejęcie całkowitej kontroli nad systemem. Zwykle ataki mają charakter ściśle ukierunkowany na konkretne ofiary.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Trojan horse </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Koń trojański to typ wirusa, który udaje, że jest użyteczny lub pomocny, podczas gdy w rzeczywistości uszkadza Twój komputer i kradnie dane. Oprogramowanie bardzo często podszywa się pod aplikacje używane przez użytkownika danego urządzenia, a w tle wykonuje złośliwe akcje.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h6" align='center'>Fork bomb </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                          Fork bomba to  jeden z rodzajów złośliwego oprogramowania; program, który uruchamia bardzo szybko nieskończona liczbę kopii i zajmuje w ten sposob całą tablicę procesów systemu operacyjnego, tak, że żaden inny proces nie może już być wykonywany. Podstawowa implementacja fork bomby jest nieskończoną pętlą która uruchamia ten sam proces.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>



            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                <br/>
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


            <div style={{textAlign: "center",justifyContent: "center" }}>
            <a href="https://github.com/Sarneusz/Praca-Licencjacka." rel="noreferrer" target={"_blank"} style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ margin: "5px", textDecoration: "none" }} startIcon={<GitHub />}>
                    Repozytorium w serwisie GitHub
                </Button>
            </a>
            </div>
        </div>
    );
}

export default function AboutInfo() {
    return <>
        <AuthorsList></AuthorsList>
    </>;
}

