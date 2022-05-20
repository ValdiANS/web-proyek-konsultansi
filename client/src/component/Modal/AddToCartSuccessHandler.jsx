import { Link } from 'react-router-dom';
import Modal from './Modal';

const AddToCartSuccessHandler = ({ onHide }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[400px] bg-white py-12 px-8 relative text-center">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <h1 className="text-2xl font-semibold">
          Produk Berhasil <br /> Ditambahkan
        </h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <div className="border-4 border-solid border-black w-24 h-24 rounded-full grid place-items-center">
            🗸
          </div>
        </div>

        <Link
          to="/cart"
          className="w-full max-w-[350px] bg-primary px-x py-2 text-white block mt-12"
        >
          Lihat Keranjang
        </Link>
      </div>
    </Modal>
  );
};

export default AddToCartSuccessHandler;
