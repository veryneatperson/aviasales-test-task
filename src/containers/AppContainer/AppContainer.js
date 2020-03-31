import { connect } from 'react-redux';

import App from '../../components/App/App';
import { getTickets } from '../../store/actions/tickets';
import { selectIsLoading } from '../../store/selectors/combined';
import { selectSearchIdErrorMsg } from '../../store/selectors/searchId';
import { selectTicketsErrorMsg } from '../../store/selectors/tickets';

const mapStateToProps = (state) => ({
  isLoading: selectIsLoading(state),
  searchIdErrorMsg: selectSearchIdErrorMsg(state),
  ticketsErrorMsg: selectTicketsErrorMsg(state),
});

const mapDispatchToProps = (dispatch) => ({
  getTickets: () => dispatch(getTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
