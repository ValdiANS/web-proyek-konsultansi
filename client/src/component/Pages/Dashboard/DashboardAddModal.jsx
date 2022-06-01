import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../../script/config/config';
import { dashboardAction } from '../../../store/dashboard-slice';
import Modal from '../../Modal/Modal';

const DashboardAddModal = ({ onHide = () => {} }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.dashboard.categories);

  const [nameValue, setNameValue] = useState('');
  const [brandValue, setBrandValue] = useState('');
  const [stockValue, setStockValue] = useState(0);
  const [idCategoryValue, setIdCategoryValue] = useState(
    '62933556a85352dc854e7fe8'
  );
  const [priceValue, setPriceValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [linkValue, setLinkValue] = useState('');

  const addSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const addProductResponse = await fetch(config.apiUrl.product(''), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: nameValue,
          brand: brandValue,
          berat: weightValue,
          id_kategori: idCategoryValue,
          harga: priceValue,
          stok: stockValue,
          link_gambar: linkValue,
        }),
      });

      if (!addProductResponse.ok) {
        throw new Error('Could not update product! Try again!');
      }

      const addProductResponseJson = await addProductResponse.json();

      dispatch(
        dashboardAction.addProduct({
          _id: addProductResponseJson.id,
          nama: nameValue,
          brand: brandValue,
          berat: weightValue,
          id_kategori: idCategoryValue,
          stok: stockValue,
          link_gambar: linkValue,
          harga: priceValue,
        })
      );

      alert(`Tambah data ${nameValue} berhasil!`);

      onHide();
    } catch (error) {
      console.log('Failed to Add product!');
      console.log('Dashbard Add Modal Error');

      console.log(error.message);
    }
  };

  const nameValueChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const brandValueChangeHandler = (e) => {
    setBrandValue(e.target.value);
  };

  const stockValueChangeHandler = (e) => {
    setStockValue(e.target.value);
  };

  const idCategoryValueChangeHandler = (e) => {
    setIdCategoryValue(e.target.value);
  };

  const priceValueChangeHandler = (e) => {
    setPriceValue(e.target.value);
  };

  const weightValueChangeHandler = (e) => {
    setWeightValue(e.target.value);
  };

  const linkValueChangeHandler = (e) => {
    setLinkValue(e.target.value);
  };

  const resetHandler = () => {
    setNameValue('');
    setBrandValue('');
    setStockValue(0);
    setIdCategoryValue('62933556a85352dc854e7fe8');
    setPriceValue(0);
    setWeightValue(0);
    setLinkValue('');
  };

  return (
    <Modal onHide={onHide} className="container mx-auto">
      <div className="relative w-full bg-white p-8">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <h1 className="text-3xl font-semibold mb-4">Tambah Produk</h1>

        <form onSubmit={addSubmitHandler}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col col-start-1 col-end-3">
              <label htmlFor="name" className="text-lg font-light">
                Nama Produk
              </label>
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={nameValueChangeHandler}
                id="name"
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="brand" className="text-lg font-light">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={brandValue}
                onChange={brandValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Stok" className="text-lg font-light">
                Stok
              </label>
              <input
                type="number"
                min={1}
                name="Stok"
                id="Stok"
                value={stockValue}
                onChange={stockValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-lg font-light">
                Kategori
              </label>
              <select
                name="category"
                id="category"
                value={idCategoryValue}
                onChange={idCategoryValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
              >
                {Object.keys(categories).map((categoryId) => (
                  <option key={categoryId} value={categoryId}>
                    {categories[categoryId].nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="price" className="text-lg font-light">
                Harga
              </label>
              <input
                type="number"
                min={0}
                name="price"
                id="price"
                value={priceValue}
                onChange={priceValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="weight" className="text-lg font-light">
                Berat
              </label>
              <input
                type="number"
                min={0}
                name="weight"
                id="weight"
                value={weightValue}
                onChange={weightValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="link" className="text-lg font-light">
                Link Gambar Produk
              </label>
              <input
                type="text"
                name="link"
                id="link"
                value={linkValue}
                onChange={linkValueChangeHandler}
                className="border-b border-solid border-b-black px-2 py-1"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-row justify-end gap-x-4 mt-4">
            <button
              type="button"
              onClick={resetHandler}
              className="bg-[#D80000] px-4 py-2 text-white rounded-10px text-lg font-semibold"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-[#111315] px-4 py-2 text-white rounded-10px text-lg font-semibold"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DashboardAddModal;
