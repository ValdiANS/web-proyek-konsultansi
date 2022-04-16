import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';

import 'swiper/css';

import Logo from '../../../asset/logo-mitra.png';

import Hero from './Hero/Hero';
import Card from '../../UI/Card';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      <section className="categories container mx-auto mt-16 mb-7 px-4 sm:px-0">
        <h1 className="font-light text-4xl mb-7">
          Browse by <strong className="font-bold">Categories</strong>
        </h1>

        <div className="categories-card-container">
          <XyzTransitionGroup
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
            appearVisible
            xyz="fade-100% right-100% ease-in-out-back stagger-1"
          >
            <a href="#" className="w-full">
              <Card className="font-bold px-8 py-6 h-40 w-full bg-[#1F1F21] text-white">
                <small className="text-sm">Best Sellers</small>

                <h2 className="text-xl">
                  Makanan
                  <br />
                  Ringan
                </h2>
              </Card>
            </a>

            <a href="#" className="w-full">
              <Card className="font-bold px-8 py-6 h-40 w-full bg-[#DCA047]/75 text-white">
                <small className="text-sm">Best Sellers</small>

                <h2 className="text-xl">Biskuit</h2>
              </Card>
            </a>

            <a href="#" className="w-full">
              <Card className="font-bold px-8 py-6 h-40 w-full bg-[#0B0F52]/75 text-white">
                <small className="text-sm">Best Sellers</small>

                <h2 className="text-xl">Biskuit</h2>
              </Card>
            </a>

            <a href="#" className="w-full">
              <Card className="font-bold px-8 py-6 h-40 w-full bg-[#111315]/75 text-white">
                <small className="text-sm">Best Sellers</small>

                <h2 className="text-xl">Biskuit</h2>
              </Card>
            </a>
          </XyzTransitionGroup>
        </div>
      </section>

      <section className="featured-brand container mx-auto my-7 px-4 sm:px-0">
        <h1 className="font-light text-4xl mb-7">
          Featured <strong className="font-bold">Brand</strong>
        </h1>

        <div className="brand-card-container">
          <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={24}
              className="cursor-grab active:cursor-grabbing"
            >
              <SwiperSlide className="w-fit-important">
                <Card>
                  <div className="img-container h-36 mb-5">
                    <a href="#">
                      <img
                        src="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+1"
                        alt="Brand 1"
                        className="h-full object-contain object-left rounded-10px"
                      />
                    </a>
                  </div>

                  <div className="brand-card-conent">
                    <a href="#">
                      <span>Wings Food</span>
                      <br />
                      <strong>Indomie</strong>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>

              <SwiperSlide className="w-fit-important">
                <Card>
                  <div className="img-container h-36 mb-5">
                    <a href="#">
                      <img
                        src="https://dummyimage.com/1280x768/e5e5e5/FFFFFF.png&text=Placeholder+Brand+2"
                        alt="Brand 2"
                        className="h-full object-contain object-left rounded-10px"
                      />
                    </a>
                  </div>

                  <div className="brand-card-conent">
                    <a href="#">
                      <span>Wings Food</span>
                      <br />
                      <strong>Kapal Api</strong>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>

              <SwiperSlide className="w-fit-important">
                <Card>
                  <div className="img-container h-36 mb-5">
                    <a href="#">
                      <img
                        src="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+3"
                        alt="Brand 1"
                        className="h-full object-contain object-left rounded-10px"
                      />
                    </a>
                  </div>

                  <div className="brand-card-conent">
                    <a href="#">
                      <span>Wings Food</span>
                      <br />
                      <strong>Indomie</strong>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>

              <SwiperSlide className="w-fit-important">
                <Card>
                  <div className="img-container h-36 mb-5">
                    <a href="#">
                      <img
                        src="https://dummyimage.com/1280x768/e5e5e5/FFFFFF.png&text=Placeholder+Brand+2"
                        alt="Brand 2"
                        className="h-full object-contain object-left rounded-10px"
                      />
                    </a>
                  </div>

                  <div className="brand-card-conent">
                    <a href="#">
                      <span>Wings Food</span>
                      <br />
                      <strong>Kapal Api</strong>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>

              <SwiperSlide className="w-fit-important">
                <Card>
                  <div className="img-container h-36 mb-5">
                    <a href="#">
                      <img
                        src="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+5"
                        alt="Brand 1"
                        className="h-full object-contain object-left rounded-10px"
                      />
                    </a>
                  </div>

                  <div className="brand-card-conent">
                    <a href="#">
                      <span>Wings Food</span>
                      <br />
                      <strong>Indomie</strong>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>
            </Swiper>
          </XyzTransition>
        </div>
      </section>

      <section className="divider flex flex-row justify-center items-center gap-x-20 bg-primary p-5">
        <div className="img-container">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo Hijrah" className="w-20" />
          </a>
        </div>

        <h1 className="font-semibold text-5xl">Mari Hijrah Bersama</h1>
      </section>

      <div className="bg-corak pt-4 pb-16">
        <section className="needs container mx-auto px-4 sm:px-0">
          <h1 className="font-light text-4xl mb-7">
            Sort by <strong className="font-bold">Needs</strong>
          </h1>

          <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
            <div className="needs-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-20 gap-y-8">
              <Card className="flex flex-row w-full h-36 overflow-hidden bg-white">
                <div className="img-container w-full h-full">
                  <img
                    src="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
                    alt="Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="needs-content w-full pr-2 pl-4 py-8">
                  <h1 className="font-semibold text-xl">Makanan</h1>
                  <a href="#" className="font-bold text-sm hover:underline">
                    Lihat
                  </a>
                </div>
              </Card>

              <Card className="flex flex-row w-full h-36 overflow-hidden bg-white">
                <div className="img-container w-full h-full">
                  <img
                    src="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
                    alt="Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="needs-content w-full pr-2 pl-4 py-8">
                  <h1 className="font-semibold text-xl">Makanan</h1>
                  <a href="#" className="font-bold text-sm hover:underline">
                    Lihat
                  </a>
                </div>
              </Card>

              <Card className="flex flex-row w-full h-36 overflow-hidden bg-white">
                <div className="img-container w-full h-full">
                  <img
                    src="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
                    alt="Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="needs-content w-full pr-2 pl-4 py-8">
                  <h1 className="font-semibold text-xl">Makanan</h1>
                  <a href="#" className="font-bold text-sm hover:underline">
                    Lihat
                  </a>
                </div>
              </Card>

              <Card className="flex flex-row w-full h-36 overflow-hidden bg-white">
                <div className="img-container w-full h-full">
                  <img
                    src="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
                    alt="Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="needs-content w-full pr-2 pl-4 py-8">
                  <h1 className="font-semibold text-xl">Makanan</h1>
                  <a href="#" className="font-bold text-sm hover:underline">
                    Lihat
                  </a>
                </div>
              </Card>
            </div>
          </XyzTransition>
        </section>

        <section className="terlaris mt-12 container mx-auto px-4 sm:px-0">
          <h1 className="font-light text-4xl mb-7">
            Sort by <strong className="font-bold">Terlaris</strong>
          </h1>

          <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
            <div className="terlaris-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-24">
              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="terlaris-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="terlaris-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="terlaris-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="terlaris-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>
            </div>
          </XyzTransition>
        </section>

        <section className="rekomendasi mt-12 container mx-auto px-4 sm:px-0">
          <h1 className="font-light text-4xl mb-7">
            Rekomendasi <strong className="font-bold">Toko</strong>
          </h1>

          <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
            <div className="rekomendasi-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-24">
              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="rekomendasi-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="rekomendasi-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="rekomendasi-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>

              <Card className="border-0.5 border-solid border-textPrimary p-6 bg-white">
                <div className="img-container">
                  <img
                    src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                    alt="Thumbnail"
                    className="rounded-t-10px"
                  />
                </div>

                <div className="rekomendasi-card-content mt-5">
                  <div className="font-bold">Indomie Goreng</div>
                  <div>1 pcs</div>

                  <div className="price text-textSecondary">Rp3.500,00</div>

                  <Card className="amount-container w-fit border border-solid border-borderSecondary px-4 py-2 mt-2 flex flex-row gap-x-4">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </Card>

                  <Card className="overflow-hidden mt-3">
                    <button className="w-full bg-darkOrange py-2 font-semibold text-center">
                      Add to Cart
                    </button>
                  </Card>
                </div>
              </Card>
            </div>
          </XyzTransition>
        </section>
      </div>

      <div className="brand-carousel w-full bg-secondary py-6">
        <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={110}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="cursor-grab active:cursor-grabbing"
          >
            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+1"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+2"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+3"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+4"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+5"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+6"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+7"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+8"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <img
                src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+9"
                alt="Brand"
                className="h-36 object-cover object-center rounded-10px"
              />
            </SwiperSlide>
          </Swiper>
        </XyzTransition>
      </div>
    </div>
  );
};

export default Home;
