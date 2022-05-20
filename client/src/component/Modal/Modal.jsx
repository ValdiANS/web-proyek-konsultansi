import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, className, onHide }) => {
  const backdropClickHandler = () => {
    onHide();
  };

  const contentClickHandler = (e) => {
    e.stopPropagation();
  };

  const modalElm = (
    <div
      onClick={backdropClickHandler}
      className="backdrop fixed top-0 left-0 w-screen h-screen bg-primary/40 grid place-items-center z-10"
    >
      <div onClick={contentClickHandler} className={className}>
        {children}
      </div>
    </div>
  );

  return (
    <Fragment>
      {createPortal(modalElm, document.getElementById('modal'))}
    </Fragment>
  );
};

export default Modal;
