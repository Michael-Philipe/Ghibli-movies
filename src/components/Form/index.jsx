import { Input } from './style';
import PropTypes from 'prop-types';

const Form = ({ searchText, setSearchText }) => {
  return (
    <form style={{ marginTop: '10vh' }}>
      <Input
        id='search'
        type='text'
        placeholder='Search movies..'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <label htmlFor='search'></label>
    </form>
  );
};

Form.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};

export default Form;
