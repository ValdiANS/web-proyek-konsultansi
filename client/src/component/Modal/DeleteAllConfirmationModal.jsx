import Modal from './Modal';

const DeleteAllConfirmationModal = ({
  onDeleteAll = () => {},
  onHide = () => {},
}) => {
  return (
    <Modal onHide={onHide}>
      <div className="w-[250px] sm:w-[400px] bg-white py-4 sm:py-12 px-4 sm:px-8 relative text-center rounded-10px sm:rounded-none">
        <h1 className="text-lg sm:text-2xl font-semibold text-center">
          Apakah anda yakin untuk menghapus semua keranjang?
        </h1>

        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center mt-7">
          <button
            onClick={onDeleteAll}
            className="text-sm sm:text-base bg-[#D80000]/70 w-full text-white h-full py-2 rounded-10px"
          >
            Hapus
          </button>

          <button
            onClick={onHide}
            className="text-sm sm:text-base bg-primary w-full text-white h-full py-2 rounded-10px"
          >
            Batal
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAllConfirmationModal;
