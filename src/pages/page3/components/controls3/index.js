import { numberFormat } from '../../../../utils';
import { pluralize } from '../../../../utils';
import { Link } from 'react-router-dom';

import s from './style.module.css';

const Controls = ({ setActive, totalPrice, amount }) => {
  return (
    <div className={s.controls}>
      <Link to="/page3">Главная</Link>
      <div className={s.wrapper}>
        <div className={s.basket}>
          В корзине:{' '}
          {amount ? (
            <span>
              {/* {amount} товара / {numberFormat(totalPrice)} Р */}
              {`${pluralize(amount)} / ${numberFormat(totalPrice)} Р`}
            </span>
          ) : (
            <span>пусто</span>
          )}
        </div>
        <button className={s.btn} onClick={() => setActive(true)}>
          Перейти
        </button>
      </div>
    </div>
  );
};

export default Controls;
