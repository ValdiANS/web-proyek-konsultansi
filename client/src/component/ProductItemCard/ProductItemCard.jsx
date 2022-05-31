import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions, addCartItemToAccount } from '../../store/cart-slice';
import AddToCartSuccessHandler from '../Modal/AddToCartSuccessHandler';

import Card from '../UI/Card';
import AmountControl from './AmountControl';

const ProductItemCard = ({ product = {}, amount = 1 }) => {
  const dispatch = useDispatch();

  const isUserLogin = useSelector((state) => state.login.isLogin);
  const userCartId = useSelector((state) => state.login.userCartId);

  const [showAddToCartSuccessHandler, setShowAddToCartSuccessHandler] =
    useState(false);

  const [itemAmount, setItemAmount] = useState(amount);

  const localPrice = product.harga.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);

    console.log(`Add ${product.nama} amount`);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));

    console.log(`Subtract ${product.nama} amount`);
  };

  const addToCartHandler = () => {
    if (isUserLogin) {
      console.log(userCartId);
      dispatch(
        addCartItemToAccount(
          {
            ...product,
            kuantitas: itemAmount,
            totalHarga: itemAmount * product.harga,
            selected: true,
          },
          userCartId
        )
      );

      setShowAddToCartSuccessHandler(true);
      return;
    }

    dispatch(
      cartActions.addCartItem({
        ...product,
        kuantitas: itemAmount,
        totalHarga: itemAmount * product.harga,
        selected: true,
      })
    );

    setShowAddToCartSuccessHandler(true);
  };

  const hideSuccesModalHandler = () => {
    setShowAddToCartSuccessHandler(false);
  };

  return (
    <Fragment>
      {showAddToCartSuccessHandler && (
        <AddToCartSuccessHandler onHide={hideSuccesModalHandler} />
      )}

      <Card className="h-full p-4 sm:p-6 bg-white shadow-[2px_4px_10px_rgba(0,0,0,0.1)] flex flex-col justify-between">
        <div className="img-container h-full">
          <img
            src={product.link_gambar}
            alt={product.nama}
            className="rounded-t-10px object-cover object-center w-full h-full max-h-[150px]"
          />
        </div>

        <div className="terlaris-card-content mt-5">
          <Link
            to={`/products/${product._id}`}
            className="font-bold hover:underline"
          >
            {product.nama}
          </Link>
          <div>{1} pcs</div>

          <div className="price text-textSecondary">Rp{localPrice}</div>

          <AmountControl
            className="px-4 py-2 mt-2"
            amount={itemAmount}
            onAddAmount={addAmountHandler}
            onSubtractAmount={subtractAmountHandler}
          />

          <Card className="overflow-hidden mt-3">
            <button
              onClick={addToCartHandler}
              className="w-full bg-darkOrange py-2 font-semibold text-center"
            >
              Add to Cart
            </button>
          </Card>
        </div>
      </Card>
    </Fragment>
  );
};

export default ProductItemCard;
