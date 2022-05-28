import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { XyzTransitionGroup } from '@animxyz/react';

import CategoryCard from './CategoryCard';
import { fetchCategoriesData } from '../../../../store/category-slice';

const CategoriesSection = ({ className = '' }) => {
  const dispatch = useDispatch();

  const [categoriesData, boxColor] = useSelector((state) => [
    state.categories.categories,
    state.categories.boxColor,
  ]);

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, []);

  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-xl sm:text-4xl mb-7">
        Browse by <strong className="font-bold">Categories</strong>
      </h1>

      <div className="categories-card-container">
        <XyzTransitionGroup
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10"
          appearVisible
          xyz="fade-100% right-100% ease-in-out-back stagger-1"
        >
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={category._id}
              className={`w-full h-40 ${boxColor[index]}`}
              to={`/categories/${category._id}`}
              title={category.nama}
            />
          ))}

          {/* <CategoryCard
            className="w-full h-40 bg-[#DCA047]/75"
            to="/categories/biskuit"
            title="Biskuit"
          />

          <CategoryCard
            className="w-full h-40 bg-[#0B0F52]/75"
            to="/categories/biskuit"
            title="Biskuit"
          />

          <CategoryCard
            className="w-full h-40 bg-[#111315]/75"
            to="/categories/biskuit"
            title="Biskuit"
          /> */}
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default memo(CategoriesSection);
