import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../../script/config/config';
import { dashboardAction } from '../../../store/dashboard-slice';
import Modal from '../../Modal/Modal';

const DashboardEditModal = ({ onHide = () => {}, product = {} }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.dashboard.categories);

  const [nameValue, setNameValue] = useState(product.nama);
  const [brandValue, setBrandValue] = useState(product.brand);
  const [stockValue, setStockValue] = useState(product.stok);
  const [idCategoryValue, setIdCategoryValue] = useState(product.id_kategori);
  const [priceValue, setPriceValue] = useState(product.harga);
  const [weightValue, setWeightValue] = useState(product.berat);
  const [linkValue, setLinkValue] = useState(product.link_gambar);

  const editSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const updateProductResponse = await fetch(
        config.apiUrl.product(product._id),
        {
          method: 'PUT',
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
        }
      );

      if (!updateProductResponse.ok) {
        throw new Error('Could not update product! Try again!');
      }

      dispatch(
        dashboardAction.editProduct({
          _id: product._id,
          nama: nameValue,
          brand: brandValue,
          berat: weightValue,
          id_kategori: idCategoryValue,
          stok: stockValue,
          link_gambar: linkValue,
          harga: priceValue,
        })
      );

      alert(`Edit data ${nameValue} berhasil!`);

      onHide();
    } catch (error) {
      console.log('Failed to edit product!');
      console.log('Dashbard Edit Modal Error');

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
    setNameValue(product.nama);
    setBrandValue(product.brand);
    setStockValue(product.stok);
    setIdCategoryValue(product.id_kategori);
    setPriceValue(product.harga);
    setWeightValue(product.berat);
    setLinkValue(product.link_gambar);
  };

  return (
    <Modal onHide={onHide} className="container mx-auto">
      <div className="relative w-full bg-white p-8">
        <button onClick={onHide} className="absolute -top-7 -right-6 text-5xl">
          ⓧ
        </button>

        <h1 className="text-3xl font-semibold">Edit Produk</h1>

        <form onSubmit={editSubmitHandler}>
          <div className="flex flex-row justify-center my-4">
            <img
              src={product.link_gambar}
              alt={product.nama}
              className="h-[150px] w-full object-contain object-center"
            />
          </div>

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
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DashboardEditModal;
