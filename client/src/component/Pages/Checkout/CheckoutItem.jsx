import Card from '../../UI/Card';
import { Link } from 'react-router-dom';

const CheckoutItem = ({
  _id = '',
  thumbnailUrl = '',
  name = '',
  brand = '',
  price = 0,
  amount = 1,
}) => {
  const localPrice = price.toLocaleString('id-ID');

  return (
    <Card className="px-4 sm:p-3 flex flex-row gap-x-8 gap-y-2 sm:shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <Card className="w-full sm:border sm:border-solid sm:border-black sm:p-4 max-w-[80px] sm:max-w-[150px]">
        <img
          src={thumbnailUrl}
          alt={name}
          className="rounded-t-10px w-full h-[80px] sm:h-[150px] object-contain object-center"
        />
      </Card>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div>
            <Link to={`/products/${_id}`}>
              <h1 className="font-bold">{name}</h1>
            </Link>
            <p>{brand}</p>
          </div>
        </div>

        <div className="text-textSecondary">Rp{localPrice}</div>
      </div>

      <div className="grid place-items-end justify-end whitespace-nowrap font-bold">
        {amount} x
      </div>
    </Card>
  );
};

export default CheckoutItem;
