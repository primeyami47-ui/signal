import type { Content } from './fr'

const en: Content = {
  company: {
    name: 'Bitume',
    tagline: 'Driving school',
    email: 'hello@bitume.example',
    address: ['Agdal district', 'Rabat — Morocco'],
    hours: 'Monday to Saturday, 7:30 am – 8 pm',
  },

  ui: {
    skip: 'Skip to content',
    home: 'home',
    navLabel: 'Main navigation',
    menuLabel: 'Menu',
    menuOpen: 'Open the menu',
    menuClose: 'Close the menu',
    langLabel: 'Language',
    cta: 'Try the theory test',
    ctaShort: 'Theory test',
    tickerCity: 'BITUME/RABAT',
    tickerOpen: 'Driving school open',
    tickerList: 'Licences B · A · A1 · C · CE · D · Highway code',
  },

  nav: [
    { to: '#permis', label: 'Licences', code: 'A1' },
    { to: '#parcours', label: 'The road', code: 'B2' },
    { to: '#avis', label: 'Reviews', code: 'C3' },
    { to: '#contact', label: 'Contact', code: 'D4' },
  ],

  board: {
    label: 'Board of the licences Bitume prepares you for',
    title: 'Exam board',
    head: ['Licence', 'Vehicle', 'Status'],
    foot: ['Track 01 · Rabat', 'Next departure: you'],
    exam: 'EXAM',
    pass: 'PASSED',
    rows: [
      ['B LICENCE', 'CAR'], ['A LICENCE', 'MOTORBIKE'], ['A1 LICENCE', 'SCOOTER 125'], ['THEORY', 'HIGHWAY CODE'],
      ['C LICENCE', 'HEAVY GOODS'], ['BE LICENCE', 'TRAILER'], ['D LICENCE', 'COACH'], ['CE LICENCE', 'SEMI-TRAILER'],
    ],
  },

  hero: {
    proof: 'pass rate at the first attempt',
    line1: 'Your licence,',
    line2: 'no detours.',
    lead: 'Theory, driving, exam: Bitume takes you from your very first lesson to your licence, by car, by motorbike or behind the wheel of a truck.',
    alt: 'Our licences',
    note: '1 question · 10 seconds · no sign-up',
  },

  zone: ['Driving zone', 'Licence B', 'Licence A', 'Licence C', 'Licence D', 'Highway code', 'Back on the road'],

  partnersRef: 'Ref.',
  partnersTitle: 'They pay for their teams’ licences',
  partners: ['Trans Atlas', 'Coursier Express', 'Bus Océan', 'Ferme du Gharb', 'Chantiers Bouregreg', 'Taxi Agdal'],

  licences: {
    eyebrow: 'A1 · Our licences',
    title: ['Five courses.', 'One road.'],
    unsure: 'Not sure where you stand on the theory?',
    unsureLink: 'Take the test',
    book: 'Book a lesson',
    cat: 'Cat.',
    bonus: 'Bonus',
    list: [
      { id: 'b', code: 'B', title: 'Car licence', short: 'Manual or automatic, twenty hours of driving to begin with.' },
      { id: 'a', code: 'A', title: 'Motorbike licence', short: 'Off-road course, traffic and gear on loan: from 125 cc to big bikes.' },
      { id: 'c', code: 'C', title: 'Heavy goods', short: 'The licence for a career as a driver, often paid for by employers.' },
      { id: 'code', code: 'ETG', title: 'Highway code', short: 'In class or on the app, with unlimited mock exams.' },
      { id: 'plus', code: '+', title: 'Back on the road', short: 'You have your licence but lost the habit: a few hours to get your confidence back.' },
    ],
  },

  route: {
    eyebrow: 'B2 · The road',
    title: ['Four steps.', 'No detours.'],
    lead: 'The same journey for every licence, with what is included at each sign.',
    included: 'Included',
    duration: 'Time',
    end: 'Passed',
    phases: [
      { n: '01', label: 'Theory', weeks: '3 to 6 weeks', title: 'The highway code, without cramming',
        body: 'Short sessions in class, the app to revise on the bus, and mock exams until the answers become reflexes.',
        deliverable: 'App access and unlimited mock exams' },
      { n: '02', label: 'Driving', weeks: 'about 20 hours', title: 'Behind the wheel in week one',
        body: 'Car parks, roundabouts, motorway, the city centre at rush hour: one instructor, a dual-control car and a logbook that tracks your progress.',
        deliverable: 'Shared progress logbook' },
      { n: '03', label: 'Mock test', weeks: '1 session', title: 'The dress rehearsal',
        body: 'Another instructor plays the examiner, on the real test route. You know exactly what to expect, and what is left to work on.',
        deliverable: 'Written review and final targeted hours' },
      { n: '04', label: 'Exam', weeks: 'the big day', title: 'We stay with you to the end',
        body: 'Your instructor drives you to the test centre and stays with you. If it is not this time, your second attempt is prepared with no admin fee.',
        deliverable: 'Support at the test centre' },
    ],
  },

  test: {
    tag: 'Check · 10 seconds',
    title: ['Ready for', 'the theory?'],
    lead: 'A real exam question, marked on the spot. The other forty are in class or on the app.',
    step: 'Question 1 / 40',
    question: 'Steady amber light, you are approaching the junction. You must:',
    choices: [
      { id: 'a', label: 'Speed up to get through' },
      { id: 'b', label: 'Stop, unless it would be dangerous' },
      { id: 'c', label: 'Sound the horn and go' },
    ],
    answer: 'b',
    right: 'Correct: an amber light means stop, unless braking would be dangerous.',
    wrong: 'Wrong: an amber light means stop, unless braking would be dangerous.',
  },

  reviews: {
    eyebrow: 'C3 · Reviews',
    title: ['They passed', 'their test.'],
    figures: [
      { value: 87, unit: '%', label: 'pass rate at the first attempt' },
      { value: 2300, unit: '', label: 'licences since we opened' },
      { value: 14, unit: '', label: 'state-certified instructors' },
      { value: 9, unit: '', label: 'dual-control cars and motorbikes' },
    ],
    list: [
      { quote: 'I had failed twice elsewhere. Here, the mock test on the real route changed everything: on the day, nothing caught me out.',
        name: 'Imane', role: 'Licence B · passed on the third attempt' },
      { quote: 'My boss paid for my C licence. Six weeks later I was driving my own truck.',
        name: 'Youssef', role: 'HGV driver' },
      { quote: 'At 52 I hadn’t driven for twenty years. Four hours of refresher lessons, and I’m back on the motorway on my own.',
        name: 'Latifa', role: 'Back on the road' },
    ],
  },

  close: {
    who: 'B',
    title: 'First lesson free.',
    lead: 'Write to us: an instructor replies within 24 hours and books your first hour behind the wheel.',
    cta: 'Send a message',
  },

  footer: {
    line1: 'Your licence,',
    line2: 'no detours.',
    about: 'Driving school in Rabat: highway code, car licence, motorbike, heavy goods and refresher lessons.',
    colLicences: 'A1 · Licences',
    colSchool: 'B2 · The school',
    school: [
      { to: '#parcours', label: 'The road' },
      { to: '#avis', label: 'Student reviews' },
      { to: '#test', label: 'Theory test' },
      { to: '#contact', label: 'Write to us' },
    ],
    colContact: 'D4 · Contact',
    demo: 'Fictional brand · demo showcase site',
    giant: 'BITUME',
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'No entry: this page doesn’t exist.',
    lead: 'It may have changed address.',
    cta: 'Back to the home page',
  },

  error: {
    title: 'Something went wrong',
    lead: 'Reload the page. If the problem persists, write to us at',
    reload: 'Reload the page',
  },

  seo: {
    home: {
      title: 'Driving school in Rabat: theory, car, motorbike and HGV',
      description: 'Highway code, car licence, motorbike and heavy goods in Rabat. Mock tests on the real route, your instructor with you on the day, 87% first-time pass rate.',
    },
    notFound: { title: 'Page not found', description: 'This page doesn’t exist or has moved.' },
  },
}

export default en
