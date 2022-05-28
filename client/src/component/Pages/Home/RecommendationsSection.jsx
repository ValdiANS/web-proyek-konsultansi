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
              <ProductItemCard product={product} amount={1} />
            </div>
          ))}
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default RecommendationsSection;
