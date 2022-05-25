import Modal from './Modal';
import CheckmarkIcon from '../SVG/CheckmarkIcon';

const RegisterSuccessModal = ({ onHide }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[280px] sm:w-[400px] bg-white py-12 px-8 sm:px-8 relative text-center">
        <h1 className="text-2xl font-semibold">Berhasil Mendaftar</h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <div className="border-4 border-solid border-black w-24 h-24 rounded-full grid place-items-center">
            <CheckmarkIcon />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterSuccessModal;
