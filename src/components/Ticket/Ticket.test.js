import Ticket from './Ticket';
import {
  displayPrice,
  displayTime,
  displayIATAcodes,
  displayDuration,
  displayLayoversLabel,
  displayLayovers,
  constructImgUrl,
} from '../../helpers';
import { carrierLogoURL } from '../../constants';

const defaultProps = {
  ticket: {
    price: 76070,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-04-17T14:35:00.000Z',
        stops: ['KUL'],
        duration: 729,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2020-05-07T11:34:00.000Z',
        stops: [],
        duration: 642,
      },
    ],
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Ticket {...setupProps} />);
};

describe('<Ticket>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render props.ticket.price', () => {
    const expectedOutput = displayPrice(defaultProps.ticket.price, 'Р');
    expect(wrapper.contains(expectedOutput)).toBe(true);
  });

  it('should render <img> with src determined by props.ticket.carrier', () => {
    const expectedOutput = constructImgUrl(
      carrierLogoURL,
      defaultProps.ticket.carrier,
    );
    const carrierLogo = wrapper.findWhere((n) => n.hasClass('CarrierLogo'));
    expect(carrierLogo.prop('src')).toBe(expectedOutput);
  });

  describe('for the first segment', () => {
    const {
      origin,
      destination,
      date,
      duration,
      stops,
    } = defaultProps.ticket.segments[0];

    it('should render IATA origin and destination codes', () => {
      const expectedOutput = displayIATAcodes(origin, destination);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render time info', () => {
      const expectedOutput = displayTime(date, duration);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render duration', () => {
      const expectedOutput = displayDuration(duration);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render layovers label', () => {
      const expectedOutput = displayLayoversLabel(stops.length);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render layovers (if any)', () => {
      const expectedOutput = displayLayovers(stops);
      expect(wrapper.contains(expectedOutput)).toBe(Boolean(expectedOutput));
    });
  });

  describe('for the second segment', () => {
    const {
      origin,
      destination,
      date,
      duration,
      stops,
    } = defaultProps.ticket.segments[1];

    it('should render IATA origin and destination codes', () => {
      const expectedOutput = displayIATAcodes(origin, destination);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render time info', () => {
      const expectedOutput = displayTime(date, duration);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render duration', () => {
      const expectedOutput = displayDuration(duration);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render layovers label', () => {
      const expectedOutput = displayLayoversLabel(stops.length);
      expect(wrapper.contains(expectedOutput)).toBe(true);
    });

    it('should render layovers (if any)', () => {
      const expectedOutput = displayLayovers(stops);
      expect(wrapper.contains(expectedOutput)).toBe(Boolean(expectedOutput));
    });
  });
});
