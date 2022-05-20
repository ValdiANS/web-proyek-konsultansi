import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import AddToCartSuccessHandler from '../../../component/Modal/AddToCartSuccessHandler';

import Card from '../../UI/Card';

const ProductDetail = () => {
  const [showAddToCartSuccessHandler, setShowAddToCartSuccessHandler] =
    useState(false);

  const [itemAmount, setItemAmount] = useState(1);

  const price = 3500 * itemAmount;
  const localPrice = price.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);

    console.log(`Add ${productName} amount`);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));

    console.log(`Subtract ${productName} amount`);
  };

  const addToCartHandler = () => {
    setShowAddToCartSuccessHandler(true);
  };

  const hideSuccesModalHandler = () => {
    setShowAddToCartSuccessHandler(false);
  };

  return (
    <Fragment>
      {showAddToCartSuccessHandler && (
        <AddToCartSuccessHandler onHide={hideSuccesModalHandler} />
      )}

      <div className="bg-secondary pt-3 pb-24">
        <div className="container mx-auto">
          <div className="breadcumb-container">
            <Link to="/" className="text-borderSecondary">
              Home
            </Link>
          </div>

          <div className="product-container mt-8 grid grid-cols-3 gap-x-12 h-full">
            <Card className="img-slider-container p-8 bg-white h-full">
              <img
                src="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                alt="Indomie Goreng"
                className="rounded-t-10px"
              />
            </Card>

            <Card className="description-container p-8 bg-white">
              <section>
                <h1 className="font-bold text-4xl text-[#5E5E5E] mb-4">
                  Indomie Goreng
                </h1>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit libero non repellendus ipsa molestiae reiciendis
                  natus impedit tempora rem sapiente.
                </p>
              </section>
            </Card>

            <div className="flex flex-col gap-y-8">
              <Card className="p-8 bg-white">
                <h2 className="font-bold text-3xl text-[#5E5E5E] text-center mb-4">
                  Rp{localPrice}
                </h2>

                <Card className="flex flex-row justify-around items-center border border-solid border-borderSecondary">
                  <button
                    onClick={subtractAmountHandler}
                    className="w-8 h-8 rounded-full bg-primary text-white"
                  >
                    -
                  </button>
                  <span>{itemAmount}</span>
                  <button
                    onClick={addAmountHandler}
                    className="w-8 h-8 rounded-full bg-primary text-white"
                  >
                    +
                  </button>
                </Card>

                <Card className="overflow-hidden mt-4">
                  <button
                    onClick={addToCartHandler}
                    className="w-full bg-darkOrange py-2 font-semibold text-center"
                  >
                    Add to Cart
                  </button>
                </Card>
              </Card>

              <Card className="bg-white flex flex-row items-center">
                <div className="img-container py-4 px-5 border-r-8 border-solid border-black mr-5">
                  <img
                    src="https://dummyimage.com/100x100/e5e5e5/FFFFFF.png&text=Whatsapp"
                    alt="Whatsapp"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="phone-number font-bold text-3xl text-[#5E5E5E]">
                  081234567890
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
