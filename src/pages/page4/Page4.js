import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAdd, onDelete, onModalOpen } from './store/slices/basketSlice';
import { onSearch, resetParams } from './store/slices/filterSlice';
import { fetchProducts } from './store/slices/productsSlice';
import Header4 from './components/header4';
import Controls4 from './components/controls4';
import List4 from './components/list4';
import Item4 from './components/item4';
import BasketItem from './components/basket4/basket-item';
import Pagination from './components/pagination';
import Select from './components/select';
import Search from './components/search';
import Sort from './components/sort';
import SideLayout from './components/side-layout';

function Page4() {
  // const [active, setActive] = useState(false);

  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const searchValue = useSelector((state) => state.filter.search);
  const sort = useSelector((state) => state.filter.sort);

  const dispatch = useDispatch();

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

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(fetchProducts({ search, sort }));
  };

  useEffect(() => {
    getProducts();
  }, [searchValue, sort]);

  // const list = () => {
  //   return (
  //     <List4 products={products} currentProducts={currentProducts} renderItem={renders.item} />
  //   );
  // };

  return (
    <>
      <Header4 title={'Магазин 4'} />
      <Controls4 setActive={onModalOpen} />
      <SideLayout>
        <Search placeholder={'Поиск'} value={searchValue} onChange={onSearch} type={'text'} />
        <Sort />
        <button onClick={() => dispatch(resetParams())}>Сброс</button>
      </SideLayout>
      {status === 'error' ? (
        <div>Ничего не найдено!</div>
      ) : status === 'loading' ? (
        <div style={{ fontSize: '26px', textAlign: 'center', marginTop: '50px' }}>Loading...</div>
      ) : (
        <List4 products={products} currentProducts={currentProducts} renderItem={renders.item} />
      )}
      <Pagination pag={howManyPages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default Page4;
