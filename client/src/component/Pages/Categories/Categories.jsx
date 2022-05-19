import { Link } from 'react-router-dom';

import CategoryCard from '../Home/CategoriesSection/CategoryCard';
import ProductItemCard from '../../ProductItemCard/ProductItemCard';

const Categories = () => {
  return (
    <div className="container mx-auto mt-3 mb-24">
      <div className="breadcumb-container">
        <Link to="/" className="text-borderSecondary">
          Home
        </Link>
      </div>

      <div className="flex flex-row justify-center mt-4 mb-12">
        <CategoryCard
          className="w-full h-40 max-w-xs bg-[#1F1F21]"
          to="/categories/makanan-ringan"
          title="Makanan Ringan"
        />
      </div>

      <section>
        <h1 className="font-light text-4xl mb-4">
          <strong className="font-bold">Makanan Ringan</strong> Untuk Temani
          Hari
        </h1>

        <div className="item-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 lg:gap-x-24">
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />

          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
          <ProductItemCard
            id={1}
            productName="Indomie Goreng"
            thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
            price={3500}
          />
        </div>
      </section>
    </div>
  );
};

export default Categories;
