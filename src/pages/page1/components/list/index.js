import Item from '../item';
import { useState } from 'react';
import s from './style.module.css';

const List = ({ items, onDelete, onSelect, pluralize }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        return (
          <Item
            key={item.code}
            item={item}
            onSelect={onSelect}
            onDelete={onDelete}
            pluralize={pluralize}
          />
        );
      })}
    </ul>
  );
};

export default List;
