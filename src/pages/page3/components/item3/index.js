import { Link } from 'react-router-dom';
import { numberFormat } from '../../../../utils';

import s from './style.module.css';

const Item = ({ item, onAdd }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.code}>{item.id}</div>
        <Link to={`/page3/${item.id}`} className={s.title}>
          {item.title}
        </Link>
      </div>
      <div className={s.actions}>
        <div className={s.price}>{numberFormat(item.price)} Р</div>
        <button className={s.btn} onClick={() => onAdd(item)}>
          Добавить
        </button>
      </div>
    </li>
  );
};

export default Item;
