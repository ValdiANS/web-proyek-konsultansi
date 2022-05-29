import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CategoryCard from '../Home/CategoriesSection/CategoryCard';
import ProductItemCard from '../../ProductItemCard/ProductItemCard';
import AppHeader from '../../Layout/AppHeader';
import AppFooter from '../../Layout/AppFooter';
import Navbar from '../../Nav/Navbar';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';
import MobileNavbar from '../../Nav/MobileNavbar';

const boxBgColor = {
  minuman: 'bg-[#1F1F21]',
  rokok: 'bg-[#E5B875]',
  shampo: 'bg-[#484B7D]',
  'sabun batang': 'bg-[#4C4E4F]',
  'sabun cuci': 'bg-[#1F1F21]',
  ketchap: 'bg-[#E5B875]',
  'minuman sachet': 'bg-[#484B7D]',
  odol: 'bg-[#4C4E4F]',
  'sikat gigi': 'bg-[#1F1F21]',
  mie: 'bg-[#E5B875]',
  'lada bubuk': 'bg-[#484B7D]',
  'makanan ringan': 'bg-[#4C4E4F]',
  obat: 'bg-[#1F1F21]',
  koyo: 'bg-[#E5B875]',
  skincare: 'bg-[#484B7D]',
  korek: 'bg-[#4C4E4F]',
  pampers: 'bg-[#1F1F21]',
};

const Categories = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const params = useParams();
  const { category: categoryId } = params;

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryData, setCategoryData] = useState({ nama: '' });

  useEffect(() => {
    const fetchCategoryInfo = async () => {
      const response = await fetch(`${config.apiUrl.category(categoryId)}`);

      if (!response.ok) {
        throw new Error('Could not fetch category data!');
      }

      const respData = await response.json();

      setCategoryData(respData.data);
    };

    const fetchCategoryProducts = async () => {
      const response = await fetch(`${config.apiUrl.products}`);

      if (!response.ok) {
        throw new Error('Could not fetch category products data!');
      }

      const respData = await response.json();

      const filteredProducts = respData.data.filter(
        (product) => product.id_kategori === categoryId
      );

      setCategoryProducts(filteredProducts);
    };

    try {
      fetchCategoryInfo();
      fetchCategoryProducts();
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  }, []);

  return (
    <Fragment>
      <AppHeader>
        {screenWidth <= screenConfig.sm && (
          <MobileNavbar
            hideSearchBar
            hideLoginBtn
            titleText={categoryData.nama}
          />
        )}
        {screenWidth > screenConfig.sm && <Navbar />}
      </AppHeader>

      <div className="container mx-auto mt-3 mb-24 px-4 sm:px-0">
        <div className="breadcumb-container hidden sm:block">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <div className="flex flex-row justify-center mt-4 mb-12">
          <CategoryCard
            className={`w-full h-40 max-w-xs ${
              boxBgColor[categoryData.nama.toLowerCase()]
            }`}
            to={`/categories/${categoryData._id}`}
            title={categoryData.nama}
          />
        </div>

        <section>
          <h1 className="font-light text-xl sm:text-4xl mb-4">
            <strong className="font-bold">{categoryData.nama}</strong> Untuk
            Temani Hari
          </h1>

          <div className="item-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-2 sm:gap-8 lg:gap-x-24">
            {categoryProducts.map((product) => (
              <ProductItemCard key={product._id} product={product} amount={1} />
            ))}
          </div>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

export default Categories;
