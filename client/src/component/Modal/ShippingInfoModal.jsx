import Modal from './Modal';

const ShippingInfoModal = ({ onHide }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onHide={onHide}>
      <div className="w-[320px] sm:w-[400px] bg-white py-12 px-8 relative">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <form onSubmit={formSubmitHandler}>
          <h1 className="mb-4 text-3xl font-semibold">
            Informasi <br /> Pengiriman
          </h1>

          <div className="space-y-4">
            <div className="input flex flex-col">
              <label htmlFor="name" className="text-lg">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="border-b border-b-solid border-b-black"
              />
            </div>

            <div className="input flex flex-col">
              <label htmlFor="noWA" className="text-lg">
                No. Whatsapp
              </label>
              <input
                type="text"
                id="noWA"
                className="border-b border-b-solid border-b-black"
              />
            </div>

            <div className="input flex flex-col">
              <label htmlFor="address" className="text-lg">
                Alamat
              </label>
              <textarea
                type="text"
                id="address"
                className="border-b border-b-solid border-b-black"
              ></textarea>
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="w-full bg-[#4E9F3D] px-x py-2 text-white rounded-10px mt-8"
              >
                LANJUTKAN KE WHATSAPP
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default ShippingInfoModal;
