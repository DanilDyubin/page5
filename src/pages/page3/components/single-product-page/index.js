import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../../../utils';
import Header from '../header3';
import Controls from '../controls3';
import ProductItem from '../product-item';

const SingleProductPage = () => {
  const [product, setProduct] = useState('');
  const { productId } = useParams();

  useEffect(() => {
    getOneProduct(productId).then((res) => setProduct(res));
  }, [productId]);

  return (
    <>
      <Header title={product.title} />
      <Controls />
      <ProductItem product={product} />
    </>
  );
};

export default SingleProductPage;
