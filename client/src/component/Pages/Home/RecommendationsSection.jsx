import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { XyzTransitionGroup } from '@animxyz/react';

import ProductItemCard from '../../ProductItemCard/ProductItemCard';
import { fetchRecommendationsData } from '../../../store/recommendation-slice';

const RecommendationsSection = ({ className = '' }) => {
  const dispatch = useDispatch();

  const recommendations = useSelector(
    (state) => state.recommendations.recommendations
  );

  useEffect(() => {
    dispatch(fetchRecommendationsData());
  }, []);

  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-xl sm:text-4xl mb-7">
        Rekomendasi <strong className="font-bold">Toko</strong>
      </h1>

      <div className="rekomendasi-card-container">
        <XyzTransitionGroup
          appearVisible
          xyz="fade up-100% stagger-1 ease-out-back"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-x-2 gap-y-2 sm:gap-8 lg:gap-x-24"
        >
          {[...recommendations].reverse().map((product) => (
            <div key={product._id}>
              <ProductItemCard
                id={product._id}
                productName={product.nama}
                thumbnailUrl={`/image/${product.link_gambar}`}
                price={product.harga}
              />
            </div>
          ))}

          {/* <div>
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+2"
              price={3500}
            />
          </div>

          <div>
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+3"
              price={3500}
            />
          </div>

          <div>
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+4"
              price={3500}
            />
          </div> */}
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default RecommendationsSection;
