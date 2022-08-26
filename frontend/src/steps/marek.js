import  {attacks} from '../attacks/marek';
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
        message: 'Nie, nie pobierałem.',
        trigger: '4',
    },
    {
        id: '4',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Fakt, że Pan Marek nie pobierał żadnego oprogramowania nie jest jednoznaczne z tym, że złośliwe oprogramowanie nie znalazło się na komputerze. Być może oprogramowanie pobrało się samoczynnie, bez wiedzy Pana Marka, lub też rozprzestrzeniło się w sieci z innego komputera.</span>
            </div>

        ),
        trigger: '2',
    },
    {
        id: '5',
        message: 'Nie, nie mam.',
        trigger: '6'
    },
    {
        id: '6',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jest to bardzo istotne. W tym momencie należy zadać sobie pytanie w jaki sposób doszło do utraty dostępu do plików na komputerze.</span>
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
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Można więc zakładać, że Pan Marek utracił całkowicie dostęp do swojego komputera i nie jest w stanie z niego korzystać.</span>
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
                <span style={{fontSize: '20px'}}>&#12858;</span>
                <span style={{fontSize: '15px'}}> Często komputery w domu lub firmie są współdzielone. Możemy więc wykluczyć, że ktoś z rodziny zrobił coś z komputerem bez wiedzy Pana Marka.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '11',
        message: 'Tak, mam dostęp do Internetu.',
        trigger: '12',
    },
    {
        id: '12',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Komputer Pana Marka łączy się z Internetem. W Internecie pełno jest fałszywych stron i oprogramowania chcącego wyrządzić szkodę nam, lub naszemu komputerowi. Mając dostęp do Internetu wystawiamy się na potencjalne ataki i infekcje złośliwym oprogramowaniem.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '13',
        message: 'Nie, tylko ja.',
        trigger: '14',
    },
    {
        id: '14',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Możemy zakładać, że nikt poza Panem Markiem nie ma bezpośredniego dostępu do komputera, i nie zrobił niczego bezpośrednio bez jego wiedzy, i zgody.</span>
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
                <span style={{fontSize: '15px'}}> Bardzo wielu użytkowników nie zwraca uwagi zarówno na bezpieczeństwo swoje w sieci, jak i sieci internetowej z której korzysta. Niestety taką osobą jest również Pan Marek. Być może niezabezpieczona sieć stała się przyczyną problemu, z którym się obecnie zmaga.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '17',
        message: 'Nie, przestał całkowicie działać. Nie mogę nic na nim zrobić.',
        trigger: '18',
    },
    {
        id: '18',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}>Pan Marek prawdopodobnie utracił dostęp do plików na komputerze i nie jest w stanie się na nim zalogować. Trzeba więc zadać sobie pytanie, w jaki sposób do tego doszło, aby móc mu pomóc.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '19',
        message: 'Nigdy w przeszłości nie działo się coś takiego.',
        trigger: '20',
    },
    {
        id: '20',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Nigdy w przeszłości nie działo się coś takiego.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '21',
        message: 'Windows.',
        trigger: '22',
    },
    {
        id: '22',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> W związku z dużą popularnością tego systemu, przez lata powstało na niego bardzo wiele wszelkiego rodzaju złośliwego oprogramowania. Korzystając bez ostrożności z Internetu, łatwo może przez przypadek przedostać się na nasz komputer.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '23',
        message: 'Podłączyłem pendrive.',
        trigger: '24',
    },
    {
        id: '24',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Komputer może zostać zainfekowany poprzez włożenie do niego czytnika danych lub płyty CD, które na przykład zostały nam przekazane przez przestępcę. Już samo podłączenie może skutkować zainfekowaniem komputera.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '25',
        message: 'Nie klikałem.',
        trigger: '26',
    },
    {
        id: '26',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Przestępcy często wysyłają złośliwe emaile, w których po kliknięciu bądź pobraniu załącznika złośliwe oprogramowanie samoczynnie (w tle) instaluje się na naszym komputerze. Możemy więc zakładać, że żadne złośliwe oprogramowanie w ten sposób nie dostało się na komputer Pana Marka. </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '27',
        message: 'Nie odwiedzałem.',
        trigger: '28',
    },
    {
        id: '28',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> W Internecie Istnieje bardzo wiele stron złośliwych stron wyłudzających dane, często podszywających się pod znane firmy i marki. Zawsze należy wystrzegać się odwiedzenia stron co których nie mamy pewności, że są bezpieczne. </span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '29',
        message: 'Chyba tak.',
        trigger: '30',
    },
    {
        id: '30',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Marek jest osobą słabo zorientowaną w bezpieczeństwie. Nie mamy więc pewności, czy jego system jest chroniony.</span>
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
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Musimy mieć na uwadze, że wrażliwe dane mogły dostać się w ręce przestępców w niepowołany sposób, bez wiedzy i zgody Pana Marka.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '33',
        message: 'Zdarza się.',
        trigger: '34'
    },
    {
        id: '34',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Logując się na konto z innego komputera należy szczególnie uważać, gdyż nie mamy pewności czy ten komputer nie jest przypadkiem kontrolowany przez przestępcę, i dane które podajemy, w ten sposób nie wpadną w jego ręce.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '35',
        message: 'Nie, nie zgłosiłem.',
        trigger: '36',
    },
    {
        id: '36',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Jeżeli doszło zaszyfrowania i naruszenia integralności danych, powinniśmy zasugerować Panu Markowi bezzwłoczne zgłoszenie tego przestępstwa na policję, ponieważ nie mamy pewności czy, i jakie dane mogły ulec wyciekowi.</span>
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
                <span style={{fontSize: '15px'}}> W związku z tym, iż nie wiadomo jakie dane potencjalnie wpadły w ręce przestępców, powinniśmy jak najszybciej zgłosić zaistniały incydent do banku, gdyż istnieje ryzyko próby wykorzystania tych danych do kradzieży pieniędzy, próby zaciągnięcia kredytu.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '39',
        message: 'Nie, nie zgłosiłem.',
        trigger: '40',
    },
    {
        id: '40',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Każdy tego typu incydent powinien zostać niezwłocznie zgłoszony, gdyż stanowi bezpośrednie zagrożenie dla funkcjonowania całej sieci i urządzeń do niej podłączonych.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '41',
        message: 'Używam laptopa.',
        trigger: '42',
    },
    {
        id: '42',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Laptop to urządzenie przenośne, więc ktoś mógł wyrządzić jakieś szkody w momencie, kiedy nasz klient był podłączony do sieci poza domem lub firmą, na przykład w kafejce internetowej. Taka sieć mogła być kontrolowana przez przestępce.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '43',
        message: 'Laptop jest własnością firmy.',
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
        message: 'Nie wiem.',
        trigger: '46',
    },
    {
        id: '46',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Jeżeli zakładamy, że nasze dane wpadły w niepowołane ręce, powinniśmy niezwłocznie zgłosić ten fakt na policję a następnie postąpić według uzyskanych tam wskazówek, aby w miarę możliwości ograniczyć przykre skutki ataku.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '47',
        message: 'Przy włączaniu komputera wyskakuje żądanie zapłaty. ',
        trigger: '48',
    },
    {
        id: '48',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jest to bardzo często spotykany mechanizm wyłudzania pieniędzy w zamian za odszyfrowanie danych. Jednak powinniśmy starać się nie ulegać szantażowi, ponieważ to tylko pogłębia problem i zachęca przestępców do dalszych ataków.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '49',
        message: 'Tak, korzystam.',
        trigger: '50',
    },
    {
        id: '50',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Uwierzytelnianie wielopoziomowe to rodzaj zabezpieczenia, w którym każdą wrażliwą czynność (na przykład logowania) musimy potwierdzić za pomocą drugiego, niezależnego urządzenia takiego jak telefon. To znacząco utrudnia przestępcom kradzież i wyłudzanie kont.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '51',
        message: 'Nie utraciłem.',
        trigger: '52',
    },
    {
        id: '52',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Mimo tego, iż Pan Marek nie utracił dostępu do konta pocztowego, powinniśmy zasugerować mu jak najszybszą zmianę hasła, gdyż nie wiemy czy w najbliższej przyszłości jego konto nie zostanie przejęte.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '53',
        message: 'Tak, używam różnych haseł dostępu na różne platformy.',
        trigger: '54',
    },
    {
        id: '54',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Zawsze należy mieć na uwadze, żeby nasze hasła były unikatowe na każdej platformie, gdyż wówczas wyciek haseł z jednej platformy, znacząco utrudnia kradzież kont na innych platformach.</span>
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
        message: 'Nie posiadam, pierwszy raz o czymś takim słyszę.',
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
        message: 'Zdarza się.',
        trigger: '60',
    },
    {
        id: '60',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Korzystając z Internetu dostępnego publicznie (niezabezpieczonego hasłem) nigdy nie mamy pewności, czy nie jest on kontrolowany przez przestępcę, a co za tym idzie czy dane które są przesyłane przez sieć są bezpieczne i nie zostaną wykradnięte.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '61',
        message: 'Nie udzielałem.',
        trigger: '62',
    },
    {
        id: '62',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Wiemy więc, że prawdopodobnie nikt bezpośrednio nie korzystał z komputera Pana Marka.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '63',
        message: 'Tak, podłączyłem pendrive, który znalazłem w skrzynce na listy.',
        trigger: '64',
    },
    {
        id: '64',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Jest to bardzo alarmujące. Zdarza się, iż przestępcy podrzucają nośniki danych, które po podłączeniu do komputera samoczynnie instalują złośliwe oprogramowanie i wyrządzają duże szkody, takie jak zaszyfrowanie danych i blokada dostępu do komputera.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '65',
        message: 'Tak, korzystają moi współpracownicy.',
        trigger: '66',
    },
    {
        id: '66',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Może zdarzyć się sytuacja, iż złośliwa aplikacja przedostanie się na nasz komputer poprzez sieć, do której komputer jest podłączony. Wystarczy, że na jednym komputerze w sieci dojdzie do infekcji, wówczas wirus może przedostać się na resztę komputerów.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '67',
        message: 'Zwracam.',
        trigger: '68',
    },
    {
        id: '68',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Otwarta kłódka powinna wzbudzić w nas wzmożoną ostrożność, ponieważ oznacza to, iż ruch pomiędzy przeglądarką a serwerem nie jest szyfrowany i przy odrobinie wiedzy, można bez problemu go odczytać.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '69',
        message: 'Nie, nigdy.',
        trigger: '70',
    },
    {
        id: '70',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Pan Marek padł ofiarą tego typu ataku po raz pierwszy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '71',
        message: 'Tak, zwracam.',
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
        message: 'Mam więcej komputerów.',
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
        message: 'Tak, używam.',
        trigger: '76',
    },
    {
        id: '76',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128528;</span>
                <span style={{fontSize: '15px'}}> Jeżeli jest to komputer firmowy, prawdopodobnie podłączony jest do firmowej sieci. Wiemy więc, że komputery mogą się ze sobą komunikować i wysyłać informacje, a więc potencjalny wirus mógł przedostać się z jednego komputera na inny.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '77',
        message: 'Zdarza się.',
        trigger: '78',
    },
    {
        id: '78',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128577;</span>
                <span style={{fontSize: '15px'}}> Logując się z cudzych urządzeń, należy szczególnie uważać, ponieważ nie mamy wtedy pewności co do bezpieczeństwa urządzenia, z którego korzystamy.</span>
            </div>
        ),
        trigger: '2',
    },
    {
        id: '79',
        message: 'Tak, problem dotyczy wszystkich komputerów w firmie.',
        trigger: '80',
    },
    {
        id: '80',
        component: (
            <div>
                <span style={{fontSize: '20px'}}>&#128578;</span>
                <span style={{fontSize: '15px'}}> Możemy więc zakładać, iż złośliwe oprogramowanie rozprzestrzeniło się samoczynnie w sieci.</span>
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
            <span style={{fontSize: '15px'}}> Gratuljace, jest to poprawna odpowiedź! Pan Marek jest kluczowym pracownikiem dużej firmy farmakologicznej. Przestępca chcąc wykraść wrażliwe dane z firmy, w której Pracuje Pan Marek, postanowił podrzucić mu złośliwie zaprogramowany pendrive. Pan Marek bez większego zastanowienia podłączył go do swojego komputera, co skutkowało zaszyfrowaniem i wykradnięciem cennych danych. Dodatkowo oprogramowanie rozprzestrzeniło się w sieci firmy na inne komputery. </span>
        ),
        hideInput: true,
        end: true,
    }
]