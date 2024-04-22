import s from './style.module.css';

const Item = ({ item, pluralize, onAdd }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.code}>{item.code}</div>
        <div className={s.title}>
          {item.title}
          {/* {item.count > 0 && pluralize(item.count)} */}
          {/* {item.count > 0 && `Выделяли ${item.count} раз`} */}
        </div>
      </div>
      <div className={s.actions}>
        <div className={s.price}>{item.price} Р</div>
        <button className={s.btn} onClick={() => onAdd(item)}>
          Добавить
        </button>
      </div>
    </li>
  );
};

export default Item;
