import { TRAPEZOWA_SELECTED } from '../actions/actions';

export default function(state = null, action) {
    console.log('dddddddddddddddddddd', state, action);
    switch(action.type) {
        case TRAPEZOWA_SELECTED:
            return [];
    }
    return blachodachowka;
}

const trapezowa = [
        {
            name:           'Diament Plus', 
            producer:       'Blachotrapez', 
            descroption:    'Tradycyjny wzór blachodachówki Diament Plus sprawia, że pokryte nią dachy prezentują się wyjątkowo szlachetnie. Model ten został zaprojektowany tak, aby idealnie przylegać i minimalizować                    ilość odpadu blachy. Montaż tej blachodachówki, dzięki jej dużej plastyczności, jest łatwy i bezproblemowy. Wysokość przetłoczenia w tym modelu wynosi 20mm, a wydajność krycia - 1045mm                      rzeczywistej szerokości krycia na 1150mm.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/8/diament-plus',
            params: [
                {name: 'Szerokość całkowita', value: '1 150 mm'},
                {name: 'Szerokość krycia rzeczywistego', value: '1 045 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '20 mm'},
                {name: 'Wysokość profilu', value: '34 mm'},
                {name: 'Długość modułu dachówki', value: '850 mm'},
                {name: 'Minimalna długość arkusza', value: '850 mm'},
                {name: 'Maksymalna długość arkusza', value: '5 750 mm'}                
            ],
            image: "blachotrapez/diament-plus.png",
            exaples: ["blachotrapez/diament-plus-example.jpg"]
        }
]

const blachodachowka = [
        {
            name:           'Diament Plus', 
            producer:       'Blachotrapez', 
            descroption:    'Tradycyjny wzór blachodachówki Diament Plus sprawia, że pokryte nią dachy prezentują się wyjątkowo szlachetnie. Model ten został zaprojektowany tak, aby idealnie przylegać i minimalizować                    ilość odpadu blachy. Montaż tej blachodachówki, dzięki jej dużej plastyczności, jest łatwy i bezproblemowy. Wysokość przetłoczenia w tym modelu wynosi 20mm, a wydajność krycia - 1045mm                      rzeczywistej szerokości krycia na 1150mm.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/8/diament-plus',
            params: [
                {name: 'Szerokość całkowita', value: '1 150 mm'},
                {name: 'Szerokość krycia rzeczywistego', value: '1 045 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '20 mm'},
                {name: 'Wysokość profilu', value: '34 mm'},
                {name: 'Długość modułu dachówki', value: '850 mm'},
                {name: 'Minimalna długość arkusza', value: '850 mm'},
                {name: 'Maksymalna długość arkusza', value: '5 750 mm'}                
            ],
            image: "blachotrapez/diament-plus.png",
            exaples: ["blachotrapez/diament-plus-example.jpg"]
        },
        {
            name:           'Diament Eco Plus', 
            producer:       'Blachotrapez', 
            descroption:    'Blachodachówka Diament Eco Plus wyróżnia się wyjątkową formą. Wysokość przetłoczenia wynosi 14mm. Podobnie jak wszystkie blachodachówki produkowane przez Blachotrapez, Diament Eco Plus                      charakteryzuje się dużą szerokością krycia rzeczywistego, które wynosi 1120mm na 1200mm blachodachówki.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/16/diament-eco-plus',
            params: [
                {name: 'Szerokość całkowita', value: '1 200 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 120 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '14 mm'},
                {name: 'Wysokość profilu', value: '22 mm'},
                {name: 'Długość modułu', value: '350/400 mm'},
                {name: 'Min. długość arkusza', value: '850/950 mm'},
                {name: 'Max. długość arkusza', value: '5 750 mm'}
            ],
            image: "blachotrapez/diament-eco-plus.png",
            exaples: ["blachotrapez/diament-eco-plus-example1.jpg", "blachotrapez/diament-eco-plus-example2.jpg"]
        },
        {
            name:           'Tysenia', 
            producer:       'Blachotrapez', 
            descroption:    'Jednomodułowa blachodachówka TYSENIA to nowoczesne rozwiązanie dachowe dla inwestorów poszukujących wyjątkowego efektu wizualnego połaci. Minimalistyczny, surowy wygląd blachodachówki harmonizuje z aktualnymi trendami architektonicznymi, a płaski kształt gwarantuje uniwersalne zastosowanie. Prostolinijną formę TYSENII zdobi finezyjne potrójne przetłoczenie, a jej cechą charakterystyczną jest niski – 2,5 milimetrowy profil. TYSENIA może być montowana zarówno jako pokrycie dachowe, jak i oryginalne wykończenie elewacji. Ponadto płaska blachodachówka jest lekka, dzięki czemu sprawdzi się idealnie nie tylko w nowoczesnym budownictwie, ale również w przypadku renowacji dachów starych budynków. Produkt dostępny jest w trzech powłokach, zarówno w wersji matowej, jak i z połyskiem: Pladur® Wrinkle MAT thyssenkrupp, Pladur® Relief iceCrystal thyssenkrupp, Colorcoat HPS200® Ultra Tata Steel oraz w bogatej gamie kolorystycznej.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/960/tysenia',
            params: [
                {name: 'Szerokość całkowita', value: '1 236 mm'},
                {name: 'Szerokość krycia', value: '1 198 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość profilu (głębokość usztywnień)', value: '2,5 mm'},
                {name: 'Długość modułu', value: '350 mm'},
                {name: 'Wysokość uskoku dachówki', value: '850 mm'}
            ],
            image: "blachotrapez/tysenia.png",
            exaples: ["blachotrapez/tysenia-example1.jpg", "blachotrapez/tysenia-example2.jpg", "blachotrapez/tysenia-example3.jpg", "blachotrapez/tysenia-example4.jpg"]
        },
        {
            name:           'Talia', 
            producer:       'Blachotrapez', 
            descroption:    'Pragniemy Państwu zaprezentować nowy model blachodachówki w naszym firmowym portfolio. Produkt swoją nazwę „Talia” zawdzięcza wyjątkowo pięknej formie, która przywodzi na myśl sylwetkę kobiety. Blachodachówka Talia to piękny kształt i oryginalne przetłoczenie, które stwarzają duże możliwości plastyczne w kształtowaniu połaci dachowej. To cechy, które wyróżniają ją na tle innych blachodachówek na rynku.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/757/talia',
            params: [
                {name: 'Szerokość całkowita', value: '1 210 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 150 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '30 mm'},
                {name: 'Wysokość profilu', value: '19 mm'},
                {name: 'Długość modułu', value: '350 mm'},
                {name: 'Min. długość arkusza', value: '720 mm'},
                {name: 'Max. długość arkusza', value: '5 970 mm'}
            ],
            image: "blachotrapez/talia.png",
            exaples: ["blachotrapez/talia-example2.jpg", "blachotrapez/talia-example3.jpg"]
        },
        {
            name:           'Germania Simetric', 
            producer:       'Blachotrapez', 
            descroption:    'Unikalne, potrójne przetłoczenia blachodachówki Germania Simetric gwarantują większe usztywnienie blachy, zapewniając jednocześnie podatność na obróbkę plastyczną. Wyprofilowane naroża   umożliwiają natomiast idealne dopasowanie do siebie arkuszy, czyniąc produkt prostym i wygodnym w obsłudze. Ten model blachodachówki modułowej charakteryzuje duża praktyczność, ale także walory estetyczne, gdyż oryginalny wzór i połysk blachodachówki Germania Simetric sprawia, że produkt ten jest bardzo podobny do dachówki ceramicznej.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/6/germania-simetric-nowosc',
            params: [
                {name: 'Szerokość całkowita', value: '1 215 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 120 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '25/30 mm'},
                {name: 'Wysokość profilu', value: '20 mm'},
                {name: 'Długość modułu', value: '350 mm'},
                {name: 'Min. długość arkusza', value: '720 mm'},
                {name: 'Max. długość arkusza', value: '5 970 mm'}
            ],
            image: "blachotrapez/germania.png",
            exaples: ["blachotrapez/germania-example1.jpg", "blachotrapez/germania-example2.jpg"]
        },
        {
            name:           'Kingas', 
            producer:       'Blachotrapez', 
            descroption:    'Model Kingas wyróżnia się efektownym wzorem przypominającym delikatne fale. Wysokość przetłoczenia uskoku dachówki wynosi 20mm. Szerokość krycia rzeczywistego blachodachówki Kingas to                        1100mm na 1195mm szerokości produktu.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/9/kingas',
            params: [
                {name: 'Szerokość całkowita', value: '1 195 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 100 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '20 mm'},
                {name: 'Wysokość profilu', value: '23 mm'},
                {name: 'Długość modułu', value: '350/400 mm'},
                {name: 'Min. długość arkusza', value: '850/950 mm'},
                {name: 'Max. długość arkusza', value: '5 750 mm'}
            ],
            image: "blachotrapez/kingas.png",
            exaples: ["blachotrapez/kingas-example1.jpg", "blachotrapez/kingas-example2.jpg"]
        },
        {
            name:           'Kingas 15', 
            producer:       'Blachotrapez', 
            descroption:    'Kingas 15 to blachodachówka o klasycznym wzorze delikatnej fali. Niewysokie przetłoczenia uskoku blachodachówki sprawiają, że jest bardzo plastycznym materiałem, a jej montaż nawet na najbardziej skomplikowanych konstrukcjach dachowych nie sprawia problemów. Szerokość krycia rzeczywistego to 1100mm pokrycia dachu na 1195mm blachodachówki, dzięki czemu model ten jest nie tylko praktyczny i efektowny, ale i ekonomiczny.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/11/kingas-15',
            params: [
                {name: 'Szerokość całkowita', value: '1 195 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 100 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '14 mm'},
                {name: 'Wysokość profilu', value: '23 mm'},
                {name: 'Długość modułu', value: '350/400 mm'},
                {name: 'Min. długość arkusza', value: '850/950 mm'},
                {name: 'Max. długość arkusza', value: '5 750 mm'}
            ],
            image: "blachotrapez/kingas-15.png",
            exaples: ["blachotrapez/kingas-example1.jpg", "blachotrapez/kingas-example2.jpg"]
        },
        {
            name:           'Kingas Eco Plus', 
            producer:       'Blachotrapez', 
            descroption:    'Model blachodachówki Kingas Eco Plus to blachodachówka o mniejszym przetłoczeniu uskoku (14mm), dzięki czemu wyróżnia się wysokimi parametrami szerokości krycia rzeczywistego - 1195mm daje 1120mm krycia rzeczywistego dachu. Blachodachówka Kingas dzięki formie delikatnej fali doskonale prezentuje się na dachu.',
            comments:       'Źródło: https://www.blachotrapez.eu/pl/prtm/10/kingas-eco-plus',
            params: [
                {name: 'Szerokość całkowita', value: '1 195 mm'},
                {name: 'Szerokość krycia efektywnego', value: '1 100 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia uskoku dachówki', value: '14 mm'},
                {name: 'Wysokość profilu', value: '23 mm'},
                {name: 'Długość modułu', value: '350/400 mm'},
                {name: 'Min. długość arkusza', value: '850/950 mm'},
                {name: 'Max. długość arkusza', value: '5 750 mm'}
            ],
            image: "blachotrapez/kingas-eco-plus.png",
            exaples: ["blachotrapez/kingas-example1.jpg", "blachotrapez/kingas-example2.jpg"]
        },
        {
            name:           'Venecja', 
            producer:       'Bud-Mat', 
            descroption:    '5 dolnych fal i 6 wierzchołków sprawiają, że Venecja podkreśla urodę klasycznych budynków. Montaż ze spinką - stosowany tylko w dachu modułowym Venecja - to gwarancja najbardziej estetycznego pokrycia dachowego. Dzięki spince wkręty mocujące są niewidoczne. Venecja to trwałość i bezpieczeństwo na długie lata. W zależności od użytej powłoki gwarancja na ten produkt wynosi 20, 30 lub 50 lat. ',
            comments:       'Źródło: http://www.budmat.com/pl/produkt/venecja-pierwsza-w-rodzinie-133',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 190 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 150 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '35 mm'},
                {name: 'Wysokość fali', value: '26 mm'},
                {name: 'Wysokość całkowita', value: '61 mm'},
                {name: 'Długość całkowita arkusza', value: '736 mm'},
                {name: 'Długość efektywna arkusza', value: '700 mm'},
                {name: 'Długość modułu', value: '350 mm'}
            ],
            image: "budmat/venecja.jpg",
            exaples: ["budmat/venecja-example.jpg", "budmat/venecja-example2.jpg"]
        },
        {
            name:           'Murano', 
            producer:       'Bud-Mat', 
            descroption:    'Designerski kształt dla śmiałych budynków. 5 płaskich powierzchni i 6 wypukłych fal sprawiają, że Murano to synonim nowoczesności. Murano to trwałość i bezpieczeństwo na długie lata. W zależności od użytej powłoki gwarancja na ten produkt wynosi 20, 30 lub 50 lat. Fabryczne otwory montażowe skracają czas pracy na dachu. Pozwalają także na precyzyjne łączenie arkuszy i korektę całej połaci już po ich połączeniu. To nie wszystko. Ekipa dekarska może pracować na kilku połaciach jednocześnie. Nasze rozwiązania są tak dobre, że je opatentowaliśmy. ',
            comments:       'Źródło: http://www.budmat.com/pl/produkt/murano-klasycznie-czy-murano-73',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 196 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 140 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '35 mm'},
                {name: 'Wysokość fali', value: '11 mm'},
                {name: 'Wysokość całkowita', value: '46 mm'},
                {name: 'Długość całkowita arkusza', value: '725 mm'},
                {name: 'Długość efektywna arkusza', value: '700 mm'},
                {name: 'Długość modułu', value: '350 mm'}
            ],
            image: "budmat/murano.jpg",
            exaples: ["budmat/murano-example.jpg"]
        },
        {
            name:           'Rialto', 
            producer:       'Bud-Mat', 
            descroption:    'Rialto stworzy dach, który doda klasy każdemu budynkowi. Wyróżnia go 5 fal dolnych i 5 fal górnych. Elegancja to Rialto. Rialto to trwałość i bezpieczeństwo na długie lata. W zależności od użytej powłoki gwarancja na ten produkt wynosi 20, 30 lub 50 lat. Korzystamy tylko z najlepszych materiałów. Naszymi dostawcami są ArcelorMittal – największy producent stali na świecie oraz SSAB – szwedzka huta o światowym zasięgu. Stal oodlega recyklingowi w 100% i można ją przetwarzać w nieskończoność. To czyni ją jednym z najbardziej przyjaznych środowisku materiałów.',
            comments:       'Źródło: http://www.budmat.com/pl/produkt/rialto-technologia-dla-stylu-188',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 195 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 150 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '35 mm'},
                {name: 'Wysokość fali', value: '23 mm'},
                {name: 'Wysokość całkowita', value: '58 mm'},
                {name: 'Długość całkowita arkusza', value: '735 mm'},
                {name: 'Długość efektywna arkusza', value: '700 mm'},
                {name: 'Długość modułu', value: '350 mm'}
            ],
            image: "budmat/rialto.jpg",
            exaples: ["budmat/rialto-example.jpg"]
        },
        {
            name:           'Bella Sara', 
            producer:       'Bud-Mat', 
            descroption:    '6 fal dolnych i 7 wierzchołków sprawiają, że Bella Sara to piękno i uroda dla każdego budynku. Bella Sara posiada najmniejsze arkusze spośród wszystkich dachów modułowych Budmat. To sprawia, że montaż dachu jest najbardziej oszczędny. Bella Sara to trwałość i bezpieczeństwo na długie lata. W zależności od użytej powłoki gwarancja na ten produkt wynosi 20, 30 lub 50 lat.',
            comments:       'Źródło: http://www.budmat.com/pl/produkt/bella-sara-wiecznie-piekna-189',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 180 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 100 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '35 mm'},
                {name: 'Wysokość fali', value: '24 mm'},
                {name: 'Wysokość całkowita', value: '59 mm'},
                {name: 'Długość całkowita arkusza', value: '735 mm'},
                {name: 'Długość efektywna arkusza', value: '700 mm'},
                {name: 'Długość modułu', value: '350 mm'}
            ],
            image: "budmat/bellasara.jpg",
            exaples: ["budmat/bella-sara-example.jpg"]
        },
        {
            name:           'Ferrara', 
            producer:       'Bud-Mat', 
            descroption:    'Wygląd Ferrary - 4 fale dolne i 5 wierzchołków - przywodzi na myśl klasyczne dachy z ceramiki. Ferrara to elita wśród dachów. Każda powłoka Ferrary to gwarancja powtarzalność koloru - niezależnie od partii materiału. Jako jedyni w Europie posiadamy pisemną gwarancję powtarzalności koloru od ArcelorMittal oraz od SSAB. Ferrara to trwałość i bezpieczeństwo na długie lata. W zależności od użytej powłoki gwarancja na ten produkt wynosi 30 lub 50 lat.',
            comments:       'Źródło: http://www.budmat.com/pl/produkt/ferrara-dach-xxi-wieku-190',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 190 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 133 mm'},
                {name: 'Grubość blachy', value: '0,5 mm'},
                {name: 'Wysokość przetłoczenia', value: '35 mm'},
                {name: 'Wysokość fali', value: '30 mm'},
                {name: 'Wysokość całkowita', value: '65 mm'},
                {name: 'Długość całkowita arkusza', value: '845 mm'},
                {name: 'Długość efektywna arkusza', value: '800 mm'},
                {name: 'Długość modułu', value: '400 mm'}
            ],
            image: "budmat/ferrara.jpg",
            exaples: ["budmat/ferrara-example.jpg"]
        },
        {
            name:           'Finnera', 
            producer:       'Ruukki', 
            descroption:    'Innowacyjny model stalowego pokrycia dachowego Finnera® sprawia, że Twój dach jest nie tylko piękny, ale także wyjątkowo trwały i praktyczny. Nowatorskie wyprofilowanie przedniej krawędzi arkusza umożliwia uzyskanie zadziwiająco gładkiej powierzchni dachu bez widocznych połączeń. Modułowy, wysokiej jakości dach, możesz otrzymać prosto z magazynu w postaci kompletnego pakietu, gwarantującego łatwy, sprawny i błyskawiczny montaż. Dzięki temu masz więcej czasu dla swoich bliskich. Blachodachówka Finnera jest produktem odpowiednim zarówno dla prostych, dwuspadowych dachów, jak i bardziej skomplikowanych konstrukcji. Finnera, w klasie jakości Ruukki 40, objęta jest 40-letnią gwarancją techniczną i 15-letnią gwarancją estetyczną.',
            comments:       'Źródło: https://www.ruukki.com/pol/dachy/produkty/pokrycia-dachowe/pokrycia-dachowe---produkty/finnera',
            params: [
                {name: 'Szerokość całkowita arkusza', value: '1 190 mm'},
                {name: 'Szerokość efektywna arkusza', value: '1 140 mm'},
                {name: 'Wysokość modułu', value: '52 mm'},
                {name: 'Długość modułu', value: '330 mm'},
                {name: 'Długość całkowita arkusza', value: '685 mm'},
                {name: 'Długość efektywna arkusza', value: '660 mm'},
                {name: 'Powierzchnia efektywna arkusza', value: '0,75 m2'}
            ],
            image: "ruukki/finnera.jpg",
            exaples: ["ruukki/finnera-example.jpg"]
        }
    ];