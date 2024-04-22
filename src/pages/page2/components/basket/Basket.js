import { useState } from 'react';
import BasketHeader from '../basket/basket-header';
import BasketControls from '../basket/basket-controls';
import BasketList from '../basket/basket-list';
import BasketAmount from '../basket/basket-amount';

function Basket({ setActive, basketItems, totalPrice, onDelete }) {
  return (
    <>
      <BasketHeader title={'Корзина'} setActive={setActive} />
      <BasketControls />
      <BasketList basketItems={basketItems} onDelete={onDelete} />
      <BasketAmount totalPrice={totalPrice} />
    </>
  );
}

export default Basket;
