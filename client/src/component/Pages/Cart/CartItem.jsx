import { useState } from 'react';

import Card from '../../UI/Card';
import TrashIcon from '../../SVG/TrashIcon';
import AmountControl from '../../ProductItemCard/AmountControl';
import { Link } from 'react-router-dom';

const CartItem = ({
  onCheck = () => {},
  onDelete = (name = '') => {},
  onUncheck = () => {},
  thumbnailUrl = '',
  name = '',
  brand = '',
  price = 0,
  amount = 1,
  inStock = true,
  checked = false,
}) => {
  const [itemAmount, setItemAmount] = useState(amount);

  const localPrice = (price * itemAmount).toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => {
      if (prevVal === 1) {
        onUncheck({
          thumbnailUrl,
          name,
          brand,
          price,
          amount,
          inStock,
        });
      }

      return prevVal === 1 ? prevVal : prevVal - 1;
    });
  };

  const checkboxClickHandler = () => {
    onCheck({
      thumbnailUrl,
      name,
      brand,
      price,
      amount,
      inStock,
    });
  };

  const deleteClickHandler = () => {
    onDelete(name);
  };

  return (
    <Card className="p-3 flex flex-row gap-x-2 sm:gap-x-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col justify-between">
        <input
          type="checkbox"
          name="check"
          className="w-5 h-5 sm:w-6 sm:h-6"
          onChange={checkboxClickHandler}
          checked={checked}
        />

        <button onClick={deleteClickHandler}>
          <TrashIcon className="w-5 sm:w-auto" />
        </button>
      </div>

      <Card className="sm:border sm:border-solid sm:border-black sm:p-4 max-w-[100px] sm:max-w-[14rem] flex flex-row items-center">
        <img
          src={thumbnailUrl}
          alt={name}
          className="sm:rounded-t-10px w-full"
        />
      </Card>

      <div className="flex flex-col sm:flex-row sm:gap-x-8 gap-y-2">
        <div className="flex flex-row sm:flex-col justify-between w-full gap-x-4">
          <div className="w-full">
            <div
              className={`${
                inStock ? 'bg-[#55E322]' : 'bg-[#D80000]'
              }  px-4 py-1 w-fit text-xs sm:text-base`}
            >
              {inStock ? 'Ada Stok' : 'Stok Habis'}
            </div>

            <div>
              <Link to={`/products/1`}>
                <h1 className="text-sm sm:text-base font-bold">{name}</h1>
              </Link>

              <p className="text-xs sm:text-base">{brand}</p>
            </div>
          </div>

          <div className="text-textSecondary self-end">Rp{localPrice}</div>
        </div>

        <div className="grid place-items-end justify-start sm:justify-end w-full">
          <AmountControl
            amount={itemAmount}
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
