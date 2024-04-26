import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../store/slices/filterSlice';
import s from './style.module.css';

const sortList = [
  { title: 'Сначала популярные', sortProperty: 'id&order=asc' },
  { title: 'По возрастанию цены', sortProperty: 'price&order=asc' },
  { title: 'По убыванию цены', sortProperty: 'price&order=desc' },
  { title: 'По алфавиту (A-z)', sortProperty: 'title&order=asc' },
  { title: 'По алфавиту (Z-a)', sortProperty: 'title&order=desc' },
];

const Sort = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const sort = useSelector((state) => state.filter.sort);

  const onClickItem = (item) => {
    dispatch(setSort(item));
    setOpen(false);
  };

  return (
    <div className={s.sort}>
      <div className={s['sort-label']} onClick={() => setOpen(!open)}>
        {sort.title}
      </div>
      {open && (
        <div className={s['sort-content']}>
          <ul>
            {sortList.map((item, i) => (
              <li
                className={sort.sortProperty === item.sortProperty ? 'active' : null}
                key={i}
                onClick={() => onClickItem(item)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
