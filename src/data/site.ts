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
  { href: '/#sa-funkar-det', label: 'Så funkar det' },
  { href: '/#trygghet', label: 'Trygghet' },
  { href: '/#om-oss', label: 'Om oss' },
];

export type PumpIcon = 'berg' | 'luftvatten' | 'luftluft' | 'franluft';

export const heatPumps: { icon: PumpIcon; title: string; text: string; fit: string; arende: string }[] = [
  {
    icon: 'berg',
    title: 'Bergvärme & jordvärme',
    text: 'Hämtar lagrad solenergi ur berget eller marken. Jämn, effektiv värme och varmvatten året runt – även de kallaste vinterdagarna.',
    fit: 'Hus med vattenburen värme',
    arende: 'Bergvärme / jordvärme',
  },
  {
    icon: 'luftvatten',
    title: 'Luft/vatten',
    text: 'Tar värme ur uteluften och leder den till element, golvvärme och varmvatten. Ett bra val när borrning inte är möjlig.',
    fit: 'Ersätter olja, el- eller vedpanna',
    arende: 'Luft/vatten',
  },
  {
    icon: 'luftluft',
    title: 'Luft/luft',
    text: 'Ett smidigt och prisvärt sätt att sänka elkostnaden, eller ett komplement till annan uppvärmning. Kan även kyla sommartid.',
    fit: 'Hus med direktverkande el',
    arende: 'Luft/luft',
  },
  {
    icon: 'franluft',
    title: 'Frånluft',
    text: 'Återvinner värmen i husets ventilationsluft och använder den till värme och varmvatten. Kompakt och tyst.',
    fit: 'Hus med mekanisk frånluft',
    arende: 'Frånluft',
  },
];

export const steps = [
  { title: 'Kostnadsfri rådgivning', text: 'Vi pratar om huset, uppvärmningen i dag och vad du vill uppnå.' },
  { title: 'Besiktning & energikalkyl', text: 'Vi kommer hem till dig, gör en behovsanalys och räknar på besparingen.' },
  { title: 'Installation', text: 'Vi installerar, driftsätter och justerar in – och visar hur allt fungerar.' },
  { title: 'Service hela livstiden', text: 'Vi finns kvar för service, felsökning och underhåll så länge du har pumpen.' },
];

export const guarantees = [
  { num: '3 år', title: 'Fabriksgaranti', text: 'Ingår på alla nya IVT-värmepumpar.' },
  { num: '5–6 år', title: 'Total trygghet', text: 'En kompletterande försäkring förlänger tryggheten automatiskt, beroende på modell.' },
  { num: '4 år', title: 'Elektronikförsäkring', text: 'På styrkort och display för bergvärme, luft/vatten och frånluft.' },
  { num: '20 år', title: 'IVT Plusförsäkring', text: 'Tryggheten kan sedan förlängas i upp till 20 år.' },
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
