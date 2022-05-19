import { memo } from 'react';
import { createPortal } from 'react-dom';

const AppFooter = () => {
  const footerContent = (
    <div className="px-4 py-16 bg-primary flex flex-row justify-center">
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
    </div>
  );

  return createPortal(footerContent, document.getElementById('footer'));
};

export default memo(AppFooter);
