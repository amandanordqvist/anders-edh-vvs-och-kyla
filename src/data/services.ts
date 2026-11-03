// Undersidor per tjänst – en sida per sökord ("bergvärme Hudiksvall" osv).
import type { ImageMetadata } from 'astro';
import bergvarme from '../assets/img/installation-bergvarme.jpg';
import luftvatten from '../assets/img/installation-luft-vatten.jpg';
import installator from '../assets/img/ivt-installator.jpg';
import anders from '../assets/img/anders-edh-ivt.jpg';
import type { PumpIcon } from './site';

export interface ServicePage {
  slug: string;
  icon: PumpIcon | 'wrench';
  name: string; // kort namn i menyer och kort
  metaTitle: string;
  description: string;
  h1: string;
  lede: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePos?: string;
  sections: { h2: string; text: string[] }[];
  benefits: string[];
  fit: string[];
  faq: { q: string; a: string }[];
  arende: string;
}

export const services: ServicePage[] = [
  {
    slug: 'bergvarme-hudiksvall',
    icon: 'berg',
    name: 'Bergvärme & jordvärme',
    metaTitle: 'Bergvärme i Hudiksvall – installation av IVT bergvärmepump',
    description:
      'Bergvärme och jordvärme i Hudiksvall. Vi installerar IVT bergvärmepumpar som totalentreprenad – från kostnadsfri besiktning och energikalkyl till service. Ring 070-207 32 55.',
    h1: 'Bergvärme i Hudiksvall',
    lede: 'En bergvärmepump hämtar solenergi som lagrats i berggrunden och ger jämn, effektiv värme och varmvatten året runt – även de kallaste vinterdagarna i Hälsingland.',
    image: bergvarme,
    imageAlt: 'Installation av IVT bergvärmepump med tankar i en källare i Hudiksvall',
    imagePos: 'center 55%',
    sections: [
      {
        h2: 'Så fungerar bergvärme',
        text: [
          'Ett borrhål – en energibrunn – borras ner i berget. I hålet ligger en kollektorslang med köldbärarvätska som tar upp värmen ur berget. Värmepumpen höjer temperaturen och för den vidare till husets element, golvvärme och varmvatten.',
          'Eftersom temperaturen i berget är nästan densamma hela året ger bergvärme en stabil och hög verkningsgrad, oavsett hur kallt det är ute.',
        ],
      },
      {
        h2: 'Jordvärme – när tomten är stor',
        text: [
          'Vid jordvärme grävs kollektorslangen ner i marken på tomten i stället för att borras ner i berget. Det kräver en större tomt men ingen borrning. Vid besiktningen går vi igenom vilket alternativ som passar din fastighet.',
        ],
      },
      {
        h2: 'Bergvärme med Anders Edh VVS & Kyla',
        text: [
          'Vi är auktoriserad återförsäljare och installatör av IVT Värmepumpar och tar hand om hela projektet – behovsanalys, energikalkyl, installation, driftsättning och service under värmepumpens livstid. Vi går också igenom vad som behövs inför borrningen, som anmälan till kommunen.',
        ],
      },
    ],
    benefits: [
      'Stabil värme och varmvatten året runt',
      'Hög verkningsgrad även vid sträng kyla',
      'Lång livslängd och låg driftkostnad',
      '4 års elektronikförsäkring på styrkort och display',
    ],
    fit: ['Du har vattenburen värme (element eller golvvärme)', 'Du vill ersätta olja, el- eller vedpanna', 'Du vill ha lägsta möjliga driftkostnad på sikt'],
    faq: [
      {
        q: 'Behöver jag tillstånd för bergvärme?',
        a: 'En bergvärmeanläggning kräver normalt en anmälan eller ansökan till kommunen innan borrningen. Vi går igenom vad som gäller för din fastighet vid besiktningen.',
      },
      {
        q: 'Fungerar bergvärme i Hudiksvalls klimat?',
        a: 'Ja. Värmen hämtas från berggrunden där temperaturen är jämn hela året, så bergvärme fungerar bra även under långa och kalla vintrar.',
      },
    ],
    arende: 'Bergvärme / jordvärme',
  },
  {
    slug: 'luft-vatten-varmepump-hudiksvall',
    icon: 'luftvatten',
    name: 'Luft/vatten',
    metaTitle: 'Luft/vattenvärmepump i Hudiksvall – IVT installation och service',
    description:
      'Luft/vattenvärmepump i Hudiksvall – värme och varmvatten utan borrning. Auktoriserad IVT-installatör med kostnadsfri rådgivning och energikalkyl. Ring 070-207 32 55.',
    h1: 'Luft/vattenvärmepump i Hudiksvall',
    lede: 'En luft/vattenvärmepump tar värme ur uteluften och för den vidare till husets vattenburna system och varmvatten. Ett bra val när borrning inte är möjlig eller önskvärd.',
    image: luftvatten,
    imageAlt: 'IVT luft/vattenvärmepump med varmvattenberedare installerad i ett grovkök i Hudiksvall',
    imagePos: 'center 62%',
    sections: [
      {
        h2: 'Så fungerar luft/vatten',
        text: [
          'En utedel tar upp energin i uteluften, även när det är kallt ute. Inomhusdelen höjer temperaturen och värmer vattnet i element, golvvärme och varmvattenberedare.',
          'De kallaste dagarna kompletteras värmepumpen av en inbyggd elpatron, så att huset alltid håller rätt temperatur.',
        ],
      },
      {
        h2: 'Ett alternativ utan borrning',
        text: [
          'Luft/vatten kräver ingen borrning eller grävning och passar därför många villor och fritidshus där bergvärme inte är möjlig. Den är ett vanligt val för att ersätta olje-, el- eller vedpanna.',
        ],
      },
      {
        h2: 'Installation med Anders Edh VVS & Kyla',
        text: [
          'Vi besöker huset, väljer rätt modell och placering för ute- och innedel, och installerar hela anläggningen. Efteråt finns vi kvar för service under värmepumpens livstid.',
        ],
      },
    ],
    benefits: ['Ingen borrning eller markarbete', 'Värme och varmvatten i samma system', 'Lägre installationskostnad än bergvärme', '4 års elektronikförsäkring på styrkort och display'],
    fit: ['Du har vattenburen värme', 'Borrning är inte möjlig på tomten', 'Du vill ersätta olja, el- eller vedpanna'],
    faq: [
      {
        q: 'Fungerar en luft/vattenvärmepump när det är minusgrader?',
        a: 'Ja, den tar värme ur luften även vid minusgrader. Verkningsgraden sjunker när det är mycket kallt, och då hjälper den inbyggda elpatronen till.',
      },
      {
        q: 'Var placeras utedelen?',
        a: 'Utedelen placeras utomhus, oftast vid husets fasad. Vid besiktningen hittar vi en placering som fungerar bra både tekniskt och för dig och grannarna.',
      },
    ],
    arende: 'Luft/vatten',
  },
  {
    slug: 'luft-luft-varmepump-hudiksvall',
    icon: 'luftluft',
    name: 'Luft/luft',
    metaTitle: 'Luft/luftvärmepump i Hudiksvall – sänk elkostnaden med IVT',
    description:
      'Luft/luftvärmepump i Hudiksvall – ett prisvärt sätt att sänka elkostnaden i hus med direktverkande el. Värme på vintern, svalka på sommaren. Ring 070-207 32 55.',
    h1: 'Luft/luftvärmepump i Hudiksvall',
    lede: 'En luft/luftvärmepump värmer luften inomhus med energi från uteluften. Det är ett smidigt och prisvärt sätt att sänka elkostnaden – och den kan ge svalka på sommaren.',
    image: installator,
    imageAlt: 'Certifierad IVT-installatör på plats i Hudiksvall',
    sections: [
      {
        h2: 'Så fungerar luft/luft',
        text: [
          'En utedel och en innedel arbetar tillsammans. Innedelen blåser ut varm luft i rummet och värmen sprids bäst i hus med öppen planlösning.',
          'En luft/luftvärmepump värmer inte vattnet i kranen eller elementen, så den är oftast ett komplement till den uppvärmning du redan har.',
        ],
      },
      {
        h2: 'Snabb installation, låg investering',
        text: [
          'Installationen är enkel och går fort jämfört med andra värmepumpar. För hus med direktverkande el är luft/luft ofta det snabbaste sättet att få ner elräkningen.',
        ],
      },
    ],
    benefits: ['Lägre elkostnad i hus med direktverkande el', 'Snabb installation', 'Låg investeringskostnad', 'Kan även kyla sommartid'],
    fit: ['Du har direktverkande el eller luftburen värme', 'Huset har öppen planlösning', 'Du vill komplettera befintlig uppvärmning'],
    faq: [
      {
        q: 'Ger en luft/luftvärmepump varmvatten?',
        a: 'Nej. En luft/luftvärmepump värmer bara luften inomhus. Vill du även värma vatten passar luft/vatten, bergvärme eller frånluft bättre.',
      },
      {
        q: 'Kan den kyla på sommaren?',
        a: 'Ja, de flesta luft/luftvärmepumpar kan köras baklänges och ge svalka när det är varmt.',
      },
    ],
    arende: 'Luft/luft',
  },
  {
    slug: 'franluftsvarmepump-hudiksvall',
    icon: 'franluft',
    name: 'Frånluft',
    metaTitle: 'Frånluftsvärmepump i Hudiksvall – IVT frånluftsvärmepump',
    description:
      'Frånluftsvärmepump i Hudiksvall. Återvinn värmen i ventilationsluften till värme och varmvatten. Vi installerar och servar IVT frånluftsvärmepumpar. Ring 070-207 32 55.',
    h1: 'Frånluftsvärmepump i Hudiksvall',
    lede: 'En frånluftsvärmepump återvinner värmen i husets ventilationsluft innan den lämnar huset och använder den till värme och varmvatten.',
    image: luftvatten,
    imageAlt: 'Kompakt IVT-värmepump installerad i ett grovkök',
    imagePos: 'center 62%',
    sections: [
      {
        h2: 'Så fungerar frånluft',
        text: [
          'I hus med mekanisk frånluftsventilation sugs varm, använd luft ut från badrum och kök. Frånluftsvärmepumpen tar vara på värmen i den luften och för över den till husets element, golvvärme och varmvatten.',
          'Den sköter på så sätt både ventilation, uppvärmning och varmvatten i en och samma kompakta enhet.',
        ],
      },
      {
        h2: 'Byte av gammal frånluftsvärmepump',
        text: [
          'Många hus byggda med frånluftsventilation har en äldre frånluftsvärmepump. Vi hjälper dig att se över om det är dags att byta, och vilken IVT-modell som passar huset.',
        ],
      },
    ],
    benefits: ['Tar tillvara energi som annars går förlorad', 'Ventilation, värme och varmvatten i ett', 'Kompakt – passar i tvättstuga eller klädkammare', '4 års elektronikförsäkring på styrkort och display'],
    fit: ['Huset har mekanisk frånluftsventilation', 'Du har vattenburen värme', 'Du vill byta en äldre frånluftsvärmepump'],
    faq: [
      {
        q: 'Passar frånluftsvärmepump i mitt hus?',
        a: 'Den kräver mekanisk frånluftsventilation, det vill säga att luften sugs ut med en fläkt. Vid besiktningen ser vi vad som finns i huset i dag.',
      },
    ],
    arende: 'Frånluft',
  },
  {
    slug: 'service-varmepump-hudiksvall',
    icon: 'wrench',
    name: 'Service',
    metaTitle: 'Service av värmepump i Hudiksvall – felsökning och underhåll',
    description:
      'Service och felsökning av IVT-värmepumpar i Hudiksvall med omnejd. Lokal installatör med 38 års erfarenhet. Ring 070-207 32 55.',
    h1: 'Service av värmepump i Hudiksvall',
    lede: 'Regelbunden service håller värmepumpen effektiv och förlänger livslängden. Vi servar och felsöker IVT-värmepumpar i Hudiksvall med omnejd – under hela värmepumpens livstid.',
    image: anders,
    imageAlt: 'Anders Edh VVS & Kyla bland IVT-värmepumpar',
    imagePos: 'center 30%',
    sections: [
      {
        h2: 'Service och underhåll',
        text: [
          'Vid service går vi igenom värmepumpen, kontrollerar tryck, filter och inställningar och ser till att den arbetar så effektivt som möjligt.',
        ],
      },
      {
        h2: 'Felsökning',
        text: [
          'Larmar värmepumpen, eller blir det inte varmt som det ska? Ring oss så hjälper vi dig att hitta felet. Som certifierad IVT-installatör känner vi tekniken väl.',
        ],
      },
      {
        h2: 'Även VVS- och rörarbeten',
        text: ['Vi utför alla typer av VVS- och rörarbeten – installationer, reparationer och servicejobb.'],
      },
    ],
    benefits: ['Lokal service i Hudiksvall med omnejd', 'Certifierad IVT-installatör', '38 års erfarenhet av VVS', 'Hjälp under hela värmepumpens livstid'],
    fit: ['Din värmepump larmar eller värmer dåligt', 'Det är dags för regelbunden service', 'Du behöver hjälp med VVS eller rör'],
    faq: [
      {
        q: 'Hur ofta behöver en värmepump service?',
        a: 'Det beror på modell och användning. Många delar kan du sköta själv, som att rengöra filter. Vi berättar vad som gäller för din värmepump.',
      },
    ],
    arende: 'Service eller felsökning',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
