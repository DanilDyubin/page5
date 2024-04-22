import BasketHeader from '../basket4/basket-header';
import BasketControls from '../basket4/basket-controls';
import BasketList from '../basket4/basket-list';
import BasketAmount from '../basket4/basket-amount';
import Modal from '../modal4';

function Basket({ setActive, renderItemBasket }) {
  return (
    <>
      <BasketHeader title={'Корзина'} setActive={setActive} />
      <BasketControls />
      <BasketList renderItemBasket={renderItemBasket} />
      <BasketAmount />
    </>
  );
}

export default Basket;
