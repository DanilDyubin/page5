import s from './style.module.css';

const Controls = ({ setActive, totalPrice, basketItems, amount }) => {
  return (
    <div className={s.controls}>
      <div className={s.basket}>
        В корзине:{' '}
        {basketItems.length ? (
          <span>
            {amount} товара / {totalPrice} Р
          </span>
        ) : (
          <span>пусто</span>
        )}
      </div>
      <button className={s.btn} onClick={() => setActive(true)}>
        Перейти
      </button>
    </div>
  );
};

export default Controls;
