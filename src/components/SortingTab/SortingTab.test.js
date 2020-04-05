import SortingTab from './SortingTab';

const defaultProps = {
  label: 'Самый дешевый',
  name: 'cheapest',
  checked: true,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SortingTab {...setupProps} />);
};

describe('<SortingTab>', () => {
  let wrapper;
  let setSortByMock;

  beforeEach(() => {
    setSortByMock = jest.fn();
    wrapper = setup({ setSortBy: setSortByMock });
  });

  it('should render props.label', () => {
    expect(wrapper.contains(defaultProps.label)).toBe(true);
  });

  it('should assing "checked" class when props.checked == true', () => {
    expect(wrapper.find('.SortingTab').hasClass('checked')).toBe(true);
  });

  it('should not assing "checked" class when props.checked != true', () => {
    wrapper.setProps({ checked: false });
    expect(wrapper.find('.SortingTab').hasClass('checked')).toBe(false);
  });

  it('should call props.setSortBy with props.name as an argument', () => {
    wrapper.find('li').simulate('click');
    expect(setSortByMock).toHaveBeenCalledWith(defaultProps.name);
  });
});
