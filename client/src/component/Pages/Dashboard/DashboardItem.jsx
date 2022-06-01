import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../../script/config/config';
import { dashboardAction } from '../../../store/dashboard-slice';
import EditIcon from '../../SVG/EditIcon';
import TrashIcon from '../../SVG/TrashIcon';
import DashboardEditModal from './DashboardEditModal';

const DashboardItem = ({
  _id = '',
  nama = '',
  brand = '',
  berat = 0,
  id_kategori = '',
  stok = 0,
  link_gambar = '',
  harga = 0,
  selected = false,
}) => {
  const dispatch = useDispatch();

  const category = useSelector(
    (state) => state.dashboard.categories[id_kategori]?.nama
  );

  const [showEditModal, setShowEditModal] = useState(false);

  const checkboxChangeHandler = () => {
    // Select dashboardItem id
    if (selected) {
      dispatch(dashboardAction.unselectItem(_id));
      return;
    }

    dispatch(dashboardAction.selectItem(_id));
  };

  const editClickHandler = () => {
    console.log(`Edit ${nama} | ${_id}`);
    setShowEditModal(true);
  };

  const deleteClickHandler = async () => {
    console.log(`Delete ${nama} | ${_id}`);

    const deleteConfirm = confirm(
      `Apakah yakin ingin menghapus produk ${nama}?`
    );

    if (!deleteConfirm) {
      return;
    }

    try {
      const deleteProductResponse = await fetch(config.apiUrl.product(_id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const deleteProductResponseJson = await deleteProductResponse.json();

      if (!deleteProductResponse.ok) {
        throw new Error('Could not delete product! Try again!');
      }

      dispatch(dashboardAction.deleteProduct(_id));
    } catch (error) {
      console.log('Failed to delete product data!');
      console.log('Dashboard Item Error');

      console.log(error.message);
    }
  };

  const hideEditModalHandler = () => {
    setShowEditModal(false);
  };

  return (
    <Fragment>
      {showEditModal && (
        <DashboardEditModal
          onHide={hideEditModalHandler}
          product={{
            _id,
            nama,
            brand,
            berat,
            id_kategori,
            stok,
            link_gambar,
            harga,
          }}
        />
      )}

      <div className="w-full h-[120px] bg-white rounded-10px border-l-4 border-solid border-l-black drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] pl-7 pr-8 py-4 grid grid-cols-[2rem_repeat(8,_1fr)] items-center justify-between text-center">
        {/* <input
          type="checkbox"
          name="check"
          onChange={checkboxChangeHandler}
          checked={selected}
          className="w-5 h-5"
        /> */}
        <div></div>

        <div className="h-full">
          <img
            src={link_gambar}
            alt={nama}
            className="h-[80px] w-full object-contain object-center"
            loading="lazy"
          />
        </div>

        <div className="font-semibold">{nama}</div>

        <div>{brand}</div>

        <div>{stok}</div>

        <div>{category}</div>

        <div>Rp. {harga}</div>

        <div>{berat} gr</div>

        <div className="flex flex-row justify-center items-center gap-x-4">
          <button onClick={editClickHandler}>
            <EditIcon className="h-5" />
          </button>

          <button onClick={deleteClickHandler}>
            <TrashIcon className="h-6" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardItem;
