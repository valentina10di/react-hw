
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);