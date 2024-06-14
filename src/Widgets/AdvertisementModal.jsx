import React, { useState } from 'react';
import Modal from 'react-modal';
import { Close } from '@mui/icons-material'; 
import "../Widgets/AdvertisementModal.css";
import carad from '../Widgets/Images/l.jpeg';


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
      <button className="close-button" onClick={closeModal}>
        <Close />
      </button>
      <img className="centered-image" src={carad} alt="Car Advertisement" />
    </div>
    </Modal>
  );
};

export default AdvertisementModal;
