import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ShippingInfoModal from '../../Modal/ShippingInfoModal';

import Card from '../../UI/Card';
import CartItem from './CartItem';

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
];

const Cart = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [cartItems, setCartItems] = useState([...dummyCartItems]);
  const [checkedItems, setCheckedItems] = useState([...dummyCartItems]);

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

  const orderBtnClickHandler = () => {
    setIsShowModal(true);
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Fragment>
      {isShowModal && <ShippingInfoModal onHide={hideModalHandler} />}

      <div className="container mx-auto mb-16">
        <div className="breadcumb-container mb-5">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <section>
          <h1 className="font-bold text-4xl mb-5">Keranjang Saya</h1>

          <div className="flex flex-row gap-x-8">
            <div className="w-full">
              <div className="flex flex-row gap-x-4 items-center mb-5">
                <input
                  type="checkbox"
                  name="check-all"
                  id="checkAll"
                  className="w-5 h-5"
                  onChange={addAllHandler}
                  checked={isAllChecked}
                />
                <label htmlFor="checkAll" className="text-lg">
                  Pilih Semua
                </label>
              </div>

              <div className="cart-item-container flex flex-col gap-y-5">
                {renderCartItems}
              </div>
            </div>

            <div className="w-full max-w-xs">
              <Card className="sticky top-8 p-4 border border-solid border-black">
                <h2 className="font-semibold text-lg mb-2">
                  Ringkasan Pembelanjaan
                </h2>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-col -gap-y-1">
                    <h3>Harga Normal</h3>
                    <small className="text-[#909090]">
                      ({totalItems} Barang)
                    </small>
                  </div>
                  <div>Rp {totalPrice}</div>
                </div>

                <div className="flex flex-row justify-between mt-2">
                  <div className="flex flex-col -gap-y-1">
                    <h3>Diskon Produk</h3>
                    <small className="text-[#909090]">(0 Barang)</small>
                  </div>
                  <div className="font-bold text-red-600">-Rp. 0</div>
                </div>

                <div className="flex flex-row justify-between mt-8">
                  <h3>Total Harga</h3>
                  <div className="font-bold">Rp {totalPrice}</div>
                </div>

                <button
                  onClick={orderBtnClickHandler}
                  className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
                >
                  Order Sekarang
                </button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Cart;

/*
selectedList = [...];

passed function to props:
func((selectedList) => isThisItem in selectedList ? checked : unchecked);
*/
