const mockedTickets = [
  {
    price: 60903,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T12:05:00.000Z',
        stops: ['SHA'],
        duration: 1378,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-09T23:07:00.000Z',
        stops: [],
        duration: 1855,
      },
    ],
  },
  {
    price: 47773,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-19T21:25:00.000Z',
        stops: ['BKK', 'HKG'],
        duration: 1035,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-10T04:54:00.000Z',
        stops: ['SIN', 'SHA', 'IST'],
        duration: 1296,
      },
    ],
  },
  {
    price: 98153,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T06:40:00.000Z',
        stops: [],
        duration: 1627,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-09T21:08:00.000Z',
        stops: ['HKG'],
        duration: 1015,
      },
    ],
  },
  {
    price: 74754,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T14:13:00.000Z',
        stops: ['AUH', 'SHA'],
        duration: 793,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-10T11:35:00.000Z',
        stops: ['KUL'],
        duration: 1293,
      },
    ],
  },
  {
    price: 89385,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-19T22:47:00.000Z',
        stops: ['KUL', 'BKK', 'SIN'],
        duration: 769,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-10T01:55:00.000Z',
        stops: ['IST', 'KUL', 'BKK'],
        duration: 1864,
      },
    ],
  },
  {
    price: 95173,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T07:18:00.000Z',
        stops: ['IST'],
        duration: 1542,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-09T21:12:00.000Z',
        stops: ['IST', 'SHA'],
        duration: 1983,
      },
    ],
  },
  {
    price: 94259,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T09:01:00.000Z',
        stops: [],
        duration: 1225,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-10T17:13:00.000Z',
        stops: ['BKK', 'AUH', 'SIN'],
        duration: 1194,
      },
    ],
  },
  {
    price: 37761,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T06:24:00.000Z',
        stops: ['DXB', 'HKG', 'AUH'],
        duration: 1394,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-09T21:19:00.000Z',
        stops: [],
        duration: 1917,
      },
    ],
  },
  {
    price: 34054,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T13:18:00.000Z',
        stops: [],
        duration: 1498,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-09T23:09:00.000Z',
        stops: ['KUL'],
        duration: 733,
      },
    ],
  },
  {
    price: 29241,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-20T17:10:00.000Z',
        stops: ['DXB', 'HKG'],
        duration: 1587,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-10T08:23:00.000Z',
        stops: ['DXB', 'SIN'],
        duration: 1237,
      },
    ],
  },
];

const responseUnfinished = {
  tickets: mockedTickets.slice(0, 5),
  stop: false,
};

const responseFinished = {
  tickets: mockedTickets.slice(5),
  stop: false,
};

export { mockedTickets, responseUnfinished, responseFinished };
