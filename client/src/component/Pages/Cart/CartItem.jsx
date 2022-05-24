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
    <Card className="p-3 flex flex-row gap-x-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col justify-between">
        <input
          type="checkbox"
          name="check"
          className="w-6 h-6"
          onChange={checkboxClickHandler}
          checked={checked}
        />

        <button onClick={deleteClickHandler}>
          <TrashIcon />
        </button>
      </div>

      <Card className="border border-solid border-black p-4 max-w-[14rem]">
        <img src={thumbnailUrl} alt={name} className="rounded-t-10px w-full" />
      </Card>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div
            className={`${
              inStock ? 'bg-[#55E322]' : 'bg-[#D80000]'
            }  px-4 py-1 w-fit`}
          >
            {inStock ? 'Ada Stok' : 'Stok Habis'}
          </div>
          <div>
            <Link to={`/products/1`}>
              <h1 className="font-bold">{name}</h1>
            </Link>
            <p>{brand}</p>
          </div>
        </div>

        <div className="text-textSecondary">Rp{localPrice}</div>
      </div>

      <div className="grid place-items-end justify-end w-full">
        <AmountControl
          amount={itemAmount}
          onAddAmount={addAmountHandler}
          onSubtractAmount={subtractAmountHandler}
          className="p-2 border-black gap-x-8"
        />
      </div>
    </Card>
  );
};

export default CartItem;
