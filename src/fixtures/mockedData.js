const mockedTickets = [
  {
    price: 57394,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T00:08:00.000Z',
        stops: [],
        duration: 1489,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-26T21:50:00.000Z',
        stops: ['IST', 'SHA', 'SIN'],
        duration: 807,
      },
    ],
  },
  {
    price: 85430,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T07:54:00.000Z',
        stops: ['DXB', 'KUL'],
        duration: 1356,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T07:35:00.000Z',
        stops: [],
        duration: 1492,
      },
    ],
  },
  {
    price: 86090,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T16:11:00.000Z',
        stops: ['KUL'],
        duration: 1579,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T14:35:00.000Z',
        stops: ['HKG', 'IST', 'SIN'],
        duration: 1732,
      },
    ],
  },
  {
    price: 51976,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T03:54:00.000Z',
        stops: ['HKG', 'SHA', 'AUH'],
        duration: 1017,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T09:18:00.000Z',
        stops: ['SIN'],
        duration: 905,
      },
    ],
  },
  {
    price: 86071,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T00:21:00.000Z',
        stops: ['IST', 'KUL', 'BKK'],
        duration: 1498,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T00:42:00.000Z',
        stops: [],
        duration: 1267,
      },
    ],
  },
  {
    price: 71215,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T14:05:00.000Z',
        stops: ['AUH', 'IST', 'SIN'],
        duration: 1345,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T05:43:00.000Z',
        stops: [],
        duration: 1775,
      },
    ],
  },
  {
    price: 73779,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T03:53:00.000Z',
        stops: ['HKG', 'BKK', 'SIN'],
        duration: 911,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T17:23:00.000Z',
        stops: ['AUH', 'DXB', 'SIN'],
        duration: 734,
      },
    ],
  },
  {
    price: 44731,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T15:54:00.000Z',
        stops: ['SHA', 'KUL', 'IST'],
        duration: 1057,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T13:08:00.000Z',
        stops: ['HKG', 'DXB'],
        duration: 939,
      },
    ],
  },
  {
    price: 18473,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T00:18:00.000Z',
        stops: ['SHA', 'HKG'],
        duration: 1890,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T12:32:00.000Z',
        stops: ['IST'],
        duration: 1428,
      },
    ],
  },
  {
    price: 99283,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T00:52:00.000Z',
        stops: [],
        duration: 938,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-27T10:03:00.000Z',
        stops: ['AUH', 'IST', 'KUL'],
        duration: 1284,
      },
    ],
  },
];

export { mockedTickets };
