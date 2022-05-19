import { createPortal } from 'react-dom';

const AppHeader = ({ children }) => {
  const headerContent = children;

  return createPortal(headerContent, document.getElementById('header'));
};

export default AppHeader;
