import React, { useState } from 'react';
import './styles.css';
import LanguageSwitch from './components/LanguageSwitch';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openImage = (imageSrc) => {
    setIsModalOpen(true);
    setModalImage(imageSrc);
  };

  const closeImage = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div>
      {/* Language Selector */}
      <LanguageSwitch />

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Sections openImage={openImage} />
      </main>

      {/* Modal */}
      {isModalOpen && <Modal imageSrc={modalImage} closeImage={closeImage} />}
    </div>
  );
}

export default App;
