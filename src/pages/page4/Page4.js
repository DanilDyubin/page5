import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAdd, onDelete, onModalOpen } from './store/slices/basketSlice';
import { fetchProducts } from './store/slices/productsSlice';
import Header4 from './components/header4';
import Controls4 from './components/controls4';
import List4 from './components/list4';
import Basket from './components/basket4/Basket';
import Modal from './components/modal4';
import Item4 from './components/item4';
import BasketItem from './components/basket4/basket-item';
import Pagination from './components/pagination';
import Select from './components/select';
import { getOneProduct4 } from '../../utils';

function Page4() {
  // const [active, setActive] = useState(false);

  const products = useSelector((state) => state.products.items);
  const open = useSelector((state) => state.basket.open); // modal

  const dispatch = useDispatch();

  // sort
  const sort = [
    { value: 'order', title: 'По порядку' },
    { value: 'title', title: 'По наименования' },
    { value: 'price', title: 'По цене' },
    { value: 'brand', title: 'По фирме' },
  ];

  // pagination states
  // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // pagination
  //                                1 * 10 = 10
  const indexOfLastPost = currentPage * productsPerPage;
  //                                    10 - 10 = 0
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  //                             slice(0, 10)
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  //                                          100/10
  const howManyPages = Math.ceil(products.length / productsPerPage);

  const renders = {
    item: useCallback(
      (item) => {
        return <Item4 item={item} onAdd={onAdd} />;
      },
      [onDelete],
    ),
    itemBasket: useCallback(
      (item) => {
        return <BasketItem item={item} onDelete={onDelete} />;
      },
      [onDelete],
    ),
  };

  const toSlice = async () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    toSlice();
    // getOneProduct4(18).then((res) => console.log(res));
  }, []);

  return (
    <>
      <Header4 title={'Магазин 4'} />
      <Controls4 setActive={onModalOpen} />
      <Select options={sort} />
      <List4 products={products} currentProducts={currentProducts} renderItem={renders.item} />
      <Pagination pag={howManyPages} setCurrentPage={setCurrentPage} />
      <Modal active={open} setActive={onModalOpen}>
        <Basket setActive={onModalOpen} renderItemBasket={renders.itemBasket} />
      </Modal>
    </>
  );
}

export default Page4;
