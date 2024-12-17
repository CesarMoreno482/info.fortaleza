import React from "react";

function Modal({ imageSrc, closeImage }) {
  return (
    <div className="modal" onClick={closeImage}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Imagen ampliada" className="modal-img" />
        <button onClick={closeImage} className="modal-close">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
