import { createPortal } from 'react-dom';

const AppFooter = () => {
  const footerContent = (
    <div className="px-4 py-6 border-0.5 border-textPrimary border-solid">
      Footer Content
    </div>
  );

  return createPortal(footerContent, document.getElementById('footer'));
};

export default AppFooter;
