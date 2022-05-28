import { useState, Fragment, useEffect } from 'react';

import useWindowSize from '../../../hooks/useWindowSize';
import ProductDetailDesktop from './ProductDetailDesktop';
import config, { screenConfig } from '../../../script/config/config';
import ProductDetailMobile from './ProductDetailMobile';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

const ProductDetail = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const params = useParams();
  const { productId } = params;

  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({});
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchProductDetailAndCategory = async () => {
      const productDetailresponse = await fetch(
        config.apiUrl.product(productId)
      );

      if (!productDetailresponse.ok) {
        throw new Error('Could not fetch product detail data!');
      }

      const productDetailRespData = await productDetailresponse.json();

      setProductInfo(productDetailRespData?.data);

      const categoryResponse = await fetch(
        config.apiUrl.category(productDetailRespData?.data?.id_kategori)
      );

      if (!categoryResponse.ok) {
        throw new Error('Could not fetch product category data!');
      }

      const categoryRespData = await categoryResponse.json();

      setCategoryName(categoryRespData?.data?.nama);
    };

    try {
      fetchProductDetailAndCategory();
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  }, [productId]);

  const [showAddToCartSuccessHandler, setShowAddToCartSuccessHandler] =
    useState(false);

  const thumbnailImgList = [
    { url: `/image/${productInfo?.link_gambar}`, altText: productInfo?.nama },
  ];

  const [itemAmount, setItemAmount] = useState(1);

  const price = productInfo?.harga * itemAmount;
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
    dispatch(
      cartActions.addCartItem({
        ...productInfo,
        kuantitas: itemAmount,
        totalHarga: price,
        selected: true,
      })
    );

    setShowAddToCartSuccessHandler(true);
  };

  const hideSuccesModalHandler = () => {
    setShowAddToCartSuccessHandler(false);
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <ProductDetailMobile
          imgList={thumbnailImgList}
          showAddToCartSuccessHandler={showAddToCartSuccessHandler}
          name={productInfo?.nama}
          brand={productInfo?.brand}
          category={categoryName}
          weight={productInfo?.berat}
          itemAmount={itemAmount}
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
        imgList={thumbnailImgList}
        showAddToCartSuccessHandler={showAddToCartSuccessHandler}
        name={productInfo?.nama}
        brand={productInfo?.brand}
        category={categoryName}
        weight={productInfo?.berat}
        itemAmount={itemAmount}
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
