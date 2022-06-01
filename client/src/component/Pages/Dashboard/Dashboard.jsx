import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { XyzTransition } from '@animxyz/react';

import { logoutAndDeleteFromLocalStorage } from '../../../store/admin-login-slice';
import {
  dashboardAction,
  getAllCategories,
  getAllProducts,
} from '../../../store/dashboard-slice';
import DashboardAddModal from './DashboardAddModal';

import DashboardItem from './DashboardItem';
import SearchIcon from '../../SVG/SearchIcon';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const isSearchInputValid = searchValue.trim().length > 0;

  const isAdminLogin = useSelector((state) => state.admin.isAdminLogin);
  const adminName = useSelector((state) => state.admin.adminInfo.nama);

  const categories = useSelector((state) => state.dashboard.categories);
  const products = useSelector((state) => state.dashboard.products);
  const isAllSelected = useSelector((state) => state.dashboard.isAllSelected);

  const [productsKeys, setProductsKeys] = useState([...Object.keys(products)]);

  useEffect(() => {
    setSearchValue('');
    setProductsKeys([...Object.keys(products)]);
  }, [products]);

  if (!isAdminLogin) {
    navigate('/admin');
  }

  if (
    Object.keys(categories).length === 0 &&
    Object.keys(products).length === 0
  ) {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }

  const checkAllChangeHandler = () => {
    if (!isAllSelected) {
      dispatch(dashboardAction.selectAllItem());
      return;
    }

    dispatch(dashboardAction.unselectAllItem());
  };

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    const filteredProductKeys = Object.keys(products).filter((productKey) =>
      products[productKey].nama
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim())
    );

    setProductsKeys(filteredProductKeys);
  };

  const logoutHandler = () => {
    dispatch(logoutAndDeleteFromLocalStorage());

    navigate('/admin');
  };

  const showAddProductModalHandler = () => {
    setShowAddProductModal(true);
  };

  const hideAddProductModalHandler = () => {
    setShowAddProductModal(false);
  };

  const deleteAllHandler = () => {
    dispatch(dashboardAction.deleteAllProduct());
  };

  const resetSearchHandler = () => {
    setSearchValue('');
  };

  return (
    <Fragment>
      {showAddProductModal && (
        <DashboardAddModal onHide={hideAddProductModalHandler} />
      )}

      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="px-8 mb-16 pt-4">
          <div className="mb-4 flex flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold">Dashboard</h1>
              <h2 className="text-2xl font-semibold">Halo, {adminName}</h2>
            </div>

            <button
              onClick={logoutHandler}
              className="font-semibold bg-[#D80000] rounded-10px px-4 py-2 text-white h-fit text-lg"
            >
              Logout
            </button>
          </div>

          <div className="flex flex-row justify-between gap-x-4 mb-4">
            <button
              onClick={showAddProductModalHandler}
              className="font-semibold bg-[#111315] rounded-10px px-4 py-2 text-white h-fit "
            >
              Tambah Produk
            </button>

            {/* {isAllSelected && (
              <button
                onClick={deleteAllHandler}
                className="font-semibold bg-[#D80000] rounded-10px px-4 py-2 text-white h-fit"
              >
                Hapus Semua
              </button>
            )} */}

            <form
              onSubmit={searchFormSubmitHandler}
              className="search-bar bg-primary rounded-10px flex flex-rows items-center w-full max-w-md overflow-hidden"
            >
              <div className="relative w-full flex flex-row items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white pl-8 pr-10 py-2 rounded-10px w-full border-2 border-solid border-primary border-r-0 focus:outline-none"
                  value={searchValue}
                  onChange={searchChangeHandler}
                />

                <XyzTransition xyz="fade-100% in-up-100% out-down-100% ease-in-out-back duration-3">
                  {isSearchInputValid && (
                    <button
                      type="reset"
                      className="absolute right-3 text-2xl"
                      onClick={resetSearchHandler}
                    >
                      &#10006;
                    </button>
                  )}
                </XyzTransition>
              </div>

              <button type="submit" className="w-7 mx-5">
                <SearchIcon className="w-full h-full" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-[2rem_repeat(8,_1fr)] items-center border-b border-b-black border-solid pb-2 px-8 text-center mb-4">
            {/* <input
              type="checkbox"
              name="allCheckbox"
              checked={isAllSelected}
              onChange={checkAllChangeHandler}
              className="w-5 h-5"
            /> */}
            <div></div>

            <h3 className="text-[#858585] ">Gambar</h3>
            <h3 className="text-[#858585] ">Nama</h3>
            <h3 className="text-[#858585] ">Brand</h3>
            <h3 className="text-[#858585] ">Stok</h3>
            <h3 className="text-[#858585] ">Kategori</h3>
            <h3 className="text-[#858585] ">Harga</h3>
            <h3 className="text-[#858585] ">Berat</h3>
            <h3 className="text-[#858585] ">Aksi</h3>
          </div>

          <div className="space-y-2">
            {Object.keys(categories).length !== 0 &&
              Object.keys(products).length !== 0 &&
              productsKeys.map((productId) => (
                <DashboardItem
                  key={productId}
                  _id={products[productId]?._id}
                  nama={products[productId]?.nama}
                  brand={products[productId]?.brand}
                  berat={products[productId]?.berat}
                  id_kategori={products[productId]?.id_kategori}
                  stok={products[productId]?.stok}
                  link_gambar={products[productId]?.link_gambar}
                  harga={products[productId]?.harga}
                  selected={products[productId]?.selected}
                />
              ))}
          </div>

          {productsKeys.length === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-center">
                Product tidak ada
              </h2>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
