import { useState } from 'react';

import Card from '../../UI/Card';
import TrashIcon from '../../SVG/TrashIcon';
import AmountControl from '../../ProductItemCard/AmountControl';

const CartItem = ({}) => {
  const [itemAmount, setItemAmount] = useState(1);

  const price = itemAmount * 3500;
  const localPrice = price.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));
  };

  return (
    <Card className="border border-solid border-black p-3 flex flex-row gap-x-8">
      <div className="flex flex-col justify-between">
        <input type="checkbox" name="check" className="w-6 h-6" />

        <button>
          <TrashIcon />
        </button>
      </div>

      <Card className="border border-solid border-black p-4 max-w-[14rem]">
        <img
          src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
          alt="Indomie Goreng"
          className="rounded-t-10px w-full"
        />
      </Card>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="bg-[#55E322] px-4 py-1 w-fit">Ada stok</div>
          <div>
            <h1 className="font-bold">Indomie Goreng</h1>
            <p>Indofood</p>
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
