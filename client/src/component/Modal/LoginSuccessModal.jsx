import Modal from './Modal';

const LoginSuccessModal = ({ onHide, username }) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[400px] bg-white py-12 px-8 relative text-center">
        <h1 className="text-2xl font-semibold">Berhasil Masuk</h1>

        <div className="text-7xl m-8 flex flex-row justify-center">
          <div className="border-4 border-solid border-black w-24 h-24 rounded-full grid place-items-center">
            🗸
          </div>
        </div>

        <h2 className="text-2xl font-semibold">
          Selamat datang <br />
          {username}
        </h2>
      </div>
    </Modal>
  );
};

export default LoginSuccessModal;
