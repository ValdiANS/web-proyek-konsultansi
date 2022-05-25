import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import CheckoutWarningModal from '../../Modal/CheckoutWarningModal';

import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import DeleteAllConfirmationModal from '../../Modal/DeleteAllConfirmationModal';

const dummyCartItems = [
  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+1',
    name: 'Indomie Goreng 1',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },

  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+2',
    name: 'Indomie Goreng 2',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },

  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+3',
    name: 'Indomie Goreng 3',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },

  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+4',
    name: 'Indomie Goreng 4',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },
];

const CartMobile = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([...dummyCartItems]);
  const [checkedItems, setCheckedItems] = useState([...dummyCartItems]);

  const [showCheckoutWarningModal, setShowCheckoutWarningModal] =
    useState(false);

  const [showDeleteAllConfirmationModal, setShowDeleteAllConfirmationModal] =
    useState(false);

  const isAllChecked = checkedItems.length === cartItems.length;

  console.log(isAllChecked);

  const itemCheckHandler = (item) => {
    const itemCheckedIdx = checkedItems.findIndex(
      (checkedItem) => checkedItem.name === item.name
    );

    // Hapus item jika sudah dicentang
    if (itemCheckedIdx > -1) {
      setCheckedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.name !== item.name)
      );

      return;
    }

    setCheckedItems((prevItems) => [...prevItems, item]);
  };

  const itemDeleteHandler = (name) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((prevCartItem) => prevCartItem.name !== name)
    );
  };

  const allItemDeleteHandler = () => {
    setCartItems([]);
  };

  const addAllHandler = () => {
    setCheckedItems([]);

    if (checkedItems.length === cartItems.length) {
      return;
    }

    setCheckedItems([...cartItems]);
  };

  const renderCartItems = cartItems.map((item, index) => {
    const isChecked = checkedItems.find(
      (checkedItem) => checkedItem.name === item.name
    );

    return (
      <CartItem
        key={index + 1}
        onCheck={itemCheckHandler}
        onDelete={itemDeleteHandler}
        thumbnailUrl={item.thumbnailUrl}
        name={item.name}
        brand={item.brand}
        price={item.price}
        amount={item.amount}
        inStock={item.inStock}
        checked={isChecked}
      />
    );
  });

  const totalItems = checkedItems.length;

  const totalPrice = checkedItems
    .reduce((prev, current) => prev + current.price, 0)
    .toLocaleString('id-ID');

  const lanjutkanPesananBtnClickHandler = () => {
    if (checkedItems.length === 0) {
      setShowCheckoutWarningModal(true);
      return;
    }

    navigate('/checkout');
  };

  const hideCheckoutWarningModalHandler = () => {
    setShowCheckoutWarningModal(false);
  };

  const hideDeleteAllConfirmationModalHandler = () => {
    setShowDeleteAllConfirmationModal(false);
  };

  const showDeleteAllConfirmationModalHandler = () => {
    setShowDeleteAllConfirmationModal(true);
  };

  const deleteDeleteAllConfirmationHandler = () => {
    allItemDeleteHandler();
    setShowDeleteAllConfirmationModal(false);
  };

  return (
    <Fragment>
      {showCheckoutWarningModal && (
        <CheckoutWarningModal onHide={hideCheckoutWarningModalHandler} />
      )}

      {showDeleteAllConfirmationModal && (
        <DeleteAllConfirmationModal
          onHide={hideDeleteAllConfirmationModalHandler}
          onDeleteAll={deleteDeleteAllConfirmationHandler}
        />
      )}

      {cartItems.length === 0 && <CartEmpty />}

      {cartItems.length > 0 && (
        <Fragment>
          <AppHeader>
            <MobileNavbar
              hideCartBtn
              hideLoginBtn
              hideSearchBar
              titleText="Keranjang"
            />
          </AppHeader>

          <div className="container mx-auto mt-4 mb-16 px-4">
            <div className="flex flex-row gap-x-8">
              <div className="w-full">
                <div className="mb-5 flex flex-row justify-between">
                  <div className="flex flex-row gap-x-4 items-center">
                    <input
                      type="checkbox"
                      name="check-all"
                      id="checkAll"
                      className="w-5 h-5"
                      onChange={addAllHandler}
                      checked={isAllChecked}
                    />
                    <label htmlFor="checkAll" className="text-base">
                      Pilih Semua
                    </label>
                  </div>

                  <button
                    onClick={showDeleteAllConfirmationModalHandler}
                    className="text-[#D80000]"
                  >
                    Hapus Semua
                  </button>
                </div>

                <div className="cart-item-container flex flex-col gap-y-3">
                  {renderCartItems}
                </div>
              </div>
            </div>
          </div>

          <div className="invisible w-full bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row justify-between">
              <div>
                <h3>Subtotal</h3>
                <small className="text-[#909090]">({totalItems} Barang)</small>
              </div>

              <div className="font-semibold">Rp {totalPrice}</div>
            </div>

            <button
              onClick={lanjutkanPesananBtnClickHandler}
              className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
            >
              Lanjutkan Pesanan
            </button>
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row justify-between">
              <div>
                <h3>Subtotal</h3>
                <small className="text-[#909090]">({totalItems} Barang)</small>
              </div>

              <div className="font-semibold">Rp {totalPrice}</div>
            </div>

            <button
              onClick={lanjutkanPesananBtnClickHandler}
              className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
            >
              Lanjutkan Pesanan
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartMobile;

/*
selectedList = [...];

passed function to props:
func((selectedList) => isThisItem in selectedList ? checked : unchecked);
*/
