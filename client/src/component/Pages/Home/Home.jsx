import 'swiper/css';

import Logo from '../../../asset/logo-mitra.png';

import Hero from './Hero/Hero';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NeedsSection from './NeedsSection/NeedsSection';
import BestSellerSection from './BestSellerSection';
import RecommendationsSection from './RecommendationsSection';
import MarqueeBrandSection from './MarqueeBrandSection';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      <CategoriesSection className="mt-16 mb-7 px-4 sm:px-0" />

      <FeaturedSection className="my-7 px-4 sm:px-0" />

      <section className="divider flex flex-row justify-center items-center gap-x-20 bg-primary p-5">
        <div className="img-container">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo Hijrah" className="w-20" />
          </a>
        </div>

        <h1 className="font-semibold text-5xl text-white">Mari Hijrah Bersama</h1>
      </section>

      <div className="bg-corak pt-4 pb-16">
        <NeedsSection className="px-4 sm:px-0" />

        <BestSellerSection className="mt-12 px-4 sm:px-0" />

        <RecommendationsSection className="mt-12 px-4 sm:px-0" />
      </div>

      <MarqueeBrandSection />
    </div>
  );
};

export default Home;
