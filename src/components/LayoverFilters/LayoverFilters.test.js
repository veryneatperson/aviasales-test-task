import LayoverFilters, { checkboxLabels } from './LayoverFilters';

const defaultProps = {
  filters: {
    any: true,
    noLayovers: true,
    oneLayover: true,
    twoLayovers: true,
    threeLayovers: true,
  },
};

const filtersAmount = Object.keys(defaultProps.filters).length;

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<LayoverFilters {...setupProps} />);
};

describe('<LayoverFilters>', () => {
  let wrapper;
  let toggleFilterMock;
  let toggleAllFiltersMock;

  beforeEach(() => {
    toggleFilterMock = jest.fn();
    toggleAllFiltersMock = jest.fn();
    wrapper = setup({ toggleFilter: toggleFilterMock, toggleAllFilters: toggleAllFiltersMock });
  });

  it('should render correct amount of<LayoverFilter>', () => {
    expect(wrapper.find('LayoverFilter').length).toBe(filtersAmount);
  });

  it('should render <LayoverFilter> for toggling all filters with correct props', () => {
    const filterName = 'any';
    const expectedProps = {
      checked: defaultProps.filters[filterName],
      onChangeHandler: toggleAllFiltersMock,
      text: checkboxLabels[filterName],
      name: filterName,
    };
    expect(wrapper.find('LayoverFilter').at(0).props()).toEqual(expectedProps);
  });

  it('should render <LayoverFilter> for toggle a single filter with correct props', () => {
    const filterName = 'noLayovers';
    const expectedProps = {
      checked: defaultProps.filters[filterName],
      onChangeHandler: toggleFilterMock,
      text: checkboxLabels[filterName],
      name: filterName,
    };
    expect(wrapper.find('LayoverFilter').at(1).props()).toEqual(expectedProps);
  });
});
