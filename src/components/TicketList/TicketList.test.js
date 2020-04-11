import TicketList from './TicketList';
import { mockedTickets } from '../../fixtures/mockedData';

const defaultProps = {
  ticketsAmount: 10,
  filteredTickets: [],
};

const defaultState = {
  amount: 5,
  step: 5,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TicketList {...setupProps} />);
};

describe('<TicketList>', () => {
  let wrapper;
  let resetFiltersMock;

  beforeEach(() => {
    resetFiltersMock = jest.fn();
    wrapper = setup({ resetFilters: resetFiltersMock });
  });

  it('should initialize state correctly', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  describe('with empty props.filteredTickets', () => {
    describe('should render <Notification>', () => {
      it('in an amount of 1', () => {
        expect(wrapper.find('Notification').length).toBe(1);
      });

      it('with props.ticketsAmount passed into props.title', () => {
        expect(wrapper.find('Notification').prop('title').includes(defaultProps.ticketsAmount)).toBe(true);
      });

      it('with passed props.resetFiltes', () => {
        expect(wrapper.find('Notification').prop('resetFilters')).toEqual(resetFiltersMock);
      });
    });

    it('should not render any <Ticket>', () => {
      expect(wrapper.find('Memo(Ticket)').length).toBe(0);
    });

    it('should not render button for showing more <Ticket>', () => {
      expect(wrapper.find('button').length).toBe(0);
    });
  });

  describe('with non-empty props.filteredTickets', () => {
    beforeEach(() => {
      resetFiltersMock = jest.fn();
      wrapper = setup({ filteredTickets: mockedTickets, resetFilters: resetFiltersMock });
    });

    it('should not render any <Notification>', () => {
      expect(wrapper.find('Notification').length).toBe(0);
    });

    it('should render correct amount of <Ticket>', () => {
      expect(wrapper.find('Memo(Ticket)').length).toBe(defaultState.amount);
    });

    it('should render button for showing more <Ticket>', () => {
      expect(wrapper.find('button').length).toBe(1);
    });

    it('should render button which contains state.step', () => {
      expect(wrapper.find('button').contains(defaultState.step)).toBe(false);
    });

    it('should change state.amount on button click', () => {
      wrapper.find('button').simulate('click');
      const expectedOutput = defaultState.amount + defaultState.step;
      expect(wrapper.state().amount).toBe(expectedOutput);
    });
  });
});
