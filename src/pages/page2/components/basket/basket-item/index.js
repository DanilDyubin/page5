import s from './style.module.css';

const BasketItem = ({ onDelete, item }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.code}>{item.code}</div>
        <div className={s.title}>{item.title}</div>
      </div>
      <div className={s.actions}>
        <div className={s.price}>{item.price} Р</div>
        <div className={s.count}>{item.count} ШТ</div>
        <button
          className={s.btn}
          onClick={() => {
            onDelete(item.code);
          }}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
