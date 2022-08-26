import  {attacks} from '../attacks/wieslaw';
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
        message: 'Nie pobierałem.',
        trigger: '4',
    },
    {
        id: '4',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław nie pobierał oraz nie instalował żadnego oprogramownia. Nie jest to jednak jednoznaczne z tym, że złośliwe oprogramowanie nie znalazło się na komputerze. Być może oprogramowanie pobrało się samoczynnie, bez wiedzy Pana Marka, lub też rozprzestrzeniło się w sieci z innego komputera.</span>
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
                <span style={{fontSize: '15px'}}> Być może problem nie dotyczy bezpośrednio komputera, z którego Pan Wiesław korzysta.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '7',
        message: 'Tak, mogę.',
        trigger: '8',
    },
    {
        id: '8',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław nie utracił dostępu do swojego komputera i może normlanie z niego korzystać.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '9',
        message: 'Nie używają.',
        trigger: '10',
    },
    {
        id: '10',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#12828;</span>
                <span style={{fontSize: '15px'}}> Komputer jest osobistym urządzeniem Pana Wiesława. Często komputery w domu lub firmie są współdzielone. Możemy więc wykluczyć, że ktoś z rodziny zrobił coś z komputerem bez wiedzy Pana Marka.</span>
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
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Komputer Pana Wiesława łączy się z Internetem, z którego Pan Wiesław bardzo często korzysta. W Internecie pełno jest fałszywych stron i oprogramowania chcącego wyrządzić szkodę nam, lub naszemu komputerowi. Mając dostęp do Internetu wystawiamy się na potencjalne ataki i infekcje złośliwym oprogramowaniem.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '13',
        message: 'Nie, nikt.',
        trigger: '14',
    },
    {
        id: '14',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Możemy zakładać, że nikt poza Panem Wiesławem nie ma bezpośredniego dostępu do komputera, i nie zrobił niczego bezpośrednio bez jego wiedzy, i zgody.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '15',
        message: 'Nie wiem.',
        trigger: '16',
    },
    {
        id: '16',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław nie interesuje się bezpieczeństwem swojej sieci internetowej. Bardzo wielu użytkowników nie zwraca uwagi zarówno na bezpieczeństwo swoje w sieci, jak i sieci internetowej z której korzysta. Niestety taką osobą jest również Pan Marek. Być może niezabezpieczona sieć stała się przyczyną problemu, z którym się obecnie zmaga.</span>
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
                <span style={{fontSize: '15px'}}> Pan Wiesław nie dostrzega żadnych różnic w działaniu komputera.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '19',
        message: 'Nigdy.',
        trigger: '20',
    },
    {
        id: '20',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław padł ofiarą tego typu ataku po raz pierwszy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '21',
        message: 'Nie wiem.',
        trigger: '22',
    },
    {
        id: '22',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław nie zna się na komputerach. W związku z tym, iż najpopularniejszym system na świecie jest Windows, możemy założyć, że właśnie z niego korzysta Pan Wiesław. W związku z dużą popularnością tego systemu, przez lata powstało na niego bardzo wiele wszelkiego rodzaju złośliwego oprogramowania. Korzystając bez ostrożności z Internetu, łatwo może przez przypadek przedostać się na nasz komputer.</span>
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
                <span style={{fontSize: '15px'}}> Możemy więc wykluczyć, że złośliwe oprogramowanie przedostało się na komputer, po podłączeniu jakiegoś urządzenia.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '25',
        message: 'Tak, klikałem. Dostaję dużo maili każdego dnia.',
        trigger: '26',
    },
    {
        id: '26',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> W związku z profesją Pana Marka, jest on zmuszony do pobierania wielu załączników. Mogło zdarzyć się tak, że przestępca wykorzystał ten fakt i wysłał w mailu zainfekowany załącznik, który po kliknięciu bądź pobraniu instalował samoczynnie (w tle) złośliwe oprogramowanie.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '27',
        message: 'Chyba nie, niczego podejrzanego nie zauważyłem, ale odwiedzam dużo stron.',
        trigger: '28',
    },
    {
        id: '28',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Mogło zdarzyć się tak, że po wejściu na zainfekowaną stronę złośliwe oprogramowanie samo pobrało się na komputer i wyrządziło szkody. W Internecie Istnieje bardzo wiele stron złośliwych stron wyłudzających dane, często podszywających się pod znane firmy i marki. Zawsze należy wystrzegać się odwiedzenia stron co których nie mamy pewności, że są bezpieczne.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '29',
        message: 'Nie.',
        trigger: '30',
    },
    {
        id: '30',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Mogło zdarzyć się tak, że komputer Pana Wiesława nie jest chroniony antywirusem.</span>
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
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}>  Pan Wiesław ma podstawową wiedzę o ochronie informacji i nie dzieli się swoimi wrażliwymi danymi z innymi. Musimy mieć jednak na uwadze, że wrażliwe dane mogły dostać się w ręce przestępców w inny sposób, bez wiedzy i zgody Pana Marka.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '33',
        message: 'Tak, używam.',
        trigger: '34'
    },
    {
        id: '34',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli Pan Wiesław korzysta z cudzych urządzeń, być może wtedy padł ofiarą ataku. Logując się na konto z innego komputera należy szczególnie uważać, gdyż nie mamy pewności czy ten komputer nie jest przypadkiem kontrolowany przez przestępcę i dane które podajemy, w ten sposób nie wpadną w jego ręce.</span>
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
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli doszło do kradzieży danych należy zasugerować zgłoszenie tego incydentu na policję, ponieważ nie wiadomo w jaki sposób przestępca będzie chciał wykorzystać wykradzione dane.</span>
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
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli doszło do kradzieży danych należy zasugerować zgłoszenie tego incydentu do banku, ponieważ nie wiadomo w jaki sposób przestępca będzie chciał wykorzystać wykradzione dane.</span>
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
                <span style={{fontSize: '15px'}}> Jeżeli doszło do kradzieży danych należy zasugerować zgłoszenie tego incydentu do operatora/administratora, ponieważ nie wiadomo czy dane innych użytkowników również nie zostały wykradzione.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '41',
        message: 'Używam komputera stacjonarnego.',
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
        message: 'Nie. Komputer jest własnością firmy.',
        trigger: '44',
    },
    {
        id: '44',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Komputery firmowe zazwyczaj podłączone są do wspólnej sieci. Wirusy i złośliwe oprogramowanie bardzo często są zdolne do samoczynnego rozprzestrzeniania się w sieci i infekowania wszelkich komputerów i urządzeń do niej podłączonych.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '45',
        message: 'Tak. Dostałem list z informacją o zaciągniętym kredycie na moje dane.',
        trigger: '46',
    },
    {
        id: '46',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Taki list powinien jest bardzo alarmujący. Jeżeli podejrzewamy, że ktoś wykorzystał dane bez wiedzy i zgody, powinniśmy jak najszybciej udać się do banku i na policje aby wyjaśnić sprawę oraz zasięgnąć wskazówek, by w miarę możliwości ograniczyć przykre skutki ataku.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '47',
        message: 'Raczej nie.',
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
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Warto zasugerować tego typu rozwiązanie, ponieważ bardzo poprawia bezpieczeństwo. Uwierzytelnianie wielopoziomowe to rodzaj zabezpieczenia, w którym każdą wrażliwą czynność (na przykład logowania) musimy potwierdzić za pomocą drugiego, niezależnego urządzenia takiego jak telefon. To znacząco utrudnia przestępcom kradzież i wyłudzanie kont.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '51',
        message: 'Nie.',
        trigger: '52',
    },
    {
        id: '52',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Mimo tego w przypadku podejrzenia wycieku danych, powinniśmy zasugerować jak najszybszą zmianę haseł, gdyż nie wiemy czy w najbliższej przyszłości jego konto nie zostanie przejęte.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '53',
        message: 'Wszędzie mam takie same hasło.',
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
        message: 'Nie mam.',
        trigger: '56',
    },
    {
        id: '56',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Procedury odzyskiwania haseł są bardzo pomocne w przypadku, kiedy zapomnimy hasła, lub nasze konto zostanie przejęte przez przestępcę.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '57',
        message: 'Nie mam, nie wiem co to.',
        trigger: '58',
    },
    {
        id: '58',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Klucze U2F są jednym z najbardziej skutecznych metod ochrony, ponieważ uniemożliwiają zalogowanie się na konto bez posiadania specjalnego klucza, który posiadamy w formie fizycznej.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '59',
        message: 'Czasami korzystam.',
        trigger: '60',
    },
    {
        id: '60',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Internet dostępny publicznie może być potencjalnie niebezpieczny, ponieważ nie wiemy czy nie jest kontrolowany i monitorowany przez przestępcę. Korzystając z Internetu dostępnego publicznie (niezabezpieczonego hasłem) często nie mamy pewności, czy nie jest on kontrolowany przez przestępcę, a co za tym idzie czy dane które są przesyłane przez sieć są bezpieczne i nie zostaną wykradnięte.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '61',
        message: 'Nie udostępniałem.',
        trigger: '62',
    },
    {
        id: '62',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Wiemy więc, że prawdopodobnie nikt bezpośrednio nie korzystał z komputera Pana Marka.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '63',
        message: 'Nie.',
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
        message: 'Tak, pracownicy firmy.',
        trigger: '66',
    },
    {
        id: '66',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Jeżeli to sieć firmowa, być może ktoś inny padł ofiarą ataku a złośliwy program rozprzestrzenił się w sieci na inne komputery. Może zdarzyć się sytuacja, iż złośliwa aplikacja przedostanie się na nasz komputer poprzez sieć, do której komputer jest podłączony. Wystarczy, że na jednym komputerze w sieci dojdzie do infekcji, wówczas wirus może przedostać się na resztę komputerów.</span>
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
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Znaczek zamkniętej kłódki przy adres zapewnia nam szyfrowanie ruchu pomiędzy naszą przeglądarką a serwerem. Otwarta kłódka powinna wzbudzić w nas wzmożoną ostrożność, ponieważ oznacza to, iż ruch pomiędzy przeglądarką a serwerem nie jest szyfrowany i przy odrobinie wiedzy, można bez problemu go odczytać.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '69',
        message: 'Nie doświadczyłem.',
        trigger: '70',
    },
    {
        id: '70',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Pan Wiesław padł ofiarą tego typu ataku po raz pierwszy.</span>
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
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Przestępcy często podszywają się pod znane marki i firmy, licząc na to, iż atakowany się nie zorientuje i wejdzie na kontrolowaną przez nich stronę.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '73',
        message: 'Mam.',
        trigger: '74',
    },
    {
        id: '74',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Warto sprawdzić, czy problem dotyczy również innych komputerów.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '75',
        message: 'Tak, pracuję na nim.',
        trigger: '76',
    },
    {
        id: '76',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jeżeli jest to komputer firmowy, prawdopodobnie podłączony jest do firmowej sieci. Wiemy więc, że komputery mogą się ze sobą komunikować i wysyłać informacje, a więc potencjalny wirus mógł przedostać się z jednego komputera na inny.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '77',
        message: 'Tak, czasami się loguje.',
        trigger: '78',
    },
    {
        id: '78',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
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
                <span style={{fontSize: '20px'}}>&#128577;</span>
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
            <span style={{fontSize: '15px'}}> Gratuljace, jest to poprawna odpowiedź! Pan Wiesław jest sekretarzem mało obeznanym w technologii. W związku z jego profesją, każdego dnia pobiera dużo załączników do maili oraz odwiedza mnóstwo stron internetowych. Przestępca podesłał zainfekowany załącznik Panu Wiesławowi, który ten nieopatrznie otworzył. W tym momencie złośliwe oprogramowanie zainstalowało się na komputerze, a przestępca pozyskał wrażliwe dane Pana Wiesława, na które następnie zaciągnął pożyczkę.</span>
        ),
        hideInput: true,
        end: true,
    },
];