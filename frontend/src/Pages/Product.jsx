import React, { useContext } from 'react'
import { ShopContext} from '../Context/ShopContext'
import { useParams} from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelativeProducts from '../Components/RelativePorducts/RelativeProducts';


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find(
    (e) => e.id === Number(productId)
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelativeProducts />
    </div>
  );
};

export default Product;

