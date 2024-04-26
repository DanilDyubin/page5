import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onDelete, onModalOpen } from '../../store/slices/basketSlice';
import BasketHeader from '../basket4/basket-header';
import BasketControls from '../basket4/basket-controls';
import BasketList from '../basket4/basket-list';
import BasketItem from '../basket4/basket-item';
import BasketAmount from '../basket4/basket-amount';
import Modal from '../modal4';

function Basket() {
  const open = useSelector((state) => state.basket.open); // modal

  const dispatch = useDispatch();

  const renders = {
    itemBasket: useCallback(
      (item) => {
        return (
          <BasketItem
            item={item}
            onDelete={onDelete}
            onClose={() => dispatch(onModalOpen(false))}
          />
        );
      },
      [onDelete],
    ),
  };

  return (
    <Modal active={open} setActive={onModalOpen}>
      <BasketHeader title={'Корзина'} setActive={onModalOpen} />
      <BasketControls />
      <BasketList renderItemBasket={renders.itemBasket} />
      <BasketAmount />
    </Modal>
  );
}

export default Basket;
