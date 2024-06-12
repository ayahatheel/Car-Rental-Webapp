import React, { useState } from 'react';
import Modal from 'react-modal';
import { Close } from '@mui/icons-material'; 
import "../Widgets/AdvertisementModal.css";

const AdvertisementModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Advertisement Modal"
      className="AdvertisementModal"
    >
      <div>
        <div className="modal-header">
          <h2>Special Offer!</h2>
          <button className="close-button" onClick={closeModal}>
            <Close /> 
          </button>
        </div>
        <p>Don't miss out on our amazing deals!</p>
      </div>
    </Modal>
  );
};

export default AdvertisementModal;
