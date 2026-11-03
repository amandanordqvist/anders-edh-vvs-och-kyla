// All företagsinformation samlad på ett ställe – ändra här så uppdateras hela sidan.

export const company = {
  name: 'Anders Edh VVS & Kyla AB',
  shortName: 'Anders Edh',
  phone: '070-207 32 55',
  phoneHref: 'tel:+46702073255',
  phoneE164: '+46702073255',
  // TODO: Ange företagets riktiga e-postadress innan sidan publiceras.
  email: 'info@example.se',
  street: 'Lars Hamréns väg 4',
  postalCode: '824 34',
  city: 'Hudiksvall',
  founded: 1988,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Lars+Hamr%C3%A9ns+v%C3%A4g+4%2C+824+34+Hudiksvall',
} as const;

export const yearsInBusiness = new Date().getFullYear() - company.founded;

export const nav = [
  { href: '/#varmepumpar', label: 'Värmepumpar' },
  { href: '/#tjanster', label: 'Tjänster' },
  { href: '/#trygghet', label: 'Trygghet' },
  { href: '/#om-oss', label: 'Om oss' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export type HeatPumpIcon = 'berg' | 'luftvatten' | 'luftluft' | 'franluft';

export const heatPumps: {
  icon: HeatPumpIcon;
  title: string;
  text: string;
  points: string[];
}[] = [
  {
    icon: 'berg',
    title: 'Bergvärme & jordvärme',
    text: 'Hämtar solenergi som lagrats i berggrunden eller marken. Ger jämn och mycket effektiv värme och varmvatten året runt – även de kallaste vinterdagarna i Hälsingland.',
    points: ['Hög och stabil verkningsgrad', 'Lång livslängd, låg driftkostnad', 'För vattenburna system'],
  },
  {
    icon: 'luftvatten',
    title: 'Luft/vatten',
    text: 'Tar värme ur uteluften och för den vidare till husets vattenburna element eller golvvärme samt varmvattnet. Ett bra alternativ när borrning inte är möjlig.',
    points: ['Ingen borrning eller markarbete', 'Ersätter olja, el- eller vedpanna', 'Värme och varmvatten'],
  },
  {
    icon: 'luftluft',
    title: 'Luft/luft',
    text: 'Ett smidigt och prisvärt sätt att sänka kostnaden i hus med direktverkande el eller som komplement till annan uppvärmning. Kan även ge svalka sommartid.',
    points: ['Snabb installation', 'Värme på vintern, kyla på sommaren', 'Låg investeringskostnad'],
  },
  {
    icon: 'franluft',
    title: 'Frånluft',
    text: 'Återvinner energin i husets varma ventilationsluft innan den lämnar huset och använder den till värme och varmvatten. Perfekt för hus med mekanisk frånluftsventilation.',
    points: [
      'Tar tillvara energi som annars går förlorad',
      'Ventilation, värme och varmvatten i ett',
      'Kompakt – passar i tvättstuga eller klädkammare',
    ],
  },
];

export const steps = [
  { title: 'Kostnadsfri rådgivning', text: 'Vi lyssnar på dina behov och svarar på frågor om vilken typ av värmepump som passar.' },
  { title: 'Besiktning & energikalkyl', text: 'Vi besöker fastigheten, gör en behovsanalys och räknar på vad du kan spara.' },
  { title: 'Installation', text: 'Vi installerar, driftsätter och justerar in anläggningen – och visar hur den fungerar.' },
  { title: 'Service hela livstiden', text: 'Vi finns kvar för service, felsökning och underhåll så länge du har din värmepump.' },
];

export const guarantees = [
  { num: '3', title: 'Fabriksgaranti', text: 'Alla nya IVT-värmepumpar levereras med 3 års fabriksgaranti.' },
  {
    num: '5–6',
    title: 'Total trygghet',
    text: 'En kompletterande försäkring förlänger automatiskt tryggheten – totalt 5 eller 6 år beroende på modell.',
  },
  { num: '4', title: 'Elektronikförsäkring', text: 'På styrkort och display för bergvärme, luft/vatten och frånluft.' },
  { num: '20', title: 'IVT Plusförsäkring', text: 'Tryggheten kan sedan förlängas i upp till 20 år.', accent: true },
];

export const inquiryTypes = [
  'Ny värmepump – rådgivning & offert',
  'Bergvärme / jordvärme',
  'Luft/vatten',
  'Luft/luft',
  'Frånluft',
  'Service eller felsökning',
  'Övrigt VVS-arbete',
];
