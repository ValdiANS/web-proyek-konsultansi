import { useState, Fragment } from 'react';

import useWindowSize from '../../../hooks/useWindowSize';
import ProductDetailDesktop from './ProductDetailDesktop';
import { screenConfig } from '../../../script/config/config';
import ProductDetailMobile from './ProductDetailMobile';

const imgList = [
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+1',
    altText: 'Hero Image 1',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+2',
    altText: 'Hero Image 2',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+3',
    altText: 'Hero Image 3',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+4',
    altText: 'Hero Image 4',
  },
];

const ProductDetail = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const [showAddToCartSuccessHandler, setShowAddToCartSuccessHandler] =
    useState(false);

  const [itemAmount, setItemAmount] = useState(1);

  const price = 3500 * itemAmount;
  const localPrice = price.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);

    console.log(`Add ${productName} amount`);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));

    console.log(`Subtract ${productName} amount`);
  };

  const addToCartHandler = () => {
    setShowAddToCartSuccessHandler(true);
  };

  const hideSuccesModalHandler = () => {
    setShowAddToCartSuccessHandler(false);
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <ProductDetailMobile
          imgList={imgList}
          showAddToCartSuccessHandler={showAddToCartSuccessHandler}
          setShowAddToCartSuccessHandler={setShowAddToCartSuccessHandler}
          itemAmount={itemAmount}
          setItemAmount={setItemAmount}
          price={price}
          localPrice={localPrice}
          addAmountHandler={addAmountHandler}
          subtractAmountHandler={subtractAmountHandler}
          addToCartHandler={addToCartHandler}
          hideSuccesModalHandler={hideSuccesModalHandler}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ProductDetailDesktop
        imgList={imgList}
        showAddToCartSuccessHandler={showAddToCartSuccessHandler}
        setShowAddToCartSuccessHandler={setShowAddToCartSuccessHandler}
        itemAmount={itemAmount}
        setItemAmount={setItemAmount}
        price={price}
        localPrice={localPrice}
        addAmountHandler={addAmountHandler}
        subtractAmountHandler={subtractAmountHandler}
        addToCartHandler={addToCartHandler}
        hideSuccesModalHandler={hideSuccesModalHandler}
      />
    </Fragment>
  );
};

export default ProductDetail;
