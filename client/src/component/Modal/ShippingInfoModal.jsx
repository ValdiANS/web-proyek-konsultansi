import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../script/config/config';
import Modal from './Modal';

const ShippingInfoModal = ({ onHide }) => {
  const navigate = useNavigate();

  const checkoutItems = useSelector((state) => state.checkout.items);
  const totalCheckoutPrice = useSelector((state) => state.checkout.totalPrice);

  const [enteredName, setEnteredName] = useState('');
  const [enteredWhatsappNumber, setEnteredWhatsappNumber] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');

  const formSubmitHandler = (e) => {
    console.log(enteredName);
    console.log(enteredWhatsappNumber);
    console.log(enteredAddress);

    let whatsappMessage = `Nama: ${enteredName}%0aNo. Whatsapp: ${enteredWhatsappNumber} %0aAlamat: ${enteredAddress} %0a%0a----------%0a%0a`;

    checkoutItems.forEach((item) => {
      whatsappMessage += `${item.nama} | ${item.kuantitas}x | Rp${item.harga} %0a | Total: ${item.totalHarga} %0a`;
    });

    whatsappMessage += `%0a----------%0aTotal: Rp${totalCheckoutPrice}`;

    window.open(
      config.chatToWhatsappLink(config.whatsappNumber, whatsappMessage)
    );

    navigate('/');

    e.preventDefault();
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const whatsappNumberChangeHandler = (e) => {
    setEnteredWhatsappNumber(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setEnteredAddress(e.target.value);
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
                value={enteredName}
                onChange={nameChangeHandler}
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
                value={enteredWhatsappNumber}
                onChange={whatsappNumberChangeHandler}
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
                value={enteredAddress}
                onChange={addressChangeHandler}
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
