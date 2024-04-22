import { useSelector } from 'react-redux';
import s from './style.module.css';

const BasketList = ({ renderItemBasket }) => {
  const basketItems = useSelector((state) => state.basket.basketItems);

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
