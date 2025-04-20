import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css'

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input className={css.input}
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
