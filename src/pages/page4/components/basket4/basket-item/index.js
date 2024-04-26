import { useDispatch } from 'react-redux';
// import { onDelete } from '../../../store/slices/basketSlice';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../../../../utils';
import s from './style.module.css';

const BasketItem = ({ item, onDelete, onClose }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <Link to={`/page4/${item.id}`} onClick={onClose} className={s.title}>
          {item.title}
        </Link>
      </div>
      <div className={s.actions}>
        <div className={s.price}>{numberFormat(item.price)} Р</div>
        <div className={s.count}>{item.count} ШТ</div>
        <button className={s.btn} onClick={() => dispatch(onDelete(item))}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
