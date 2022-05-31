import Modal from './Modal';

const LoginFailedModal = ({ onHide, message = 'Akun tidak ada' }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[300px] sm:w-[400px] bg-white py-12 px-8 relative text-center">
        <h1 className="text-2xl font-semibold">Gagal Masuk</h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <div className="border-4 border-solid border-black w-24 h-24 rounded-full grid place-items-center">
            &#10006;
          </div>
        </div>

        <h2 className="text-2xl font-semibold">{message}</h2>
      </div>
    </Modal>
  );
};

export default LoginFailedModal;
