import { connect } from 'react-redux';

import LayoverFilters from '../../components/LayoverFilters/LayoverFilters';
import { toggleFilter, toggleAllFilters } from '../../store/actions/selection';
import { selectFilters } from '../../store/selectors/selection';

const mapStateToProps = (state) => ({
  filters: selectFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: (filter, value) => dispatch(toggleFilter(filter, value)),
  toggleAllFilters: (value) => dispatch(toggleAllFilters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoverFilters);
