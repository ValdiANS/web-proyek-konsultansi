import { Link } from 'react-router-dom';
import CheckmarkIcon from '../SVG/CheckmarkIcon';
import Modal from './Modal';

const AddToCartSuccessHandler = ({ onHide }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[250px] sm:w-[400px] bg-white py-4 sm:py-12 px-4 sm:px-8 relative text-center rounded-10px sm:rounded-none">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <h1 className="text-lg sm:text-2xl font-semibold">
          Produk Berhasil <br /> Ditambahkan
        </h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <div className="border-4 border-solid border-black w-24 h-24 rounded-full grid place-items-center">
            <CheckmarkIcon />
          </div>
        </div>

        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center">
          <button
            onClick={onHide}
            className="text-sm sm:text-base bg-primary w-full text-white h-full py-2 rounded-10px"
          >
            OK
          </button>

          <Link
            to="/cart"
            className="w-full max-w-[250px] sm:max-w-[350px] bg-darkOrange px-x py-2 text-white block text-sm sm:text-base rounded-10px"
          >
            Keranjang
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCartSuccessHandler;
