import { XyzTransitionGroup } from '@animxyz/react';

import ProductItemCard from '../../ProductItemCard/ProductItemCard';

const RecommendationsSection = ({ className = '' }) => {
  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-4xl mb-7">
        Rekomendasi <strong className="font-bold">Toko</strong>
      </h1>

      <div className="rekomendasi-card-container">
        <XyzTransitionGroup
          appearVisible
          xyz="fade up-100% stagger-1 ease-out-back"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-8 lg:gap-x-24"
        >
          <div>
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
          </div>

          <div>
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
          </div>
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default RecommendationsSection;
