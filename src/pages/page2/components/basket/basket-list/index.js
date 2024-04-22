import BasketItem from '../basket-item';
import s from './style.module.css';

const BasketList = ({ basketItems, onDelete }) => {
  return (
    <ul className={s.list}>
      {basketItems.map((item) => {
        return <BasketItem key={item.code} item={item} onDelete={onDelete} />;
      })}
    </ul>
  );
};

export default BasketList;
