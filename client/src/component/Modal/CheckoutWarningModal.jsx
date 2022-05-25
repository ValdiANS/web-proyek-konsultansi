import Modal from './Modal';
import WarningIcon from '../SVG/WarningIcon';

const CheckoutWarningModal = ({ onHide }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[250px] sm:w-[400px] bg-white py-4 sm:py-12 px-4 sm:px-8 relative text-center rounded-10px sm:rounded-none">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <h1 className="text-lg sm:text-2xl font-semibold text-center">
          Pilih minimal 1 produk untuk memesan
        </h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <WarningIcon />
        </div>

        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center">
          <button
            onClick={onHide}
            className="text-sm sm:text-base bg-primary w-full text-white h-full py-2 rounded-10px"
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutWarningModal;
