import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { XyzTransitionGroup } from '@animxyz/react';
import ProductItemCard from '../../ProductItemCard/ProductItemCard';

import { fetchBestSellersData } from '../../../store/best-seller-slice';

const BestSellerSection = ({ className = '' }) => {
  const dispatch = useDispatch();

  const bestSellers = useSelector((state) => state['best-sellers'].bestSellers);

  useEffect(() => {
    dispatch(fetchBestSellersData());
  }, []);

  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-xl sm:text-4xl mb-7">
        Sort by <strong className="font-bold">Terlaris</strong>
      </h1>

      <div className="terlaris-card-container">
        <XyzTransitionGroup
          appearVisible
          xyz="fade up-100% stagger-1 ease-out-back"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-between gap-x-2 gap-y-2 sm:gap-8 lg:gap-x-24"
        >
          {bestSellers.map((product) => (
            <div key={product._id}>
              <ProductItemCard
                id={product._id}
                productName={product.nama}
                thumbnailUrl={`/image/${product.link_gambar}`}
                price={product.harga}
              />
            </div>
          ))}
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default BestSellerSection;
