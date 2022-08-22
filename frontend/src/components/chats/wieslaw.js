import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import userAvatar from '../avatars/user.jpg';
import botAvatar from '../avatars/bot.jpg';

//https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot

//wyglad czatu

const theme = {
    background: '#f5f8fb',
    fontFamily: 'monospace',
    headerBgColor: 'rgba(209,128,218,0.58)',
    headerFontColor: '#fff',
    headerFontSize: '35px',
    botBubbleColor: 'rgba(96,83,92,0.77)',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

//opcje do wyboru

const options = [
    { value: 1, label: 'Czy pobierał Pan jakieś oprogramowanie?', trigger: '3' },
    { value: 2, label: 'Czy ma Pan dostęp do plików na komputerze?', trigger: '5' },
    { value: 3, label: 'Czy może Pan się zalogować do komputera?', trigger: '7' },
    { value: 4, label: 'Czy komputera używają inni członkowie rodziny?', trigger: '9' },
    { value: 5, label: 'Czy ma Pan dostęp do Internetu?', trigger: '11' },
    { value: 6, label: 'Czy z komputera korzysta ktoś jeszcze?', trigger: '13' },
    { value: 7, label: 'Czy Pańska sieć jest zabezpieczona?', trigger: '15' },
    { value: 8, label: 'Czy komputer działa w taki sam sposób jak wcześniej?', trigger: '17' },
    { value: 9, label: 'Czy działo się już coś takiego w przeszłości?', tdrigger: '19' },
    { value: 10, label: 'Z jakiego systemu operacyjnego Pan korzysta?', trigger: '21' },
    { value: 11, label: 'Czy podłączał Pan jakieś urządzenia nieznanego pochodzenia?', trigger: '23' },
    { value: 12, label: 'Czy klikał Pan w jakieś załączniki w wiadomościach?', trigger: '25' },
    { value: 13, label: 'Czy odwiedzał Pan jakieś podejrzane strony?', trigger: '27' },
    { value: 14, label: 'Czy używa Pan antywirusa?', trigger: '29' },
    { value: 15, label: 'Czy udostępniał Pan komuś swoje dane wrażliwe jak np. pesel?', trigger: '31' },
    { value: 16, label: 'Czy używa Pan swoich danych uwierzytelniających na cudzych komputerach?', trigger: '33' },
    { value: 17, label: 'Czy zgłosił Pan to na Policję?', trigger: '35' },
    { value: 18, label: 'Czy zgłosił Pan to do banku?', trigger: '37' },
    { value: 19, label: 'Czy zgłosił Pan to do operatora/adminstratora sieci?', trigger: '39' },
    { value: 20, label: 'Używa Pan laptopa czy komputera stacjonarnego?', trigger: '41' },
    { value: 21, label: 'Czy komputer jest Pana własnością?', trigger: '43' },
    { value: 22, label: 'Czy ktoś niepowołany ma dostęp do Pana danych osobowych?', trigger: '45' },
    { value: 23, label: 'Czy zauważył Pan jakieś podejrzane zachowanie komputera?', trigger: '47' },
    { value: 24, label: 'Czy korzysta Pan z uwierzytelniania wielopoziomowego?', trigger: '49' },
    { value: 25, label: 'Czy utracił Pan dostęp do konta pocztowego?', trigger: '51' },
    { value: 26, label: 'Czy używa Pan różnych haseł dostępu na różne platformy?', trigger: '53' },
    { value: 27, label: 'Czy ma Pan ustawione procedury odzyskiwania hasła?', trigger: '55' },
    { value: 28, label: 'Czy posiada i używa Pan klucza U2F (Universal 2nd Factor)?', trigger: '57' },
    { value: 29, label: 'Czy korzysta Pan z Internetu dostępnego publicznie?', trigger: '59' },
    { value: 30, label: 'Czy udział Pan komuś dostępu do komputera?', trigger: '61' },
    { value: 31, label: 'Czy podłączał Pan jakieś urządzenia, np. pendrive?', trigger: '63' },
    { value: 32, label: 'Czy z sieci korzystają inni użytkownicy?', trigger: '65' },
    { value: 33, label: 'Czy zwraca Pan uwagę na znaczek zamkniętej kłódki przy adresach URL?', trigger: '67' },
    { value: 34, label: 'Czy doświadczył Pan podobnego problemu w przeszłości?', trigger: '69' },
    { value: 35, label: 'Czy zwraca Pan uwagę na adres URL podczas logowania?', trigger: '71' },
    { value: 36, label: 'Czy ma Pan w domu więcej komputerów?', trigger: '73' },
    { value: 37, label: 'Czy używa Pan komputera do pracy?', trigger: '75' },
    { value: 38, label: 'Czy loguje się Pan do serwisów/banków na cudzych komputerach?', trigger: '77' },
    { value: 39, label: 'Czy problem dotyczy więcej niż jednego komputera?', trigger: '79' },
    { value: 40, label: 'ZNAM ODPOWIEDŹ', trigger: '81' },
]

const attacks = [
    { value: 1, label: 'Dos/DDoS', trigger: '3' },
    { value: 2, label: 'Kradzież tożsamośći', trigger: '5' },
    { value: 3, label: 'Ransomware', trigger: '7' },
    { value: 4, label: 'Spyware', trigger: '9' },
    { value: 5, label: 'Adware', trigger: '11' },
    { value: 6, label: 'Malware', trigger: '13' },
    { value: 7, label: 'Spyware', trigger: '15' },
    { value: 8, label: 'Phishing', trigger: '17' },
    { value: 9, label: 'Back door', tdrigger: '19' },
    { value: 10, label: 'Trojan horse', trigger: '21' },
    { value: 11, label: 'Fork bomb', trigger: '23' },
]

const steps = [
    {
        id: '1',
        message: 'Proszę o pomoc! Naprawdę nie wiem co mam teraz zrobić :(',
        trigger: '2',
    },
    {
        id: '2',
        options: options,
    },
    {
        id: '3',
        message: 'Nie, nie pobierałem.',
        trigger: '4',
    },
    {
        id: '4',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Fakt, że Pan Marek nie pobierał żadnego oprogramowania nie jest jednoznaczne z tym, że złośliwe oprogramowanie nie znalazło się na komputerze. Być może oprogramowanie pobrało się samoczynnie, bez wiedzy Pana Marka, lub też rozprzestrzeniło się w sieci z innego komputera.</span>
            </div>

        ),
        trigger: '2',
    },
    {
        id: '5',
        message: 'Nie mogę.',
        trigger: '6'
    },
    {
        id: '6',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '7',
        message: 'Nie mogę.',
        trigger: '8',
    },
    {
        id: '8',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '9',
        message: 'Nie mogę.',
        trigger: '10',
    },
    {
        id: '10',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '11',
        message: 'Nie mogę.',
        trigger: '12',
    },
    {
        id: '12',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '13',
        message: 'Nie mogę.',
        trigger: '14',
    },
    {
        id: '14',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '15',
        message: 'Nie mogę.',
        trigger: '16',
    },
    {
        id: '16',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '17',
        message: 'Nie mogę.',
        trigger: '18',
    },
    {
        id: '18',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '19',
        message: 'Nie mogę.',
        trigger: '20',
    },
    {
        id: '20',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '21',
        message: 'Nie mogę.',
        trigger: '22',
    },
    {
        id: '22',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '23',
        message: 'Nie mogę.',
        trigger: '24',
    },
    {
        id: '24',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '25',
        message: 'Nie mogę.',
        trigger: '26',
    },
    {
        id: '26',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '27',
        message: 'Nie mogę.',
        trigger: '28',
    },
    {
        id: '28',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '29',
        message: 'Nie mogę.',
        trigger: '30',
    },
    {
        id: '30',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '31',
        message: 'Nie mogę.',
        trigger: '32',
    },
    {
        id: '32',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '33',
        message: 'Nie mogę.',
        trigger: '34'
    },
    {
        id: '34',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '35',
        message: 'Nie mogę.',
        trigger: '36',
    },
    {
        id: '36',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '37',
        message: 'Nie mogę.',
        trigger: '38',
    },
    {
        id: '38',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '39',
        message: 'Nie mogę.',
        trigger: '40',
    },
    {
        id: '40',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '41',
        message: 'Nie mogę.',
        trigger: '42',
    },
    {
        id: '42',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '43',
        message: 'Nie mogę.',
        trigger: '44',
    },
    {
        id: '44',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '45',
        message: 'Nie mogę.',
        trigger: '46',
    },
    {
        id: '46',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '47',
        message: 'Nie mogę.',
        trigger: '48',
    },
    {
        id: '48',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '49',
        message: 'Nie mogę.',
        trigger: '50',
    },
    {
        id: '50',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '51',
        message: 'Nie mogę.',
        trigger: '52',
    },
    {
        id: '52',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '53',
        message: 'Nie mogę.',
        trigger: '54',
    },
    {
        id: '54',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '55',
        message: 'Nie mogę.',
        trigger: '56',
    },
    {
        id: '56',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '57',
        message: 'Nie mogę.',
        trigger: '58',
    },
    {
        id: '58',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '59',
        message: 'Nie mogę.',
        trigger: '60',
    },
    {
        id: '60',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '61',
        message: 'Nie mogę.',
        trigger: '62',
    },
    {
        id: '62',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '63',
        message: 'Nie mogę.',
        trigger: '64',
    },
    {
        id: '64',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '65',
        message: 'Nie mogę.',
        trigger: '66',
    },
    {
        id: '66',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '67',
        message: 'Nie mogę.',
        trigger: '68',
    },
    {
        id: '68',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '69',
        message: 'Nie mogę.',
        trigger: '70',
    },
    {
        id: '70',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '71',
        message: 'Nie mogę.',
        trigger: '72',
    },
    {
        id: '72',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '73',
        message: 'Nie mogę.',
        trigger: '74',
    },
    {
        id: '74',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '75',
        message: 'Nie mogę.',
        trigger: '76',
    },
    {
        id: '76',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '77',
        message: 'Nie mogę.',
        trigger: '78',
    },
    {
        id: '78',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '79',
        message: 'Nie mogę.',
        trigger: '80',
    },
    {
        id: '80',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}>         </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '81',
        message: 'ZNAM ODPOWIEDŹ! STOP!',
        end: true,
    },
]


class Wieslaw extends Component {

    render() {
        return (

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <ThemeProvider theme={theme}>

                    <ChatBot
                        width='1500px'
                        height='800px'
                        headerTitle='Marek'
                        cache={false}
                        // hideSubmitButton={true}
                        placeholder='Twoja wiadomość..'
                        steps={steps}
                        botAvatar={userAvatar}
                        userAvatar = {botAvatar}
                    />
                </ThemeProvider>
            </div>
        );
    }
}

export default Wieslaw;