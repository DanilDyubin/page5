import { Link } from 'react-router-dom';
import { numberFormat } from '../../../../../utils';
import s from './style.module.css';

const BasketItem = ({ onDelete, item }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <Link to={`/page3/${item.id}`} className={s.title}>
          {item.title}
        </Link>
      </div>
      <div className={s.actions}>
        <div className={s.price}>{numberFormat(item.price)} Р</div>
        <div className={s.count}>{item.count} ШТ</div>
        <button
          className={s.btn}
          onClick={() => {
            onDelete(item.id);
          }}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
