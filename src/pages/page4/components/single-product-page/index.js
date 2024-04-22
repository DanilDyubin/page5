import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { onModalOpen } from '../../store/slices/basketSlice';
import { getOneProduct4 } from '../../../../utils';
import Header from '../header4';
import Controls4 from '../controls4';
import ProductItem from '../product-item';

const SingleProductPage = () => {
  const [product, setProduct] = useState('');
  const { productId } = useParams();
  // console.log(product);
  useEffect(() => {
    getOneProduct4(productId).then((res) => setProduct(res[0])); // setProduct(res)
  }, [productId]);

  return (
    <>
      <Header title={product.title} />
      <Controls4 setActive={onModalOpen} />
      <ProductItem product={product} />
    </>
  );
};

export default SingleProductPage;
