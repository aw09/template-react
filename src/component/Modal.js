import { VscClose } from 'react-icons';
import React from 'react';

const Modal = (props) => {
  const close = () => props.onClose;
  return (
    <>
      <div name="overlay" className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-50"></div>
      <div name="modal" className="z-50 bg-white p-10 fixed top-1/2 left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2">
        <div name="content" >{props.children}</div>
        <button onClick={close()}>
            <VscClose className="fixed top-1 right-1" />
          </button>
      </div>
    </>
  );
};
Modal.Title = (props) => <div name="title" className="text-center font-semibold py-2">{props.children}</div>
Modal.Content = (props) => <div name="content">{props.children}</div>


export default Modal;