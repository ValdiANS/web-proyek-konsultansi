import Card from '../../UI/Card';
import { Link } from 'react-router-dom';

const CheckoutItem = ({
  thumbnailUrl = '',
  name = '',
  brand = '',
  price = 0,
  amount = 1,
}) => {
  const localPrice = price.toLocaleString('id-ID');

  return (
    <Card className="p-3 flex flex-row gap-x-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <Card className="border border-solid border-black p-4 max-w-[14rem]">
        <img src={thumbnailUrl} alt={name} className="rounded-t-10px w-full" />
      </Card>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div>
            <Link to={`/products/1`}>
              <h1 className="font-bold">{name}</h1>
            </Link>
            <p>{brand}</p>
          </div>
        </div>

        <div className="text-textSecondary">Rp{localPrice}</div>
      </div>

      <div className="grid place-items-end justify-end w-full font-bold">
        {amount} Pcs
      </div>
    </Card>
  );
};

export default CheckoutItem;
