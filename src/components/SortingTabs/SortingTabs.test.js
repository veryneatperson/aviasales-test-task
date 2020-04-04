import SortingTabs from './SortingTabs';

const defaultProps = {
  sortBy: 'cheapest',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SortingTabs {...setupProps} />);
};

describe('<SortingTabs>', () => {
  let wrapper;
  let setSortByMock;

  beforeEach(() => {
    setSortByMock = jest.fn();
    wrapper = setup({ setSortBy: setSortByMock });
  });

  it('should render 1 <SortingTab> with setSortBy and checked', () => {
    expect(wrapper.findWhere(
      (n) => n.name() === 'SortingTab' && n.props().checked === true && n.props().setSortBy === setSortByMock,
    ).length).toBe(1);
  });

  it('should render 1 <SortingTab> with setSortBy and without checked', () => {
    expect(wrapper.findWhere(
      (n) => n.name() === 'SortingTab' && n.props().checked !== true && n.props().setSortBy === setSortByMock,
    ).length).toBe(1);
  });
});
