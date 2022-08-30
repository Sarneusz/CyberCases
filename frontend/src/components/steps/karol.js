import  {attacks} from '../attacks/karol';
import {options} from '../../utils';

export const steps = [
    {
        id: '1',
        message: 'Proszę o pomoc! Naprawdę nie wiem co mam teraz zrobić 😥',
        trigger: '2',
    },
    {
        id: '2',
        options: options,
    },
    {
        id: '3',
        message: 'Pobierałem gry.',
        trigger: '4',
    },
    {
        id: '4',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Jeżeli Karol pobierał gry z niezaufanego serwisu, to mogło zdarzyć się tak, że pobrał grę, która zawierała w sobie wirusa.</span>
            </div>

        ),
        trigger: '2',
    },
    {
        id: '5',
        message: 'Tak, mam.',
        trigger: '6'
    },
    {
        id: '6',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Być może problem nie dotyczy bezpośrednio komputera, z którego korzysta Karol.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '7',
        message: 'Mogę.',
        trigger: '8',
    },
    {
        id: '8',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Karol nie utracił dostępu do swojego komputera i może normlanie z niego korzystać.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '9',
        message: 'Tak, mój brat.',
        trigger: '10',
    },
    {
        id: '10',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#12878;</span>
                <span style={{fontSize: '15px'}}> Nie mamy pewności, czy do problemu, z którym obecnie zmaga się Karol, nie przyczynił się jego brat.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '11',
        message: 'Mam dostęp do Internetu.',
        trigger: '12',
    },
    {
        id: '12',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Komputer Karola łączy się z Internetem. W Internecie pełno jest fałszywych stron i oprogramowania chcącego wyrządzić szkodę nam, lub naszemu komputerowi. Mając dostęp do Internetu wystawiamy się na potencjalne ataki i infekcje złośliwym oprogramowaniem.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '13',
        message: 'Tylko brat.',
        trigger: '14',
    },
    {
        id: '14',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Nie możemy wykluczyć, że do problemu, z którym zmaga się Karol, nie przyczynił się jego brat.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '15',
        message: 'Tak, jest zabezpieczona.',
        trigger: '16',
    },
    {
        id: '16',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Zakładamy więc, że potencjalny wirus nie przedostał się na komputer Karola przez sieć, ponieważ Karol dba o jej zabezpieczenia.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '17',
        message: 'Chyba tak.',
        trigger: '18',
    },
    {
        id: '18',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Karol nie dostrzega na pierwszy rzut oka żadnych różnic w działaniu komputera.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '19',
        message: 'Nie.',
        trigger: '20',
    },
    {
        id: '20',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Karol padł ofiarą tego typu ataku po raz pierwszy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '21',
        message: 'Mac OS.',
        trigger: '22',
    },
    {
        id: '22',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Mac OS jest bardziej odporny na wirusy i złośliwe oprogramowanie, jednak nadal zdarzają się infekcje tego systemu.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '23',
        message: 'Nie podłączałem.',
        trigger: '24',
    },
    {
        id: '24',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Możemy więc założyć, że złośliwe oprogramowanie nie przedostało się na komputer, po podłączeniu jakiegoś urządzenia.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '25',
        message: 'Dostałem dziwnego maila z poleceniem zmiany hasła do poczty email. Przestraszyłem się i zmieniłem.',
        trigger: '26',
    },
    {
        id: '26',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Mogło zdarzyć się tak, że przestępca stworzył fałszywą stronę do zmiany hasła, którą podesłał do Karola, a następnie przejął wpisane dane.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '27',
        message: 'Zdarzało się, wszedłem na dziwnie wyglądającą stronę do zmiany hasła na poczcie email.',
        trigger: '28',
    },
    {
        id: '28',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Mogło zdarzyć się tak, że po wejściu na zainfekowaną stronę złośliwe oprogramowanie samo pobrało się na komputer i wyrządziło szkody. W Internecie Istnieje bardzo wiele stron złośliwych stron wyłudzających dane, często podszywających się pod znane firmy i marki. Zawsze należy wystrzegać się odwiedzenia stron co których nie mamy pewności, że są bezpieczne.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '29',
        message: 'Tak, używam.',
        trigger: '30',
    },
    {
        id: '30',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Komputer Karola jest chroniony antywirusem.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '31',
        message: 'Nie udostępniałem.',
        trigger: '32',
    },
    {
        id: '32',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Karol ma podstawową wiedzę o ochronie informacji i nie dzieli się swoimi wrażliwymi danymi z innymi. Musimy mieć jednak na uwadze, że wrażliwe dane mogły dostać się w ręce przestępców w inny sposób, bez wiedzy i zgody Pana Karola.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '33',
        message: 'Nie.',
        trigger: '34'
    },
    {
        id: '34',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Musimy mieć na uwadze, że wrażliwe dane mogły dostać się w ręce przestępców w niepowołany sposób, bez wiedzy i zgody Karola.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '35',
        message: 'Nie zgłosiłem.',
        trigger: '36',
    },
    {
        id: '36',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Jeżeli doszło do wyłudzenia danych, powinniśmy zasugerować Karolowi zgłoszenie tego przestępstwa na policję, ponieważ nie mamy pewności, w jaki sposób przestępca będzie chciał wykorzystać wykradnięte dane.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '37',
        message: 'Nie.',
        trigger: '38',
    },
    {
        id: '38',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> W związku z tym, iż nie wiadomo jakie dane potencjalnie wpadły w ręce przestępców, powinniśmy zgłosić zaistniały incydent do banku, gdyż istnieje ryzyko próby wykorzystania wykradniętych danych do kradzieży pieniędzy, próby zaciągnięcia kredytu itp.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '39',
        message: 'Nie zgłosiłem.',
        trigger: '40',
    },
    {
        id: '40',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> W tym przypadku problem nie dotyczy sieci, z której korzysta Karol, więc nie ma potrzeby zgłaszania tego do administratora. Możemy jednak zgłosić fałszywą stronę do operatora lub organizacji CERT Polska.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '41',
        message: 'Komputera stacjonarnego.',
        trigger: '42',
    },
    {
        id: '42',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Komputer stacjonarny nie jest urządzeniem przenośnym, więc możemy zakładać, że nie łączył się z obcą siecią potencjalnie kontrolowaną przez przestępcę.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '43',
        message: 'Współdzielę go z bratem.',
        trigger: '44',
    },
    {
        id: '44',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Nie wiemy, czy do powstania problemu, z którym zmaga się Karol, nie przyczynił się jego brat.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '45',
        message: 'Chyba nie, ale ktoś przejął mój login i hasło do poczty email.',
        trigger: '46',
    },
    {
        id: '46',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli podejrzewamy, że ktoś mógł wykorzystać nasze dane bez wiedzy i zgody, powinniśmy jak najszybciej udać się do banku i na policje, aby wyjaśnić sprawę oraz zasięgnąć wskazówek, by w miarę możliwości ograniczyć przykre skutki ataku.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '47',
        message: 'Nie.',
        trigger: '48',
    },
    {
        id: '48',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Komputer działa tak samo jak wcześniej, więc prawdopodobnie incydent nie wpłynął bezpośrednio na jego działanie.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '49',
        message: 'Nie korzystam.',
        trigger: '50',
    },
    {
        id: '50',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Uwierzytelnianie wielopoziomowe mogło uchronić Karola od problemu, z którym się zmaga. Jest to rodzaj zabezpieczenia, w którym każdą wrażliwą czynność (na przykład logowania) musimy potwierdzić za pomocą drugiego, niezależnego urządzenia takiego jak telefon. To znacząco utrudnia przestępcom kradzież i wyłudzanie kont. Warto zasugerować tego typu rozwiązanie, ponieważ bardzo poprawia bezpieczeństwo.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '51',
        message: 'Tak, po mailu z prośbą o zmianę hasła nie mogę się zalogować na swoje konto.',
        trigger: '52',
    },
    {
        id: '52',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli nie mamy skonfigurowanej procedury odzyskiwania hasła, powinniśmy skontaktować się z operatorem poczty i opisać swój problem.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '53',
        message: 'Nie.',
        trigger: '54',
    },
    {
        id: '54',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jest to bardzo zła praktyka, ponieważ w przypadku wycieku haseł z jednej platformy przestępca w łatwy sposób może przejąć również te, na których używamy tych samych lub podobnych danych logowania.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '55',
        message: 'Nie wiem.',
        trigger: '56',
    },
    {
        id: '56',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Procedury odzyskiwania haseł są bardzo pomocne w przypadku, kiedy zapomnimy hasła, lub nasze konto zostanie przejęte przez przestępcę. W tym momencie było by bardzo pomocne dla Karola.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '57',
        message: 'Nie.',
        trigger: '58',
    },
    {
        id: '58',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Klucze U2F są jednym z najbardziej skutecznych metod ochrony, ponieważ uniemożliwiają zalogowanie się na konto bez posiadania specjalnego klucza, który posiadamy w formie fizycznej. Gdyby Karol korzystał z tego rozwiązania, nie doszło by do problemu, z którym teraz się zmaga.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '59',
        message: 'Czasami korzystam na telefonie.',
        trigger: '60',
    },
    {
        id: '60',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}>  Internet dostępny publicznie może być potencjalnie niebezpieczny, ponieważ nie wiemy czy nie jest kontrolowany i monitorowany przez przestępcę. Korzystając z Internetu dostępnego publicznie (niezabezpieczonego hasłem) często nie mamy pewności, czy nie jest on kontrolowany przez przestępcę, a co za tym idzie czy dane które są przesyłane przez sieć są bezpieczne i nie zostaną wykradnięte.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '61',
        message: 'Bratu.',
        trigger: '62',
    },
    {
        id: '62',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Nie wiemy, czy do problemu, z którym zmaga się Karol, nie przyczynił się jego brat.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '63',
        message: 'Nie podłączałem.',
        trigger: '64',
    },
    {
        id: '64',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Wykluczamy zainfekowanie komputera przez podłączenie do niego jakiegoś nośnika danych lub innego urządzenia.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '65',
        message: 'Tak, rodzice i brat.',
        trigger: '66',
    },
    {
        id: '66',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Jeżeli to sieć domowa, być może ktoś inny padł ofiarą ataku a złośliwy program rozprzestrzenił się w sieci na inne komputery. Może zdarzyć się sytuacja, iż złośliwa aplikacja przedostanie się na nasz komputer poprzez sieć, do której komputer jest podłączony. Wystarczy, że na jednym komputerze w sieci dojdzie do infekcji, wówczas wirus może przedostać się na resztę komputerów.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '67',
        message: 'Nie zwracam.',
        trigger: '68',
    },
    {
        id: '68',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Znaczek zamkniętej kłódki przy adres zapewnia nam szyfrowanie ruchu pomiędzy naszą przeglądarką a serwerem. Otwarta kłódka powinna wzbudzić w nas wzmożoną ostrożność, ponieważ oznacza to, iż ruch pomiędzy przeglądarką a serwerem nie jest szyfrowany i przy odrobinie wiedzy, można bez problemu go odczytać.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '69',
        message: 'Nigdy nie doświadczyłem podobnego problemu.',
        trigger: '70',
    },
    {
        id: '70',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Karol zmaga się z tym problemem po raz pierwszy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '71',
        message: 'Nie zwracam.',
        trigger: '72',
    },
    {
        id: '72',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Przestępcy często podszywają się pod znane marki i firmy, licząc na to, iż atakowany się nie zorientuje i wejdzie na kontrolowaną przez nich stronę.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '73',
        message: 'Tak, mamy jeszcze laptopa rodziców.',
        trigger: '74',
    },
    {
        id: '74',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> W tej sytuacij warto sprawdzić, czy problem dotyczy również innych komputerów.  </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '75',
        message: 'Nie, tylko gram i przeglądam maile.',
        trigger: '76',
    },
    {
        id: '76',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Wykluczamy więc zainfekowanie komputera w pracy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '77',
        message: 'Nie loguje.',
        trigger: '78',
    },
    {
        id: '78',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Logując się z cudzych urządzeń należy szczególnie uważać, ponieważ nie mamy wtedy pewności co do bezpieczeństwa urządzenia, z którego korzystamy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '79',
        message: 'Nie wiem.',
        trigger: '80',
    },
    {
        id: '80',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Należało by sprawdzić, i przeskanować resztę komputerów w poszukiwaniu wirusów.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '81',
        message: ' ',
        trigger: '82',
    },
    {
        id: '82',
        options: attacks,
    },
    {
        id: '83',
        component: (
            <div> Niestety, nie jest to poprawna odpowiedź.</div>
        ),
        trigger: '84',
    },
    {
        id: '84',
        options: [
            { value: 1, label: 'Chcę próbować dalej', trigger: '82' },
            { value: 2, label: 'Chcę zadać więcej pytań', trigger: '2' },
        ]
    },
    {
        id: '86',
        component: (
            <span style={{fontSize: '15px', color: "green"}}> Gratuljace, jest to poprawna odpowiedź! Pan Karol jest studentem biologii. Przeglądając wiadomości na poczcie email, dostrzegł wiadomość nakazującą zmianę hasła do poczty email. Niewiele myśląc Pan Karol wszedł w link wysłany we wiadomości, a następnie nie zwracając uwagi na autentyczność serwisu wprowadził dane do zmiany hasła. W ten sposób atakujący, który kontrolował stronę pozyskał dane, i wykradł dostęp do poczty email Karola.</span>
        ),
        hideInput: true,
        end: true,
    },
];