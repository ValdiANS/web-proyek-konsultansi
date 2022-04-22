import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="container mx-auto">
      <div className="breadcumb-container mb-5">
        <Link to="/" className="text-borderSecondary">
          Home
        </Link>
      </div>

      <section>
        <h1 className="font-bold text-4xl mb-5">Keranjang Saya</h1>

        <div>
          <div className="flex flex-row gap-x-4 items-center mb-5">
            <input
              type="checkbox"
              name="check-all"
              id="checkAll"
              className="w-5 h-5"
            />
            <label htmlFor="checkAll" className="text-lg">
              Pilih Semua
            </label>
          </div>

          <div className="cart-item-container flex flex-col gap-y-5">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

/*
selectedList = [...];

passed function to props:
func((selectedList) => isThisItem in selectedList ? checked : unchecked);
*/
