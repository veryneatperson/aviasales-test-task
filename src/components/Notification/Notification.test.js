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

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render props.title', () => {
    expect(wrapper.contains(defaultProps.title)).toBe(true);
  });

  it('should render props.message', () => {
    expect(wrapper.contains(defaultProps.message)).toBe(true);
  });

  it('should not render button when there is no props.btnText passed', () => {
    expect(wrapper.find('button').length).toBe(0);
  });

  describe('with btnText and handleClick passed via props', () => {
    let resetFiltersMock;
    const btnText = 'Button text';

    beforeEach(() => {
      resetFiltersMock = jest.fn();
      wrapper = setup({ handleClick: resetFiltersMock, btnText });
    });

    it('should render button', () => {
      expect(wrapper.find('button').length).toBe(1);
    });

    it('should render btnText', () => {
      expect(wrapper.contains(btnText)).toBe(true);
    });

    it('should call props.resetFilters on button click', () => {
      wrapper.find('button').simulate('click');
      expect(resetFiltersMock).toHaveBeenCalled();
    });
  });
});
