import { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import AmountControl from './AmountControl';

const ProductItemCard = ({
  id = 0,
  productName = '',
  thumbnailUrl = '',
  amount = 1,
  price = 0,
}) => {
  const [itemAmount, setItemAmount] = useState(amount);

  const localPrice = price.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);

    console.log(`Add ${productName} amount`);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));

    console.log(`Subtract ${productName} amount`);
  };

  return (
    <Card className="p-6 bg-white shadow-[2px_4px_10px_rgba(0,0,0,0.1)]">
      <div className="img-container">
        <img src={thumbnailUrl} alt={productName} className="rounded-t-10px" />
      </div>

      <div className="terlaris-card-content mt-5">
        <Link to={`/products/${id}`} className="font-bold hover:underline">
          {productName}
        </Link>
        <div>{itemAmount} pcs</div>

        <div className="price text-textSecondary">Rp{localPrice}</div>

        <AmountControl
          className="px-4 py-2 mt-2"
          amount={itemAmount}
          onAddAmount={addAmountHandler}
          onSubtractAmount={subtractAmountHandler}
        />

        <Card className="overflow-hidden mt-3">
          <button className="w-full bg-darkOrange py-2 font-semibold text-center">
            Add to Cart
          </button>
        </Card>
      </div>
    </Card>
  );
};

export default ProductItemCard;
