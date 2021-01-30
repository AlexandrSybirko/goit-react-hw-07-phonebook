
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import * as contactsActions from 'redux/actions';


export default function Filter()  {
const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.filter}>
    Find contacts by name
    <input className= {s.input} type='text' value={value} onChange={onChange}  placeholder="Go IT"/>
  </label>
  );
};

 
