import { useState, useEffect, useCallback } from 'react';
import Header3 from './components/header3';
import Controls3 from './components/controls3';
import List3 from './components/list3';
import Basket from './components/basket3/Basket';
import Modal from './components/modal3';
import Item3 from './components/item3';
import BasketItem3 from './components/basket3/basket-item';
import Pagination from './components/pagination';

function Page3() {
  const [basketItems, setBasketItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [active, setActive] = useState(false);

  // pagination states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  // pagination
  //                                1 * 10 = 10
  const indexOfLastPost = currentPage * productsPerPage;
  //                                    10 - 10 = 0
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  //                             slice(0, 10)
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  //                                          100/10
  const howManyPages = Math.ceil(products.length / productsPerPage);

  const onAdd = (itemList) => {
    let sum = 0;
    // Ищем товар в корзине, чтобы увеличить его количество
    let exist = false;
    const list = basketItems.map((item) => {
      let result = item;
      if (item.id === itemList.id) {
        exist = true; // Запомним, что был найден в корзине
        result = { ...item, count: item.count + 1 };
      }
      sum += result.price * result.count;
      return result;
    });

    if (!exist) {
      // Поиск товара в каталоге, чтобы его добавить в корзину.
      // @todo В реальном приложении будет запрос к АПИ вместо поиска по состоянию.
      const item = products.find((item) => item.id === itemList.id);
      list.push({ ...item, count: 1 }); // list уже новый, в него можно пушить.
      // Добавляем к сумме.
      sum += item.price;
    }

    const totalAmount = list.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0);

    setBasketItems(list);
    setAmount(totalAmount);
    setTotalPrice(sum);
  };

  const onDelete = (id) => {
    // let sum = 0; // альтернативный вариант, чтобы не использовать 2 перебора (filter и reduce)
    // let totalAmount = 0;
    // const list = basketItems.filter((item) => {
    //   if (item.code === code) return false;
    //   sum += item.price * item.count;
    //   totalAmount += item.count;
    //   return true;
    // });

    const list = basketItems.filter((item) => item.id !== id);
    const sum = list.reduce((sum, item) => {
      return item.price * item.count + sum;
    }, 0);
    const totalAmount = list.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0);

    setBasketItems(list);
    setAmount(totalAmount);
    setTotalPrice(sum);
  };

  const renders = {
    item: useCallback(
      (item) => {
        return <Item3 item={item} onAdd={onAdd} />;
      },
      [onDelete],
    ),
    itemBasket: useCallback(
      (item) => {
        return <BasketItem3 key={item.code} item={item} onDelete={onDelete} />;
      },
      [onDelete],
    ),
  };

  // const load = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const json = await response.json();
  // };

  const load = async () => {
    setLoading(true);
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    setProducts(result);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Header3 title={'Магазин 3'} />
      <Controls3 setActive={setActive} amount={amount} totalPrice={totalPrice} />
      <List3 products={products} currentProducts={currentProducts} renderItem={renders.item} />
      <Pagination pag={howManyPages} setCurrentPage={setCurrentPage} />
      <Modal active={active} setActive={setActive}>
        <Basket
          setActive={setActive}
          basketItems={basketItems}
          totalPrice={totalPrice}
          renderItemBasket={renders.itemBasket}
          onDelete={onDelete}
        />
      </Modal>
    </>
  );
}

export default Page3;
