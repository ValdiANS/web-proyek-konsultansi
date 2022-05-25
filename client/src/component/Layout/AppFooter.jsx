import { memo } from 'react';
import { createPortal } from 'react-dom';

import Logo from '../../asset/logo-mitra.png';

const AppFooter = ({ hideOnMobile = false }) => {
  const footerContent = (
    <div
      className={`px-4 py-16 bg-primary ${
        hideOnMobile ? 'hidden' : 'flex'
      } flex-col-reverse justify-center gap-x-10 gap-y-10 overflow-x-hidden sm:flex-row`}
    >
      <div className="maps w-full max-w-screen-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60912418492!2d107.5731166770536!3d-6.903273917378882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1650031643605!5m2!1sen!2sid"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </div>

      <div className="w-full text-white space-y-7">
        <div className="flex flex-row items-center gap-x-8 sm:gap-x-20">
          <a href="/" className="logo w-fit block">
            <img src={Logo} alt="Logo Hijrah" className="w-36 aspect-square" />
          </a>

          <p className="font-ligth text-xl">
            Belanja harian dengan mudah di Toko Hijrah
          </p>
        </div>

        <div className="leading-9">
          <h2 className="font-bold text-xl leading-9">PENGIRIMAN</h2>
          <ul className="list-disc translate-x-8 w-fit font-bold text-xl leading-9">
            <li>Ojek Online</li>
            <li>Kurir Pribadi</li>
          </ul>

          <h2 className="font-bold text-xl leading-9">Buka</h2>
          <ul className="list-disc translate-x-8 w-fit block m-0 font-bold text-xl leading-9">
            <li className="break-all">
              Senin - Jum’at : <br />
              08.00 - 18.00
            </li>
            <li className="break-all">
              Sabtu - Minggu / Hari Libur : <br />
              10.00 - 15.00
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return createPortal(footerContent, document.getElementById('footer'));
};

export default memo(AppFooter);
