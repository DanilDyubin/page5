import Item from '../item3';
import s from './style.module.css';

const List = ({ products, renderItem, currentProducts }) => {
  return (
    <ul className={s.list}>
      {currentProducts.map((item) => {
        return (
          <div key={item.id} className={s['list-item']}>
            {renderItem(item)}
          </div>
        );
      })}
    </ul>
  );
};

export default List;
