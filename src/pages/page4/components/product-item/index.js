import { useDispatch } from 'react-redux';
import { onAdd } from '../../store/slices/basketSlice';
import s from './style.module.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={s['product-item']}>
      <div className={s.descr}>{product.title}</div>
      <div className={s.category}>
        Фирма: <span>{product.brand}</span>
      </div>
      <div className={s.price}>Цена: {product.price}</div>
      <button className={s.btn} onClick={() => dispatch(onAdd(product))}>
        Добавить
      </button>
    </div>
  );
};

export default ProductItem;
