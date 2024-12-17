import React, { useState, useEffect } from 'react';
import translations from './translations';
import Gallery from './Gallery';

const Sections = ({ openImage }) => { // Agregar openImage como prop
    const [language] = useState("es");

    useEffect(() => {
        changeLanguage(language);
    }, [language]);

    const changeLanguage = (lang) => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
    };

    return (
        <div>
            <section id="history">
                <h2 data-i18n="history_link">Historia</h2>
                <p data-i18n="history_content">Contenido de la historia</p>
                <img src="/images/fortaleza1.jpg" alt="Fortaleza de Santo Domingo" className="img-fluid" />
            </section>

            <section id="features">
                <h2 data-i18n="features_link">Características</h2>
                <p data-i18n="features_content">Contenido de las características</p>
                <img src="/images/fortaleza2.jpg" alt="Fortaleza de Santo Domingo" className="img-fluid" />
            </section>

            <section id="gallery">
                <h2 data-i18n="gallery">Galería</h2>
                <Gallery openImage={openImage} /> {/* Pasar openImage a Gallery */}
            </section>

            <section id="contact">
                <h2 data-i18n="contact">Contacto</h2>
                <p data-i18n="contact_info">Información de contacto</p>
                <p><a href="mailto:info@example.com" data-i18n="email">Correo electrónico</a></p>
                <p data-i18n="phone">Teléfono: 123-456-789</p>
            </section>

            <button data-i18n="read_button">Leer más</button>
        </div>
    );
};

export default Sections;
