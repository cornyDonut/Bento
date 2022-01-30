// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'cornyDonut',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '327ea8bfc466d4fd42a9e720c737b17f',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherLatitude: '48.884048',
  weatherLongitude: '2.322434',
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '48.884048',
  defaultLongitude: '2.322434',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com/',
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '4',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '5',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '6',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'code',
  secondListIcon: 'briefcase',
  thirdListIcon: 'dollar-sign',

  // Links
  lists: {
    firstList: [
      {
        name: 'OpenClassrooms',
        link: 'https://openclassrooms.com/',
      },
      {
        name: 'Project Euler',
        link: 'https://projecteuler.net/',
      },
    ],
    secondList: [
      {
        name: 'Ent',
        link: 'https://ent.iledefrance.fr/',
      },
      {
        name: 'Parcoursup',
        link: 'https://www.parcoursup.fr/',
      },
      {
        name: 'PayPal',
        link: 'https://www.paypal.com/myaccount/summary/',
      },
      {
        name: 'LocalMonero',
        link: 'https://localmonero.co/',
      },
    ],
    thirdList: [
      {
        name: 'PayPal',
        link: 'https://www.paypal.com/signin/',
      },
      {
        name: 'LocalMonero',
        link: 'https://localmonero.co/',
      },
    ],
  },
};
