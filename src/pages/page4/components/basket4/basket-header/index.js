import { useDispatch } from 'react-redux';
import s from './style.module.css';

const BasketHeader = ({ title, setActive }) => {
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <button onClick={() => dispatch(setActive(false))}>Закрыть</button>
    </header>
  );
};

export default BasketHeader;
