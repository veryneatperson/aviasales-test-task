import LayoverFilter from './LayoverFilter';

const defaultProps = {
  checked: true,
  text: 'Random text',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<LayoverFilter {...setupProps} />);
};

describe('<LayoverFilter>', () => {
  let wrapper;
  let onChangeHandlerMock;

  beforeEach(() => {
    onChangeHandlerMock = jest.fn();
    wrapper = setup({ onChangeHandler: onChangeHandlerMock });
  });

  it('should render props.text', () => {
    expect(wrapper.contains(defaultProps.text)).toBe(true);
  });

  it('should render input with given props.checked', () => {
    expect(wrapper.find('input').prop('checked')).toBe(defaultProps.checked);
  });

  it('should call props.onChangeHandler on input change', () => {
    wrapper.find('input').simulate('change');
    expect(onChangeHandlerMock).toHaveBeenCalled();
  });
});
