document.addEventListener("DOMContentLoaded", function () {
  // Function to read URL parameters
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Definition of translations
  const translations = {
    srb: {
      mainheading: "umetnost modernost tradicija",
      mainDesc:
        "Otkrijte čaroliju gline gde se preplice veština i kreativnost, stvarajući jedinstvene lustere.",
      portfolio: "Portfolio",
      allRights: "© NAA Studio. Sva prava zadržana.",
      aboutUs: "O nama",
      fullStory: "Cela priča",
      shortStory:
        "Inspiracija za naš rad dolazi iz davnih vremena kada su ljudi na teritoriji današnje Srbije, pre 5000 godina, pokazivali izuzetnu kreativnost u izražavanju umetnosti i estetike. Iako su te civilizacije bile suočene s izazovima preživljavanja, ljudi Vinčanske kulture koja je bila među najnaprednijima tog perioda pronalazili su načine da odaju počast prirodi i svetu oko sebe kroz skulpture, artefakte i keramiku. Vinčanska civilizacija posebno se isticala svojom naprednom keramikom, antropomorfnim i zoomorfnim figurinama, poznavala su i napredne tehnologije prerade metala, što svedoči o visokom nivou kulture i umetničkog izražavanja. Iako su se suočavali s izazovima svakodnevnog života, ova drevna civilizacija nije zaboravila na važnost umetnosti i kreativnosti, koristeći prirodne materijale i inspiraciju iz okoline kako bi izrazili svoje umetničke talente.",
      home: "Početna",
      forDesigners: "Za dizajnere",
      ourCollection: "Naša kolekcija",
      experienceElegance:
        "Iskustvo elegancije: Pogledajte naše odabrane proizvode",
      samurajSubTitle: "Ratnička tradicija u savremenom svetlu",
      kamenSubTitle: "Sirova snaga prirode",
      pecinaSubTitle: "Tajanstvenost unutrašnjeg sveta",
      idejaSubTitle: "Moć ideje",
      vulkanSubTitle: "Fenomen prirode",
      zirSubTitle: "Harmonija prirode",
      puzlaSubTitle: "Međusobni sklad elemenata",
      mesecSubTitle: "Viša sila",
      xSubTitle: "Elegancija forme",
      miSubTitle: "Crvena nit energije",
      more: "Detaljnije",
      samurajFullDesc1:
        "U japanskoj kulturi, vraćanjem u davnu prošlost dolazimo do ratnika davnih vremena - samuraja. Inspirisani tim konceptom, stvorili smo našeg “Samuraja“, luster koji odaje počast karakteru I učenju drevnih ratnika.",
      samurajFullDesc2:
        "Oblik I boja lustera podseća na “kabuto”, tradicionalni šlem samuraja koji su nosili u bitkama, dok sam dizajn odražava suštinske vrednosti filozofije dalekog istoka - minimalizam, wabi sabi, iki. Dok smo ga stvarali, nastojali smo da ti principi prožmu svaki aspekt dizajna. Kroz nijanse patine stvorene oksidiranjem bakra kroz vreme, možemo zamisliti prošlost ovog materijala i osetiti prisustvo godina koje ga je oblikovalo. Drugi deo lustera izrađen od gline, simbolizuje tradiciju i kontinuitet između generacija koje povezuje isti materijal, zemlja. Ne postoji čovek čiji preci nisu koristili ovaj materijal u izradi kuća, posuđa, i drugih predmeta.",
      samurajFullDesc3:
        "U “Samuraju“ pronalazimo više od običnog komada osvetljenja; on je poput portala kojim se možemo povezati sa dubokim moralnim vrednostima i duhovnom mudrošću japanske tradicije, podsećajući nas na lepotu nesavršenosti, jednostavnosti i nepravilnosti.",
      specification: "specifikacija",
      material: "materijal",
      dimensions: "dimenzije",
      weight: "težina",
      colors: "boje",
      rest: "ostalo",
      kamenFullDesc1:
        "Ovaj luster je kreiran s ciljem da naglasi prirodnu autentičnost, nesavršenost oblika i čvrstinu koju svaki komad kamena poseduje. Kada ga pogledamo, vidimo više od običnog lustera - vidimo deo prirode, jedinstvenu i autentičnu u svom postojanju.",
      kamenFullDesc2:
        "Inspirisani unikatnošću kamena, dizajn ovog lustera bazira se na njegovoj autentičnosti, čineći svaki luster jedinstvenim poput kamena koji nas nadahnjuje. Svaki detalj ovog lustera pažljivo je oblikovan kako bi istakao nepravilnosti i jedinstvenost prirodnog kamena. Dok smo oblikovali svaki njegov deo, osećali smo kao da smo deo prirode, kao da zajedno stvaramo nešto što odražava lepotu i snagu prirodnog sveta.",
      kamenFullDesc3:
        "Njegova autentičnost privlači pažnju i unosi dozu prirodne lepote u svaki ambijent, podsećajući nas na snagu prirode koja nas okružuje i kojoj pripadamo, to je priča koja nas povezuje sa suštinom prirode i podseća nas na lepotu koja se krije u njenim nepravilnostima i unikatnošću.",
      pecinaFullDesc1:
        "Kroz luster nazvan 'Pećina' provlači se misterija neistraženih dubina, poput tajanstvenog unutrašnjeg sveta svakog čoveka, skrivenog ispod vidljive površine. Uvereni da dubine kriju više nego što se vidi na prvi pogled, otkrivamo da se ispod nalazi čitav jedan svet - nepoznatih slojeva koji čekaju da budu razotkriveni kroz vreme.",
      pecinaFullDesc2:
        "Inspirisani unutrašnjim svetom pećina, svaki delić lustera odražava složenost i tajanstvenost, pozivajući nas na putovanje u neistražene prostore. Kao što i naš unutrašnji svet krije dubine koje su poznate samo nama, tako i pećina čuva tajne koje čekaju da budu istražene, ali nikada u potpunosti otkrivene.",
      pecinaFullDesc3:
        "Kroz suptilnu igru svetlosti i senki, 'Pećina' stvara atmosferu koja odiše misterijom, pozivajući nas da istražimo dubine prirode i otkrijemo tajne koje čekaju da budu osvetljenje, podsećajući nas na lepotu koja se krije u najdubljim delovima zemlje.",
      idejaFullDesc1:
        "Kada sam prvi put ugledao oblik lustera poput 'Ideje', osetio sam da je to bio trenutak koji će uticati na moj život. Setio sam se rečenice velikog arhitekte Miesa van der Rohea: 'Manje je više.' Lepota nije u obilju detalja, već u skladu i jednostavnosti.",
      idejaFullDesc2:
        "Za nas, 'Ideja' postaje simbol ovog koncepta, izvor inspiracije za sve što sledi. Oblik lustera je manifest minimalizma kao načina razmišljanja i stvaranja. Kroz osnovne forme, čiste linije i minimalnu upotrebu boja, ovaj luster teži eliminisanju suvišnih detalja, fokusirajući se na suštinu.",
      idejaFullDesc3:
        "'Ideja' je iskra koja pali vatru kreativnosti, podstičući nas da istražujemo lepotu jednostavnosti u našem svakodnevnom životu. Naglašava važnost prostora, tišine i unutrašnjeg mira. Za nas predstavlja simbol početka jedinstvenog umetničkog ciklusa. Ona je inspiracija za našu prvu seriju lustera, postajući temelj naše misije i osnova našeg stvaralaštva. Svedok je snage kreativnog procesa koji je pokrenuo lavinu umetničkih dela.",
      vulkanFullDesc1:
        "U njemu se krije priča o neobjašnjivim prirodnim fenomenima, o zemlji koja diše i energiji koja pulsira kroz svaki njen atom. Inspirisan vulkanskom lavom i kupastom forma poput planine simbolizuje tajanstvenu snagu energije koja leži duboko ispod površine zemljine kore.",
      vulkanFullDesc2:
        "Svaka linija, svaki ugao ovog lustera odražava snagu vulkanske energije koja teče poput reke ispod površine zemlje. Gornji deo lustera, u tamnim i sivim nijansama, predstavlja pepeo koji se taloži nakon erupcije vulkana, dok crvena glina od koje je izrađena unutrašnjost, poput lave, naglašava moć prirode. Dok posmatrate ovu jedinstvenu kreaciju, možete osetiti vibracije zemlje, neuhvatljive sile koje oblikuju svet oko nas.",
      vulkanFullDesc3:
        "Erupcija vulkana je samo delić velike energije zarobljene u dubinama Zemlje, baš kao što smo I mi sami deo neistraženog potencijala koji svako od nas nosi u sebi. Kroz ovaj luster, susrećemo se sa višom silom koja nas podseća na našu povezanost sa zemljom od koje smo svi sačinjeni. “Vulkan” predstavlja putokaz ka dubljem razumevanju našeg postojanja.",
      vulkanFullDesc4:
        "Poput živog artefakta, ne svedoči samo o našoj povezanosti sa zemljom, već i o našoj sposobnosti da se uzdignemo iznad običnog. U njegovoj jednostavnosti leži moć, koja nas podseća na našu unutrašnju vulkansku snagu koja čeka da bude oslobođena.",
      zirFullDesc1:
        "Luster 'Žir' predstavlja spoj prirodnog izraza i lepote forme, inspirisan plodom hrasta. Poput žira koji štiti svoj unutrašnji plod svojom čvrstom školjkom, tako i omotač ovog lustera “čuva” unutrašnje svetlo, skriveno i zaštićeno unutar svoje strukture. Sijalica, poput semena žira, donosi svetlost i simbolizuje početak životnog ciklusa.",
      zirFullDesc2:
        "Sirova obrada unutrašnjosti lustera naglašava autentičnost i sirovu lepotu prirode, dok nepravilnosti u dizajnu dodaju jedinstven karakter svetlosnom ambijentu. Kroz svoj jednostavan, a istovremeno izražajan dizajn, 'Žir' oživljava prostor svojom toplinom i energijom, stvarajući atmosferu koja nas podseća na sklad između čoveka i okoline.",
      zirFullDesc3:
        "Njegova suština leži u podsećanju na povezanost između čoveka i prirode, naglašavajući harmoniju i sklad u tom odnosu. Ujedinjujući elemente stvaranja i plodnosti, luster 'Žir' nosi u sebi duboku simboliku.",
      puzlaFullDesc1:
        "Predstavlja delo koje spaja estetiku i funkcionalnost na jedinstven način. Inspirisan konceptom slagalice, ovaj luster je poput poslednje puzle koja se uklapa u ambijent svake prostorije. Struktura lustera sastoji se od dva dela, oblikovanih kao kupe i povezanih međudobno kao delovi slagalice. Gornji deo, koji čini jednu trećinu donjeg dela zajedno sa njim stvara harmoniju i balans. U skladu sa pravilom trećina, postiže estetsku privlačnost i kompozicijsku ravnotežu.",
      puzlaFullDesc2:
        "Izrađen od gline, donosi dodatnu dimenziju prirodnosti i autentičnosti u prostoriju. Svaki detalj i tekstura ovog lustera odražavaju majstorstvo ručne izrade i unikatni karakter gline kao materijala. Svojom jednostavnošću i istovremeno složenošću, 'Puzla' postaje neizostavni deo svakog enterijera, dodajući jedinstvenu notu elegancije i stila.",
      mesecFullDesc1:
        "Inspirisan oblikom i teksturom same površine Meseca, svojom elegantnom formom, stvara mističnu atmosferu u prostoriji, kao omaž jednom od najintrigantnijih nebeskih tela. Tekstura lustera oponaša živopisnu površinu Meseca, stvarajući jedinstvenu estetiku tamnih i svetlih tonova.",
      mesecFullDesc2:
        "'Mesec' predstavlja vrata prema neistraženim dubinama i tajnama koje krije ovo misteriozno nebesko telo nad nama. Svakim pogledom na njegovu površinu, osećamo kao da uranjamo u svet misterije i tajni koje su još uvek nedokučene.",
      mesecFullDesc3:
        "Čovek je oduvek bio fasciniran Mesecom, a istraživanje njegovih tajni bilo je deo mnogih naučnih i filozofskih napora. Kroz vekove, Mesec je nadahnuo umetnike, pesnike i naučnike, podstičući ih da istražuju njegove tajne i da prodube razumevanje njegove uloge u kosmosu. Ovaj luster je omaž tih napora, podsećajući nas na našu fascinaciju ovim nebeskim telom i našu želju da otkrijemo više o njegovim tajnama.",
      xFullDesc1:
        "Luster 'X' svojom pojavom ističe suptilnu lepotu minimalizma, naglašavajući eleganciju forme i umetničku srž. Oblikovan kao izdužena kupa, ovaj luster pruža jednostavnost izrađenu od bele gline, prirodno nepravilne teksture, što dodatno naglašava ručnu izradu i unikatnost. Utemeljen na konceptu minimalizma, gde je naglasak na esencijalnosti oblika i lepoti materijala, 'X' luster predstavlja spoj tradicionalne obrade sa modernim estetskim shvatanjem.",
      xFullDesc2:
        "Svojom suptilnom formom istražuje harmoniju između prirodnih elemenata i savremenih stilskih pravaca, stvarajući jedinstveno svetlosno iskustvo koje pleni jednostavnošću i sofisticiranošću.",
      xFullDesc3:
        "U skladu sa filozofijom wabi-sabi, 'X' luster ceni lepotu u jednostavnosti i skromnosti, ističući nepravilnosti i nesavršenosti kao deo njegove estetike. Wabi-sabi uči nas da cenimo prolaznost i promene koje donosi vreme. 'X' luster odražava suptilnost i eleganciju svojim nenametljivim dizajnom, naglašavajući sofisticiranost kroz jednostavno i nenametljivo izražavanje, ističući lepotu koja proizilazi iz jednostavnosti.",
      miFullDesc1:
        "Osmišljen je kao simbol povezanosti među ljudima. Sa visilicama koje su međusobno povezane, ova kreacija donosi jedinstvenu vizualnu interpretaciju veza koje nas spajaju. Žica nije samo estetski element, već predstavlja nevidljivu snagu konekcije koja prenosi energiju od jednog do drugog čoveka. 'Mi' je više od svetiljki; to je ilustracija kako međuljudske veze oblikuju našu energiju i snagu.",
      miFullDesc2:
        "Svi lusteri su ručno rađeni, posebni i jedinstveni, baš kao i ljudi koje predstavljaju. Njihova individualnost naglašava različitost i bogatstvo ljudskog iskustva. Poput svake visilice u kompoziciji, ljudi nose svoju posebnu svetlost i energiju, čineći zajednicu bogatijom.",
      miFullDesc3:
        "Kao što se električna struja prenosi od jedne do druge visilice, tako se i energija prenosi između ljudi, stvarajući mrežu interakcija. Ta energija, poput svetlosti koju emituju lusteri, potiče od jednog izvora - izvora sveprisutne inspiracije i snage.",
      miFullDesc4:
        "Ne postoje dve identične visilice, baš kao što ne postoje dva identična čoveka. Njihova jedinstvenost nas podseća na bogatstvo raznolikosti u svetu oko nas i važnost svakog pojedinca u stvaranju jedinstvene zajednice.",
      areYouDesigner:
        "Da li ste dizajner ili arhitekta? Pošaljite nam poruku kako bismo diskutovali detalje o saradnji.",
      threeDModels: "3d Modeli",
      download: "Preuzmi",
      preview: "Pregled",
      aboutUsSubtitle:
        "Povezivanje prošlosti i sadašnjosti kroz umetnost i moderni dizajn.",
      aboutUs1: "Suptilna Simfonija",
      aboutUs2:
        "Naša kolekcija lustera predstavlja spoj tradicije, umetnosti i modernosti, inspirisani bogatom istorijom i umetničkim dostignućima prošlosti. U našem stvaralaštvu težimo da spojimo duh prošlosti sa suptilnim tonovima modernog dizajna. Pri dizajniranju, težili smo da se kroz umetnost i moderni dizajn vratimo korenima i tradiciji, gde je svaki luster ručno izrađen od gline ili bakra, posvećujući posebnu pažnju svakom detalju.",
      aboutUs3: "Harmonija Prošlosti i Sadašnjosti",
      aboutUs4:
        "Inspiracija za naš rad dolazi iz davnih vremena kada su ljudi na teritoriji današnje Srbije, pre 5000 godina, pokazivali izuzetnu kreativnost u izražavanju umetnosti i estetike. Iako su te civilizacije bile suočene s izazovima preživljavanja, ljudi Vinčanske kulture koja je bila među najnaprednijima tog perioda pronalazili su načine da odaju počast prirodi i svetu oko sebe kroz skulpture, artefakte i keramiku. Vinčanska civilizacija posebno se isticala svojom naprednom keramikom, antropomorfnim i zoomorfnim figurinama, poznavala su i napredne tehnologije prerade metala, što svedoči o visokom nivou kulture i umetničkog izražavanja. Iako su se suočavali s izazovima svakodnevnog života, ova drevna civilizacija nije zaboravila na važnost umetnosti i kreativnosti, koristeći prirodne materijale i inspiraciju iz okoline kako bi izrazili svoje umetničke talente.",
      aboutUs5:
        "Dizajn naših lustera baziran je na japanskoj filozofiji, odnosno na sledećim konceptima:",
      aboutUs6: "Wabi-sabi",
      aboutUs7:
        "naglašava lepotu u jednostavnosti, skromnosti i prolaznosti. Uči nas da cenimo nepravilnosti, nesavršenosti i prolaznost u svemu oko nas. Ovaj koncept podstiče nas da pronalazimo lepotu u jednostavnim, prirodnim materijalima, ceneći prolaznost vremena. U našim lusterima oživljavamo ovu filozofiju kroz ručno izrađene oblike, naglašavajući jednostavnost i suptilnost u dizajnu, dok istovremeno cenimo prirodne nepravilnosti i teksture.",
      aboutUs8: "Minimalizam",
      aboutUs9:
        "filozofija koja ističe suštinsku jednostavnost i redukciju na najosnovnije elemente. Kroz naše lustere, težimo da prenesemo esenciju minimalizma, koristeći čiste linije i jednostavne oblike kako bismo postigli harmoniju između funkcionalnosti i estetike. Na taj način oni postaju simbol jednostavnosti, elegancije i smirenosti u modernom domu.",
      aboutUs10: "Umetnost kroz vekove",
      aboutUs11:
        "Kroz naše lustere, prenosimo duh i lepotu prošlih vremena, istovremeno stvarajući jedinstvena umetnička dela koja odražavaju savremene trendove i estetiku. Na taj način, povezujemo prošlost i sadašnjost, stvarajući harmoniju između tradicije, umetnosti i modernosti.",
      name: "Ime i Prezime",
      email: "e-pošta",
      message: "Poruka",
      send: "Pošalji",
      close: "Zatvori",
      contact: "Kontakt",
    },

    en: {
      mainheading: "Art Modern Raw",
      mainDesc:
        "Discover the Magic of Clay: where craftsmanship meets creativity and uniqueness intertwines with lighting fixtures, creating extraordinary chandeliers.",
      portfolio: "Portfolio",
      allRights: "© NAA Studio. All rights reserved.",
      aboutUs: "About us",
      fullStory: "Full story",
      shortStory:
        "Our inspiration comes from ancient times when people in the territory of present-day Serbia, 5000 years ago, showed exceptional creativity in expressing art and aesthetics. Although those civilizations faced challenges of survival, the people of the Vinča culture, which was among the most advanced of that period, found ways to pay tribute to nature and the world around them through sculptures, artifacts, and ceramics. The Vinča civilization particularly stood out with its advanced ceramics, anthropomorphic and zoomorphic figurines, and knowledge of advanced metalworking technologies, testifying to a high level of culture and artistic expression. Despite facing the challenges of everyday life, this ancient civilization did not forget the importance of art and creativity, using natural materials and inspiration from the environment to express their artistic talents.",
      home: "Home",
      forDesigners: "For designers",
      ourCollection: "Our collection",
      experienceElegance: "Experience elegance: Check out our latest products",
      samurajSubTitle: "",
      samurajSubTitle: "Warrior tradition in a modern light",
      kamenSubTitle: "Raw power of nature",
      pecinaSubTitle: "Mystery of the inner world",
      idejaSubTitle: "Power of idea",
      vulkanSubTitle: "Phenomenon of nature",
      zirSubTitle: "Harmony of nature",
      puzlaSubTitle: "Interplay of elemental balance",
      mesecSubTitle: "Higher power",
      xSubTitle: "Elegance of form",
      miSubTitle: "Red thread of energy",
      more: "More",
      samurajFullDesc1:
        "In Japanese culture, delving into the distant past leads us to the warriors of ancient times - the samurai. Inspired by this concept, we have created our 'Samurai', a chandelier that pays homage to the character and teachings of ancient warriors.",
      samurajFullDesc2:
        "The shape and color of the chandelier resemble the 'kabuto', the traditional helmet of the samurai worn in battles, while the design reflects the essential values of Far Eastern philosophy - minimalism, wabi-sabi, iki. As we created it, we sought to imbue these principles into every aspect of the design. Through the nuanced patina created by copper oxidization over time, we can imagine the past of this material and feel the presence of the years that shaped it. The second part of the chandelier, made of clay, symbolizes the tradition and continuity between generations that connect through the same material, the earth. There is no person whose ancestors did not use this material in the construction of houses, utensils, and other objects.",
      samurajFullDesc3:
        "In the 'Samurai', we find more than just a piece of illumination; it is like a portal through which we can connect with the deep moral values and spiritual wisdom of Japanese tradition, reminding us of the beauty of imperfection, simplicity, and irregularity.",
      specification: "specification",
      material: "material",
      dimensions: "dimensions",
      weight: "weight",
      colors: "colors",
      rest: "rest",
      kamenFullDesc1:
        "This chandelier is created with the aim to emphasize the natural authenticity, imperfection of shape, and the solidity that every piece of stone possesses. When we look at it, we see more than just a chandelier - we see a part of nature, unique and authentic in its existence.",
      kamenFullDesc2:
        "Inspired by the uniqueness of stone, the design of this chandelier is based on its authenticity, making each chandelier as unique as the stone that inspires us. Every detail of this chandelier is carefully shaped to highlight the irregularities and uniqueness of natural stone. As we shaped each part of it, we felt like a part of nature, as if we were creating something together that reflects the beauty and strength of the natural world.",
      kamenFullDesc3:
        "Its authenticity draws attention and brings a dose of natural beauty into every environment, reminding us of the power of the nature that surrounds us and to which we belong. It's a story that connects us with the essence of nature and reminds us of the beauty hidden in its irregularities and uniqueness.",
      pecinaFullDesc1:
        "Through the chandelier named 'Cave', the mystery of unexplored depths is drawn, like the mysterious inner world of every human, hidden beneath the visible surface. Convinced that the depths conceal more than meets the eye, we discover that underneath lies a whole world - unknown layers waiting to be unveiled through time.",
      pecinaFullDesc2:
        "Inspired by the inner world of caves, every part of the chandelier reflects complexity and mystery, inviting us on a journey into uncharted spaces. Just as our inner world harbors depths known only to us, so does the cave hold secrets waiting to be explored, yet never fully revealed.",
      pecinaFullDesc3:
        "Through the subtle play of light and shadow, 'Cave' creates an atmosphere steeped in mystery, inviting us to explore the depths of nature and discover the secrets waiting to be illuminated, reminding us of the beauty hidden in the deepest parts of the earth.",
      idejaFullDesc1:
        "When I first laid eyes on the shape of the chandelier resembling the 'Idea,' I felt it was a moment that would impact my life. I remembered the words of the great architect Mies van der Rohe: 'Less is more.' Beauty lies not in the abundance of details, but in harmony and simplicity.",
      idejaFullDesc2:
        "For us, the 'Idea' becomes a symbol of this concept, a source of inspiration for all that follows. The shape of the chandelier manifests minimalism as a way of thinking and creating. Through basic forms, clean lines, and minimal use of color, this chandelier aims to eliminate unnecessary details, focusing on the essence.",
      idejaFullDesc3:
        "'Idea' is the spark that ignites the fire of creativity, encouraging us to explore the beauty of simplicity in our daily lives. It emphasizes the importance of space, silence, and inner peace. For us, it represents the symbol of the beginning of a unique artistic cycle. It is the inspiration for our first series of chandeliers, becoming the foundation of our mission and the cornerstone of our creativity. It witnesses the power of the creative process that has set off an avalanche of artistic works.",
      vulkanFullDesc1:
        "It holds a story of inexplicable natural phenomena, of the earth that breathes, and the energy pulsating through every atom. Inspired by volcanic lava and its mountain-like shape, it symbolizes the mysterious power of energy lying deep beneath the earth's surface.",
      vulkanFullDesc2:
        "Every line, every angle of this chandelier reflects the power of volcanic energy flowing like a river beneath the earth's surface. The upper part of the chandelier, in dark and gray shades, represents the ash deposited after a volcano eruption, while the red clay from which its interior is made, like lava, emphasizes the power of nature. As you observe this unique creation, you can feel the vibrations of the earth, the elusive forces shaping the world around us.",
      vulkanFullDesc3:
        "A volcano eruption is just a fraction of the great energy trapped in the depths of the Earth, much like how we ourselves are part of the unexplored potential that each of us carries within. Through this chandelier, we encounter a higher force that reminds us of our connection to the earth from which we are all made. 'Vulkan' serves as a guide to a deeper understanding of our existence.",
      vulkanFullDesc4:
        "Like a living artifact, it testifies not only to our connection to the earth but also to our ability to rise above the ordinary. In its simplicity lies power, reminding us of our inner volcanic strength waiting to be unleashed.",
      zirFullDesc1:
        "The 'Žir' chandelier represents a fusion of natural expression and the beauty of form, inspired by the acorn. Just as the acorn protects its inner seed with its tough shell, so does the shell of this chandelier 'guard' the inner light, hidden and protected within its structure. The bulb, like the seed of the acorn, brings light and symbolizes the beginning of the life cycle.",
      zirFullDesc2:
        "The raw interior finish of the chandelier emphasizes the authenticity and raw beauty of nature, while irregularities in the design add a unique character to the lighting ambiance. Through its simple yet expressive design, 'Žir' enlivens the space with its warmth and energy, creating an atmosphere that reminds us of the harmony between humans and their environment.",
      zirFullDesc3:
        "Its essence lies in reminding us of the connection between humans and nature, emphasizing harmony and balance in that relationship. By uniting elements of creation and fertility, the 'Žir' chandelier carries deep symbolism within itself.",
      puzlaFullDesc1:
        "It represents a work that combines aesthetics and functionality in a unique way. Inspired by the concept of a puzzle, this chandelier is like the final piece fitting into the ambiance of any room. The structure of the chandelier consists of two parts, shaped like domes and interconnected like puzzle pieces. The upper part, which forms one third of the lower part, creates harmony and balance together with it. Following the rule of thirds, it achieves aesthetic appeal and compositional balance.",
      puzlaFullDesc2:
        "Made of clay, it brings an additional dimension of naturalness and authenticity to the room. Every detail and texture of this chandelier reflects the craftsmanship of handcrafting and the unique character of clay as a material. With its simplicity and complexity at the same time, 'Puzla' becomes an indispensable part of every interior, adding a unique touch of elegance and style.",
      mesecFullDesc1:
        "Inspired by the shape and texture of the Moon's surface itself, with its elegant form, it creates a mystical atmosphere in the room, paying homage to one of the most intriguing celestial bodies. The chandelier's texture mimics the vivid surface of the Moon, creating a unique aesthetic of dark and light tones.",
      mesecFullDesc2:
        "'Mesec' represents a gateway to the unexplored depths and mysteries that this mysterious celestial body above us holds. With each glance at its surface, we feel as if we are plunging into a world of mystery and secrets that are still yet to be unraveled.",
      mesecFullDesc3:
        "Man has always been fascinated by the Moon, and the exploration of its secrets has been part of many scientific and philosophical endeavors. Throughout the centuries, the Moon has inspired artists, poets, and scientists, prompting them to explore its mysteries and deepen their understanding of its role in the cosmos. This chandelier is a tribute to those efforts, reminding us of our fascination with this celestial body and our desire to uncover more of its secrets.",
      xFullDesc1:
        "The 'X' chandelier stands out with its appearance, highlighting the subtle beauty of minimalism, emphasizing the elegance of form and artistic essence. Shaped like an elongated dome, this chandelier offers simplicity crafted from white clay, with a naturally irregular texture, further emphasizing handcraftsmanship and uniqueness. Rooted in the concept of minimalism, where the emphasis is on the essential nature of form and the beauty of materials, the 'X' chandelier represents a blend of traditional craftsmanship with modern aesthetic understanding.",
      xFullDesc2:
        "With its subtle form, it explores the harmony between natural elements and contemporary stylistic trends, creating a unique lighting experience that captivates with simplicity and sophistication.",
      xFullDesc3:
        "In line with the philosophy of wabi-sabi, the 'X' chandelier appreciates beauty in simplicity and modesty, highlighting irregularities and imperfections as part of its aesthetics. Wabi-sabi teaches us to appreciate transience and the changes that time brings. The 'X' chandelier reflects subtlety and elegance with its unassuming design, emphasizing sophistication through simple and unobtrusive expression, highlighting the beauty that arises from simplicity.",
      miFullDesc1:
        "Designed as a symbol of connectivity among people, with pendants interlinked, this creation brings a unique visual interpretation of the ties that bind us. The wire is not just an aesthetic element but represents the invisible power of connection that transmits energy from one person to another. 'Mi' is more than just lights; it illustrates how human connections shape our energy and strength.",
      miFullDesc2:
        "All chandeliers are handmade, special, and unique, just like the people they represent. Their individuality emphasizes the diversity and richness of human experience. Like each pendant in the composition, people carry their unique light and energy, enriching the community.",
      miFullDesc3:
        "Just as electrical current is transmitted from one pendant to another, so is energy transmitted between people, creating a network of interactions. That energy, like the light emitted by chandeliers, comes from one source - a source of ubiquitous inspiration and strength.",
      miFullDesc4:
        "There are no two identical pendants, just as there are no two identical individuals. Their uniqueness reminds us of the richness of diversity in the world around us and the importance of each individual in creating a unique community.",
      areYouDesigner:
        "Are you a designer or an architect? Send us a message to discuss collaboration details.",
      threeDModels: "3D Models",
      download: "Download",
      preview: "Preview",
      aboutUsSubtitle:
        "Bridging past and present through art and modern design.",
      aboutUs1: "Subtle Symphony",
      aboutUs2:
        "Our chandelier collection represents a blend of tradition, art, and modernity, inspired by rich history and artistic achievements of the past. In our creations, we strive to fuse the spirit of the past with subtle tones of modern design. In our design process, we aimed to return to roots and tradition through art and modern design, where each chandelier is handcrafted from clay or copper, dedicating special attention to every detail.",
      aboutUs3: "Harmony of Past and Present",
      aboutUs4:
        "Inspiration for our work comes from ancient times when people in the territory of present-day Serbia, 5000 years ago, demonstrated exceptional creativity in expressing art and aesthetics. Although these civilizations faced survival challenges, people of the Vinča culture, which was among the most advanced of that period, found ways to honor nature and the world around them through sculptures, artifacts, and ceramics. The Vinča civilization particularly stood out with its advanced ceramics, anthropomorphic and zoomorphic figurines, and knowledge of advanced metalworking technologies, which testify to a high level of culture and artistic expression. Despite facing the challenges of daily life, this ancient civilization did not forget the importance of art and creativity, using natural materials and inspiration from the environment to express their artistic talents.",
      aboutUs5:
        "The design of our chandeliers is based on Japanese philosophy, specifically on the following concepts:",
      aboutUs6: "Wabi-sabi",
      aboutUs7:
        "emphasizes beauty in simplicity, modesty, and impermanence. It teaches us to appreciate irregularities, imperfections, and impermanence in everything around us. This concept encourages us to find beauty in simple, natural materials, appreciating the passage of time. In our chandeliers, we embody this philosophy through handmade shapes, emphasizing simplicity and subtlety in design while also valuing natural irregularities and textures.",
      aboutUs8: "Minimalism",
      aboutUs9:
        "is a philosophy that highlights essential simplicity and reduction to the most basic elements. Through our chandeliers, we aim to convey the essence of minimalism, using clean lines and simple shapes to achieve harmony between functionality and aesthetics. In this way, they become symbols of simplicity, elegance, and tranquility in the modern home.",
      aboutUs10: "Art Through the Ages",
      aboutUs11:
        "Through our chandeliers, we convey the spirit and beauty of bygone eras, while simultaneously creating unique works of art that reflect contemporary trends and aesthetics. In doing so, we bridge the past and present, creating harmony between tradition, art, and modernity.",
      name: "First and Last Name",
      email: "Email",
      message: "Message",
      send: "Send",
      close: "Close",
      contact: "Contact",
    },
    esp: {
      mainheading: "Arte moderno crudo",
      mainDesc:
        "Descubre la Magia de la Arcilla: donde la artesanía se encuentra con la creatividad y la singularidad se entrelaza con las luminarias, creando extraordinarios candelabros.",
      portfolio: "Portafolio",
      allRights: "© NAA Studio. Todos los derechos reservados.",
      aboutUs: "Acerca de nosotros",
      fullStory: "Historia completa",
      shortStory:
        "Nuestra inspiración proviene de tiempos antiguos cuando las personas en el territorio de la actual Serbia, hace 5000 años, mostraban una creatividad excepcional en la expresión del arte y la estética. Aunque esas civilizaciones enfrentaban desafíos de supervivencia, la gente de la cultura de Vinča, que estaba entre las más avanzadas de ese período, encontraban maneras de rendir homenaje a la naturaleza y al mundo que les rodeaba a través de esculturas, artefactos y cerámica. La civilización de Vinča destacaba especialmente por su cerámica avanzada, figuras antropomorfas y zoomorfas, y conocimientos en tecnologías avanzadas de metalurgia, lo que testimonia un alto nivel de cultura y expresión artística. A pesar de enfrentar los desafíos de la vida cotidiana, esta antigua civilización no olvidaba la importancia del arte y la creatividad, utilizando materiales naturales e inspiración del entorno para expresar sus talentos artísticos.",
      home: "Inicio",
      forDesigners: "Para diseñadores",
      ourCollection: "Nuestra colección",
      experienceElegance:
        "Experiencia de elegancia: Echa un vistazo a nuestros últimos productos",
      samurajSubTitle: "Tradición guerrera en la luz moderna",
      kamenSubTitle: "Poder crudo de la naturaleza",
      pecinaSubTitle: "Misterio del mundo interior",
      idejaSubTitle: "Poder de las idea",
      vulkanSubTitle: "Fenómeno de la naturaleza",
      zirSubTitle: "Armonía de la naturaleza",
      puzlaSubTitle: "Interacción de equilibrio elemental",
      mesecSubTitle: "Poder superior",
      xSubTitle: "Elegancia de la forma",
      miSubTitle: "Hilo rojo de energía",
      more: "Más",
      samurajFullDesc1:
        "En la cultura japonesa, al adentrarnos en el pasado distante llegamos a los guerreros de tiempos antiguos: los samuráis. Inspirados por este concepto, hemos creado nuestro 'Samurai', un candelabro que rinde homenaje al carácter y enseñanzas de los antiguos guerreros.",
      samurajFullDesc2:
        "La forma y el color del candelabro recuerdan al 'kabuto', el casco tradicional de los samuráis usado en batallas, mientras que el diseño refleja los valores esenciales de la filosofía del Extremo Oriente: minimalismo, wabi-sabi, iki. Al crearlo, buscamos impregnar estos principios en cada aspecto del diseño. A través de la pátina matizada creada por la oxidación del cobre con el tiempo, podemos imaginar el pasado de este material y sentir la presencia de los años que lo moldearon. La segunda parte del candelabro, hecha de arcilla, simboliza la tradición y continuidad entre generaciones que se conectan a través del mismo material, la tierra. No hay persona cuyos ancestros no hayan utilizado este material en la construcción de casas, utensilios y otros objetos.",
      samurajFullDesc3:
        "En el 'Samurai', encontramos más que solo una pieza de iluminación; es como un portal a través del cual podemos conectarnos con los profundos valores morales y la sabiduría espiritual de la tradición japonesa, recordándonos la belleza de la imperfección, la simplicidad y la irregularidad.",
      specification: "especificación",
      material: "material",
      dimensions: "dimensiones",
      weight: "peso",
      colors: "colores",
      rest: "resto",
      kamenFullDesc1:
        "Este candelabro se crea con el objetivo de enfatizar la autenticidad natural, la imperfección de la forma y la solidez que cada pieza de piedra posee. Cuando lo miramos, vemos más que un simple candelabro; vemos una parte de la naturaleza, única y auténtica en su existencia.",
      kamenFullDesc2:
        "Inspirado por la singularidad de la piedra, el diseño de este candelabro se basa en su autenticidad, haciendo que cada candelabro sea tan único como la piedra que nos inspira. Cada detalle de este candelabro está cuidadosamente diseñado para resaltar las irregularidades y singularidades de la piedra natural. Mientras dábamos forma a cada parte de él, nos sentíamos como parte de la naturaleza, como si estuviéramos creando algo juntos que reflejara la belleza y la fuerza del mundo natural.",
      kamenFullDesc3:
        "Su autenticidad llama la atención y aporta una dosis de belleza natural a cada entorno, recordándonos el poder de la naturaleza que nos rodea y a la que pertenecemos. Es una historia que nos conecta con la esencia de la naturaleza y nos recuerda la belleza oculta en sus irregularidades y singularidades.",
      pecinaFullDesc1:
        "A través del candelabro llamado 'Cueva', se dibuja el misterio de las profundidades inexploradas, como el misterioso mundo interior de cada ser humano, oculto bajo la superficie visible. Convencidos de que las profundidades ocultan más de lo que se ve a simple vista, descubrimos que debajo yace un mundo entero, capas desconocidas que esperan ser reveladas con el tiempo.",
      pecinaFullDesc2:
        "Inspirado por el mundo interior de las cuevas, cada parte del candelabro refleja complejidad y misterio, invitándonos a un viaje a espacios desconocidos. Así como nuestro mundo interior alberga profundidades conocidas solo por nosotros, así también la cueva guarda secretos esperando ser explorados, aunque nunca completamente revelados.",
      pecinaFullDesc3:
        "A través del sutil juego de luz y sombra, 'Cueva' crea una atmósfera impregnada de misterio, invitándonos a explorar las profundidades de la naturaleza y descubrir los secretos esperando ser iluminados, recordándonos la belleza oculta en las partes más profundas de la tierra.",
      idejaFullDesc1:
        "Cuando vi por primera vez la forma del candelabro que se asemejaba a la 'Idea', sentí que era un momento que impactaría mi vida. Recordé las palabras del gran arquitecto Mies van der Rohe: 'Menos es más'. La belleza no radica en la abundancia de detalles, sino en la armonía y la simplicidad.",
      idejaFullDesc2:
        "Para nosotros, la 'Idea' se convierte en un símbolo de este concepto, una fuente de inspiración para todo lo que sigue. La forma del candelabro manifiesta el minimalismo como una forma de pensar y crear. A través de formas básicas, líneas limpias y un uso mínimo del color, este candelabro busca eliminar detalles innecesarios, centrándose en la esencia.",
      idejaFullDesc3:
        "'Idea' es la chispa que enciende el fuego de la creatividad, animándonos a explorar la belleza de la simplicidad en nuestra vida diaria. Enfatiza la importancia del espacio, el silencio y la paz interior. Para nosotros, representa el símbolo del comienzo de un ciclo artístico único. Es la inspiración para nuestra primera serie de candelabros, convirtiéndose en el fundamento de nuestra misión y en la piedra angular de nuestra creatividad. Es testigo del poder del proceso creativo que ha desencadenado una avalancha de obras artísticas.",
      vulkanFullDesc1:
        "En él se esconde una historia de fenómenos naturales inexplicables, de la tierra que respira y de la energía que pulsa a través de cada uno de sus átomos. Inspirado en la lava volcánica y en su forma parecida a una montaña, simboliza el misterioso poder de la energía que yace profundamente bajo la superficie terrestre.",
      vulkanFullDesc2:
        "Cada línea, cada ángulo de este candelabro refleja la fuerza de la energía volcánica que fluye como un río bajo la superficie terrestre. La parte superior del candelabro, en tonos oscuros y grises, representa la ceniza depositada después de una erupción volcánica, mientras que la arcilla roja de la que está hecha su interior, como la lava, enfatiza el poder de la naturaleza. Mientras observas esta creación única, puedes sentir las vibraciones de la tierra, las fuerzas esquivas que dan forma al mundo que nos rodea.",
      vulkanFullDesc3:
        "Una erupción volcánica es solo una fracción de la gran energía atrapada en las profundidades de la Tierra, tal como nosotros mismos somos parte del potencial inexplorado que cada uno de nosotros lleva dentro. A través de este candelabro, nos encontramos con una fuerza superior que nos recuerda nuestra conexión con la tierra de la que todos estamos hechos. 'Vulkan' sirve como una guía hacia una comprensión más profunda de nuestra existencia.",
      vulkanFullDesc4:
        "Como un artefacto viviente, testifica no solo nuestra conexión con la tierra, sino también nuestra capacidad para elevarnos por encima de lo ordinario. En su simplicidad reside el poder, recordándonos nuestra fuerza volcánica interna que espera ser liberada.",
      zirFullDesc1:
        "La lámpara 'Žir' representa una fusión de expresión natural y la belleza de la forma, inspirada en la bellota. Así como la bellota protege su semilla interna con su cáscara resistente, así también la carcasa de esta lámpara 'guarda' la luz interna, oculta y protegida dentro de su estructura. La bombilla, como la semilla de la bellota, trae luz y simboliza el comienzo del ciclo de vida.",
      zirFullDesc2:
        "El acabado interior crudo del candelabro enfatiza la autenticidad y la belleza cruda de la naturaleza, mientras que las irregularidades en el diseño añaden un carácter único al ambiente de iluminación. A través de su diseño simple pero expresivo, 'Žir' anima el espacio con su calidez y energía, creando una atmósfera que nos recuerda la armonía entre los seres humanos y su entorno.",
      zirFullDesc3:
        "Su esencia radica en recordarnos la conexión entre los seres humanos y la naturaleza, enfatizando la armonía y el equilibrio en esa relación. Al unir elementos de creación y fertilidad, el candelabro 'Žir' lleva consigo una simbología profunda.",
      puzlaFullDesc1:
        "Representa una obra que combina estética y funcionalidad de una manera única. Inspirado en el concepto de un rompecabezas, este candelabro es como la última pieza que encaja en el ambiente de cualquier habitación. La estructura del candelabro consta de dos partes, formadas como cúpulas e interconectadas como piezas de un rompecabezas. La parte superior, que forma un tercio de la parte inferior, crea armonía y equilibrio junto con ella. Siguiendo la regla de los tercios, logra atractivo estético y equilibrio compositivo.",
      puzlaFullDesc2:
        "Hecho de arcilla, aporta una dimensión adicional de naturalidad y autenticidad a la habitación. Cada detalle y textura de este candelabro reflejan la artesanía de la fabricación a mano y el carácter único de la arcilla como material. Con su simplicidad y complejidad al mismo tiempo, 'Puzla' se convierte en una parte indispensable de cada interior, añadiendo un toque único de elegancia y estilo.",
      mesecFullDesc1:
        "Inspirado en la forma y textura de la superficie misma de la Luna, con su forma elegante, crea una atmósfera mística en la habitación, rindiendo homenaje a uno de los cuerpos celestes más intrigantes. La textura del candelabro imita la vívida superficie de la Luna, creando una estética única de tonos oscuros y claros.",
      mesecFullDesc2:
        "'Mesec' representa una puerta hacia las profundidades inexploradas y los misterios que este cuerpo celeste misterioso sobre nosotros guarda. Con cada mirada a su superficie, sentimos como si estuviéramos sumergiéndonos en un mundo de misterio y secretos que aún están por desentrañar.",
      mesecFullDesc3:
        "El hombre siempre ha estado fascinado por la Luna, y la exploración de sus secretos ha sido parte de muchos esfuerzos científicos y filosóficos. A lo largo de los siglos, la Luna ha inspirado a artistas, poetas y científicos, incitándolos a explorar sus misterios y profundizar su comprensión de su papel en el cosmos. Este candelabro es un tributo a esos esfuerzos, recordándonos nuestra fascinación con este cuerpo celeste y nuestro deseo de descubrir más de sus secretos.",
      xFullDesc1:
        "La lámpara 'X' destaca por su apariencia, resaltando la sutil belleza del minimalismo, enfatizando la elegancia de la forma y la esencia artística. Con forma de cúpula alargada, esta lámpara ofrece simplicidad elaborada a partir de arcilla blanca, con una textura naturalmente irregular, que enfatiza aún más la artesanía y la singularidad. Arraigada en el concepto de minimalismo, donde el énfasis está en la naturaleza esencial de la forma y la belleza de los materiales, la lámpara 'X' representa una fusión de la artesanía tradicional con la comprensión estética moderna.",
      xFullDesc2:
        "Con su forma sutil, explora la armonía entre elementos naturales y tendencias estilísticas contemporáneas, creando una experiencia de iluminación única que cautiva con simplicidad y sofisticación.",
      xFullDesc3:
        "En línea con la filosofía de wabi-sabi, la lámpara 'X' aprecia la belleza en la simplicidad y la modestia, destacando irregularidades e imperfecciones como parte de su estética. Wabi-sabi nos enseña a apreciar la transitoriedad y los cambios que trae el tiempo. La lámpara 'X' refleja sutileza y elegancia con su diseño discreto, enfatizando la sofisticación a través de una expresión simple y discreta, resaltando la belleza que surge de la simplicidad.",
      miFullDesc1:
        "Diseñado como un símbolo de conectividad entre las personas, con colgantes entrelazados, esta creación aporta una interpretación visual única de los lazos que nos unen. El cable no es solo un elemento estético, sino que representa el poder invisible de la conexión que transmite energía de una persona a otra. 'Mi' es más que solo luces; ilustra cómo las conexiones humanas dan forma a nuestra energía y fuerza.",
      miFullDesc2:
        "Todos los candelabros son hechos a mano, especiales y únicos, al igual que las personas que representan. Su individualidad enfatiza la diversidad y la riqueza de la experiencia humana. Como cada colgante en la composición, las personas llevan su luz y energía únicas, enriqueciendo la comunidad.",
      miFullDesc3:
        "Así como la corriente eléctrica se transmite de un colgante a otro, así también se transmite la energía entre las personas, creando una red de interacciones. Esa energía, como la luz emitida por los candelabros, proviene de una fuente: una fuente de inspiración y fuerza omnipresente.",
      miFullDesc4:
        "No hay dos colgantes idénticos, así como no hay dos individuos idénticos. Su singularidad nos recuerda la riqueza de la diversidad en el mundo que nos rodea y la importancia de cada individuo en la creación de una comunidad única.",
      areYouDesigner:
        "¿Eres diseñador o arquitecto? Envíanos un mensaje para discutir los detalles de colaboración.",
      threeDModels: "Modelos 3D",
      download: "Descargar",
      preview: "Vista previa",
      aboutUsSubtitle:
        "Uniendo pasado y presente a través del arte y el diseño moderno.",
      aboutUs1: "Sinfonía Sutil",
      aboutUs2:
        "Nuestra colección de lámparas de araña representa una fusión de tradición, arte y modernidad, inspirada en la rica historia y los logros artísticos del pasado. En nuestras creaciones, nos esforzamos por fusionar el espíritu del pasado con tonos sutiles del diseño moderno. En nuestro proceso de diseño, buscamos volver a las raíces y la tradición a través del arte y el diseño moderno, donde cada lámpara de araña está hecha a mano con arcilla o cobre, dedicando especial atención a cada detalle.",
      aboutUs3: "Armonía del Pasado y el Presente",
      aboutUs4:
        "La inspiración para nuestro trabajo proviene de tiempos antiguos cuando las personas en el territorio de la actual Serbia, hace 5000 años, demostraban una creatividad excepcional en la expresión del arte y la estética. Aunque estas civilizaciones enfrentaban desafíos de supervivencia, las personas de la cultura de Vinča, que estaba entre las más avanzadas de ese período, encontraron formas de honrar la naturaleza y el mundo que los rodeaba a través de esculturas, artefactos y cerámicas. La civilización de Vinča destacaba especialmente por su cerámica avanzada, figurines antropomórficos y zoomórficos, y el conocimiento de tecnologías avanzadas de trabajo del metal, que testifican un alto nivel de cultura y expresión artística. A pesar de enfrentar los desafíos de la vida cotidiana, esta antigua civilización no olvidó la importancia del arte y la creatividad, utilizando materiales naturales e inspiración del entorno para expresar sus talentos artísticos.",
      aboutUs5:
        "El diseño de nuestras lámparas de araña se basa en la filosofía japonesa, específicamente en los siguientes conceptos:",
      aboutUs6: "Wabi-sabi",
      aboutUs7:
        "enfatiza la belleza en la simplicidad, la modestia y la impermanencia. Nos enseña a apreciar las irregularidades, imperfecciones e impermanencia en todo lo que nos rodea. Este concepto nos anima a encontrar belleza en materiales simples y naturales, apreciando el paso del tiempo. En nuestras lámparas de araña, encarnamos esta filosofía a través de formas hechas a mano, enfatizando la simplicidad y sutileza en el diseño, al mismo tiempo que valoramos las irregularidades y texturas naturales.",
      aboutUs8: "Minimalismo",
      aboutUs9:
        "es una filosofía que destaca la simplicidad esencial y la reducción a los elementos más básicos. A través de nuestras lámparas de araña, buscamos transmitir la esencia del minimalismo, utilizando líneas limpias y formas simples para lograr armonía entre funcionalidad y estética. De esta manera, se convierten en símbolos de simplicidad, elegancia y tranquilidad en el hogar moderno.",
      aboutUs10: "Arte a Través de las Edades",
      aboutUs11:
        "A través de nuestras lámparas de araña, transmitimos el espíritu y la belleza de épocas pasadas, al mismo tiempo que creamos obras de arte únicas que reflejan las tendencias y estéticas contemporáneas. Al hacerlo, unimos el pasado y el presente, creando armonía entre tradición, arte y modernidad.",
      name: "Nombre y Apellido",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar",
      close: "Cerrar",
      contact: "Contacto",
    },
    // Add translations for other languages here
  };
  // Function to translate text
  function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    // Update links with new language parameter
    const links = document.querySelectorAll("a:not(.menu-a)");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href) {
        const urlParams = new URLSearchParams(href.split("?")[1]);
        urlParams.set("lang", language);
        const newUrl = href.split("?")[0] + "?" + urlParams.toString();
        link.setAttribute("href", newUrl);
      }
    });
  }

  // Function to change language
  function changeLanguage(language) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("lang", language);
    const newUrl =
      window.location.pathname +
      "?" +
      urlParams.toString() +
      window.location.hash;
    history.pushState({}, "", newUrl);
    translatePage(language);

    // Update selected language and flag in the dropdown
    const selectedElement = document.querySelector(".select-selected");
    selectedElement.innerHTML = `<img src="images/${language}flag.png" alt="${language.toUpperCase()}"> ${language.toUpperCase()}`;
  }

  // Setting the default language
  let selectedLanguage = getParameterByName("lang") || "srb";
  const languageSelector = document.getElementById("language-selector");
  if (languageSelector) {
    languageSelector.querySelector(
      ".select-selected"
    ).innerHTML = `<img src="images/${selectedLanguage}flag.png" alt="${selectedLanguage.toUpperCase()}"> ${selectedLanguage.toUpperCase()}`;
    translatePage(selectedLanguage);

    // Changing language on selection
    languageSelector.addEventListener("click", function () {
      this.querySelector(".select-items").classList.toggle("select-hide");
    });

    const options = languageSelector.querySelectorAll(".select-items div");
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const lang = this.textContent.split(" ")[1]; // Extract language abbreviation
        selectedLanguage = lang.toLowerCase(); // Convert to lowercase
        changeLanguage(selectedLanguage); // Change language
      });
    });
  }
});
