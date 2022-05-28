import Card from '../../UI/Card';
import TrashIcon from '../../SVG/TrashIcon';
import AmountControl from '../../ProductItemCard/AmountControl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

const CartItem = ({
  _id = '',
  nama = '',
  brand = '',
  stok = 0,
  link_gambar = '',
  kuantitas = 0,
  totalHarga = 0,
  selected = false,
}) => {
  const dispatch = useDispatch();

  const localPrice = totalHarga.toLocaleString('id-ID');

  const addAmountHandler = () => {
    dispatch(
      cartActions.increaseItemQuantity({
        _id,
        kuantitas: 1,
      })
    );
  };

  const subtractAmountHandler = () => {
    dispatch(
      cartActions.decreaseItemQuantity({
        _id,
        kuantitas: 1,
      })
    );
  };

  const checkboxClickHandler = () => {
    dispatch(cartActions.selectItem({ _id }));
  };

  const deleteClickHandler = () => {
    dispatch(cartActions.deleteCartItem({ _id }));
  };

  return (
    <Card className="p-3 flex flex-row gap-x-2 sm:gap-x-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col justify-between">
        <input
          type="checkbox"
          name="check"
          className="w-5 h-5 sm:w-6 sm:h-6"
          onChange={checkboxClickHandler}
          checked={selected}
        />

        <button onClick={deleteClickHandler}>
          <TrashIcon className="w-5 sm:w-auto" />
        </button>
      </div>

      <Card className="w-full sm:border sm:border-solid sm:border-black sm:p-4 max-w-[100px] sm:max-w-[150px] flex flex-row items-center">
        <img
          src={`/image/${link_gambar}`}
          alt={nama}
          className="sm:rounded-t-10px w-full h-[100px] sm:h-[150px] object-contain object-center"
        />
      </Card>

      <div className="w-full flex flex-col sm:flex-row sm:gap-x-8 gap-y-2">
        <div className="flex flex-row sm:flex-col justify-between w-full gap-x-4">
          <div className="w-full">
            <div
              className={`${
                stok > 0 ? 'bg-[#55E322]' : 'bg-[#D80000]'
              }  px-4 py-1 w-fit text-xs sm:text-base`}
            >
              {stok > 0 ? 'Ada Stok' : 'Stok Habis'}
            </div>

            <div>
              <Link to={`/products/${_id}`}>
                <h1 className="text-sm sm:text-base font-bold">{nama}</h1>
              </Link>

              <p className="text-xs sm:text-base">{brand}</p>
            </div>
          </div>

          <div className="text-textSecondary self-end">Rp{localPrice}</div>
        </div>

        <div className="grid place-items-end justify-start sm:justify-end">
          <AmountControl
            amount={kuantitas}
            onAddAmount={addAmountHandler}
            onSubtractAmount={subtractAmountHandler}
            className="p-2 border-black gap-x-8"
          />
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
