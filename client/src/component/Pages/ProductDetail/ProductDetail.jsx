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

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <ProductDetailMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ProductDetailDesktop />
    </Fragment>
  );
};

export default ProductDetail;
