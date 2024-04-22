import Item from '../item2';
import s from './style.module.css';

const List = ({ items, onDelete, onSelect, pluralize, onAdd }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        return <Item key={item.code} item={item} onAdd={onAdd} pluralize={pluralize} />;
      })}
    </ul>
  );
};

export default List;
