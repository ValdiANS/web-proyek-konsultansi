import Card from '../../UI/Card';
import { Link } from 'react-router-dom';

const CheckoutItemMobile = ({
  thumbnailUrl = '',
  name = '',
  brand = '',
  price = 0,
  amount = 1,
}) => {
  const localPrice = price.toLocaleString('id-ID');

  return (
    <Card className="px-4 flex flex-row items-center justify-between gap-x-3">
      <Card className="w-24">
        <img src={thumbnailUrl} alt={name} className="w-full" loading="lazy" />
      </Card>

      <div className="flex flex-col justify-between ">
        <div>
          <div>
            <Link to={`/products/1`}>
              <h1 className="font-bold">{name}</h1>
            </Link>
            <small>{brand}</small>
          </div>
        </div>
      </div>

      <div className="grid place-items-end justify-end font-bold">
        {amount} x
      </div>

      <div className="font-semibold">Rp{localPrice}</div>
    </Card>
  );
};

export default CheckoutItemMobile;
