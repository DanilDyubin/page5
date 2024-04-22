import s from './style.module.css';

const Item = ({ onDelete, item, onSelect, pluralize }) => {
  return (
    <li
      className={item.selected ? s.item + ` ` + s.select : s.item}
      onClick={() => onSelect(item.code)}>
      <div className={s.wrapper}>
        <div className={s.code}>{item.code}</div>
        <div className={s.title}>
          {item.title}
          {item.count > 0 && pluralize(item.count)}
          {/* {item.count > 0 && `Выделяли ${item.count} раз`} */}
        </div>
      </div>
      <div className={s.actions}>
        <button
          className={s.btn}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item.code);
          }}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default Item;
