import { numberFormat } from '../../../../../utils';
import s from './style.module.css';

const BasketAmount = ({ onAdd, totalPrice }) => {
  return (
    <div className={s.amount}>
      <p className={s.total}>Итого</p>
      <p className={s.price}>{numberFormat(totalPrice)} Р</p>
    </div>
  );
};

export default BasketAmount;
