import { connect } from 'react-redux';

import SortingTabs from '../../components/SortingTabs/SortingTabs';
import { setSortBy } from '../../store/actions/selection';
import { selectSortBy } from '../../store/selectors/selection';

const mapStateToProps = (state) => ({
  sortBy: selectSortBy(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingTabs);
