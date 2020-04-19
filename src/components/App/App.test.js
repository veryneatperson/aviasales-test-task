import App from './App';

const defaultProps = {
  isLoading: false,
  searchIdErrorMsg: '',
  ticketsErrorMsg: '',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
};

describe('<App>', () => {
  let wrapper;
  let getTicketsMock;

  beforeEach(() => {
    getTicketsMock = jest.fn();
    wrapper = setup({ getTickets: getTicketsMock });
  });

  it('should render <Header>', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('should render <LayoverFiltersContainer>', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('Connect(LayoverFilters)').exists()).toBe(true);
  });

  it('should render <SortingTabsContainer>', () => {
    expect(wrapper.find('Connect(SortingTabs)').exists()).toBe(true);
  });

  it('should call this.props.getTickets after initial mount', () => {
    expect(getTicketsMock).toHaveBeenCalled();
  });

  describe('with no error messages and isLoading === false', () => {
    it('should not render <Spinner>', () => {
      expect(wrapper.find('Spinner').exists()).toBe(false);
    });

    it('should not render <Notification>', () => {
      expect(wrapper.find('Notification').exists()).toBe(false);
    });

    it('should render <TicketListContainer>', () => {
      expect(wrapper.find('Connect(TicketList)').exists()).toBe(true);
    });
  });

  describe('with no error messages and isLoading === true', () => {
    beforeEach(() => {
      wrapper.setProps({ isLoading: true });
    });

    it('should render <Spinner>', () => {
      expect(wrapper.find('Spinner').exists()).toBe(true);
    });

    it('should not render <Notification>', () => {
      expect(wrapper.find('Notification').exists()).toBe(false);
    });

    it('should not render <TicketListContainer>', () => {
      expect(wrapper.find('Connect(TicketList)').exists()).toBe(false);
    });
  });

  describe('with some error message and isLoading === false', () => {
    const searchIdErrorMsg = 'SearchID error';
    beforeEach(() => {
      wrapper.setProps({ searchIdErrorMsg });
    });

    it('should not render <Spinner>', () => {
      expect(wrapper.find('Spinner').exists()).toBe(false);
    });

    it('should render <Notification> with searchIdErrorMsg passed via props', () => {
      expect(
        wrapper.findWhere((n) => n.name() === 'Notification' && n.props().message === searchIdErrorMsg).exists(),
      ).toBe(true);
    });

    it('should not render <TicketListContainer>', () => {
      expect(wrapper.find('Connect(TicketList)').exists()).toBe(false);
    });
  });
});
