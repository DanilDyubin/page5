import { useState, useEffect, useCallback } from 'react';
import Header2 from './components/header2';
import Controls2 from './components/controls2';
import List2 from './components/list2';
import Basket from './components/basket/Basket';
import Modal from './components/modal';

function Page2() {
  const [items, setItems] = useState([
    { code: 1, title: 'Название товара', price: 100.0 },
    { code: 2, title: 'Книга про React', price: 770 },
    { code: 3, title: 'Конфета', price: 33 },
    { code: 4, title: 'Трактор', price: 7955320 },
    { code: 5, title: 'Телефон iPhone XIXV', price: 120000 },
    { code: 6, title: 'Карандаши цветные', price: 111 },
    { code: 7, title: 'Товар сюрприз', price: 0 },
  ]);

  const [basketItems, setBasketItems] = useState([]);

  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [active, setActive] = useState(false);

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

  // const onAdd = (itemList) => {  // правильный вариант onAdd
  //   let sum = 0;
  //   // Ищем товар в корзине, чтобы увеличить его количество
  //   let exist = false;
  //   const list = basketItems.map((item) => {
  //     let result = item;
  //     if (item.id === itemList.id) {
  //       exist = true; // Запомним, что был найден в корзине
  //       result = { ...item, count: item.count + 1 };
  //     }
  //     sum += result.price * result.count;
  //     return result;
  //   });

  //   if (!exist) {
  //     // Поиск товара в каталоге, чтобы его добавить в корзину.
  //     // @todo В реальном приложении будет запрос к АПИ вместо поиска по состоянию.
  //     const item = products.find((item) => item.id === itemList.id);
  //     list.push({ ...item, count: 1 }); // list уже новый, в него можно пушить.
  //     // Добавляем к сумме.
  //     sum += item.price;
  //   }

  //   const totalAmount = list.reduce((acc, obj) => {
  //     return acc + obj.count;
  //   }, 0);

  //   setBasketItems(list);
  //   setAmount(totalAmount);
  //   setTotalPrice(sum);
  // };

  const onAdd = (item) => {
    console.log(item);
    console.log(basketItems);
    const findItem = basketItems.find((obj) => obj.code === item.code);
    if (findItem) {
      findItem.count++;
    } else {
      basketItems.push({ ...item, count: 1 });
    }
    setAmount(basketItems.reduce((sum, obj) => sum + obj.count, 0));
    setTotalPrice(
      basketItems.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0),
    );
  };

  //   useCallback((item) => {
  //     onAdd(item);
  //   });

  const onDelete = (code) => {
    setBasketItems(basketItems.filter((item) => item.code !== code));
    // баг с обновлением totalPrice
    setTotalPrice(
      basketItems.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0),
    );
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

  return (
    <>
      <Header2 title={'Магазин'} />
      <Controls2
        basketItems={basketItems}
        setActive={setActive}
        amount={amount}
        totalPrice={totalPrice}
      />
      <List2 items={items} onAdd={onAdd} />
      <Modal active={active} setActive={setActive}>
        <Basket
          setActive={setActive}
          basketItems={basketItems}
          totalPrice={totalPrice}
          onDelete={onDelete}
        />
      </Modal>
    </>
  );
}

export default Page2;
