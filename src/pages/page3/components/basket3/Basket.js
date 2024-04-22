import { useState } from 'react';
import BasketHeader from '../basket3/basket-header';
import BasketControls from '../basket3/basket-controls';
import BasketList from '../basket3/basket-list';
import BasketAmount from '../basket3/basket-amount';

function Basket({ setActive, basketItems, totalPrice, onDelete, renderItemBasket }) {
  return (
    <>
      <BasketHeader title={'Корзина'} setActive={setActive} />
      <BasketControls />
      <BasketList
        basketItems={basketItems}
        onDelete={onDelete}
        renderItemBasket={renderItemBasket}
      />
      <BasketAmount totalPrice={totalPrice} />
    </>
  );
}

export default Basket;
