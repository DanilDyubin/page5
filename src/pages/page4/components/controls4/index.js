import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pluralize } from '../../../../utils';
import { numberFormat } from '../../../../utils';
import { Link } from 'react-router-dom';

import s from './style.module.css';

const Controls4 = ({ setActive }) => {
  const { totalAmount, totalPrice } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  return (
    <div className={s.controls}>
      <Link to="/page4">Главная</Link>
      <div className={s.wrapper}>
        <div className={s.basket}>
          В корзине:{' '}
          {totalAmount ? (
            <span>{`${pluralize(totalAmount)} / ${numberFormat(totalPrice)} Р`}</span>
          ) : (
            <span>пусто</span>
          )}
        </div>
        <button className={s.btn} onClick={() => dispatch(setActive(true))}>
          Перейти
        </button>
      </div>
    </div>
  );
};

export default Controls4;
