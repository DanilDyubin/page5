import { useState } from 'react';
import Header from '../page1/components/header';
import Controls from '../page1/components/controls';
import List from '../page1/components/list';

function Page1() {
  const [items, setItems] = useState([
    { code: 1, title: 'Книга', count: 0 },
    { code: 2, title: 'Тетрадь', count: 0 },
    { code: 3, title: 'Карандаш', count: 0 },
    { code: 4, title: 'Ручка', count: 0 },
    { code: 5, title: 'Блокнот', count: 0 },
  ]);

  const onSelect = (code) => {
    setItems(
      items.map((item) => {
        if (item.code === code) {
          // проверяем item на который кликнули
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          }; // меняем (добавляем) св-во selected
        }
        return item.selected ? { ...item, selected: false } : item;
      }),
    );
  };

  const onAdd = () => {
    let item = {
      code: getUniqueNumber(),
      title: 'Новый предмет',
    };
    setItems([...items, item]);
  };

  const onDelete = (code) => {
    setItems(items.filter((item) => item.code !== code));
  };

  const getUniqueNumber = () => {
    // получаем уникальный code для нового item
    let maxNumber = 0;
    items.map((item) => {
      if (maxNumber < item.code) {
        maxNumber = item.code;
      }
    });
    return (maxNumber = maxNumber + 1);
  };

  function pluralize(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
      return ' | Выделяли ' + count + ' раз';
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
      return ' | Выделяли ' + count + ' раза';
    } else {
      return ' | Выделяли ' + count + ' раз';
    }
  }

  return (
    <>
      <Header title={'Simple App'} />
      <Controls onAdd={onAdd} />
      <List items={items} onDelete={onDelete} onSelect={onSelect} pluralize={pluralize} />
    </>
  );
}

export default Page1;
