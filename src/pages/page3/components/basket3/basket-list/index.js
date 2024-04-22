import BasketItem from '../basket-item';
import s from './style.module.css';

const BasketList = ({ basketItems, renderItemBasket }) => {
  return (
    <ul className={s.list}>
      {basketItems.map((item) => {
        // return <BasketItem key={item.code} item={item} onDelete={onDelete} />;
        return <div key={item.id}>{renderItemBasket(item)}</div>;
      })}
    </ul>
  );
};

export default BasketList;
