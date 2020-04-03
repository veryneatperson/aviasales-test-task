import Notification from './Notification';

const defaultProps = {
  title: 'Some title',
  message: 'Some random message',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Notification {...setupProps} />);
};

describe('<Notification>', () => {
  let wrapper;
  let resetFiltersMock;

  beforeEach(() => {
    resetFiltersMock = jest.fn();
    wrapper = setup({ resetFilters: resetFiltersMock });
  });

  it('should render props.title', () => {
    expect(wrapper.contains(defaultProps.title)).toBe(true);
  });

  it('should render props.message', () => {
    expect(wrapper.contains(defaultProps.message)).toBe(true);
  });

  it('should call props.resetFilters on button click', () => {
    wrapper.find('button').simulate('click');
    expect(resetFiltersMock).toHaveBeenCalled();
  });
});
