import s from './style.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={s['product-item']}>
      <div className={s.descr}>{product.description}</div>
      <div className={s.category}>
        Категория: <span>{product.category}</span>
      </div>
      <div className={s.price}>Цена: {product.price}</div>
      <button className={s.btn}>Добавить</button>
    </div>
  );
};

export default ProductItem;
