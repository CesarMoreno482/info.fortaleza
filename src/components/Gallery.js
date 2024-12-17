import React from "react";

function Gallery({ openImage }) {
  const images = [
    "/images/fortaleza3.jpg",
    "/images/fortaleza4.jpg",
    "/images/fortaleza5.jpg",
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className="gallery-img"
          onClick={() => openImage(image)} // Llama a openImage con la imagen seleccionada
        />
      ))}
    </div>
  );
}

export default Gallery;