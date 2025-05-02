import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../shared/components/Modal';
import ModalContext from './modalContext';

const initialState = {
  isOpen: false,
  title: '',
  content: null,
  action: {},
};

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(initialState);

  const openModal = ({ title, content, action }) => {
    setModalState({ isOpen: true, title, content, action });
  };

  const closeModal = () => {
    setModalState(initialState);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalState.isOpen &&
        ReactDOM.createPortal(
          <Modal
            title={modalState.title}
            content={modalState.content}
            action={modalState.action}
            onClose={closeModal}
          />,
          document.getElementById('modal-root')
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
