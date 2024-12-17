import React, { useState, useEffect } from 'react';
import translations from './translations'; // Asegúrate de que el archivo 'translations.js' esté correctamente exportado.

const LanguageSwitcher = () => {
    const [isNarrationActive, setIsNarrationActive] = useState(false);
    const [language, setLanguage] = useState("es");

    useEffect(() => {
        changeLanguage(language);
    }, [language]);

    // Función para cambiar el idioma y cargar las traducciones
    const changeLanguage = (lang) => {
        try {
            const elements = document.querySelectorAll("[data-i18n]");
            elements.forEach((el) => {
                const key = el.getAttribute("data-i18n");
                el.textContent = translations[lang][key] || key;
            });
        } catch (error) {
            console.error("Error al cambiar el idioma:", error);
        }
    };

    // Función para obtener el código de idioma para la voz
    const getLangCode = (language) => {
        const langMap = {
            "es": "es-ES",
            "en": "en-US",
            "nl": "nl-NL",
            "fr": "fr-FR",
            "it": "it-IT",
            "de": "de-DE",
            "ru": "ru-RU",
            "pt": "pt-PT",
            "zh": "zh-CN",
            "ja": "ja-JP",
            "ko": "ko-KR"
        };
        return langMap[language] || "en-US"; // Valor por defecto si no se encuentra el idioma
    };

    // Función para hablar el texto
    const speakText = (text, lang) => {
        if (!window.speechSynthesis) {
            console.error("La API de síntesis de voz no es compatible con este navegador.");
            return;
        }

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = lang;

        speech.onerror = function (event) {
            console.error("Error en la síntesis de voz:", event.error);
        };

        window.speechSynthesis.cancel(); // Cancelar cualquier narración previa
        window.speechSynthesis.speak(speech); // Iniciar la narración
    };

    // Función para leer el contenido de la página
    const readContent = () => {
        const elements = Array.from(document.querySelectorAll("[data-i18n]"));
        const content = elements.map(el => el.textContent.trim()).join(" ");
        const lang = getLangCode(language);
        speakText(content, lang);
    };

    // Función para habilitar la lectura al pasar el ratón sobre los elementos
    const enableHoverRead = () => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            element.addEventListener("mouseover", () => {
                const text = element.textContent.trim();
                const lang = getLangCode(language); // Obtener el idioma seleccionado
                speakText(text, lang); // Leer el texto con la voz correcta
            });
        });
    };

    // Función para deshabilitar la lectura al pasar el ratón
    const disableHoverRead = () => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            const clone = element.cloneNode(true);  
            element.parentNode.replaceChild(clone, element);
        });
    };

    // Función para activar/desactivar la narración
    const toggleNarration = () => {
        if (isNarrationActive) {
            window.speechSynthesis.cancel(); // Detener la narración
            disableHoverRead(); // Desactivar la lectura al pasar el ratón
            setIsNarrationActive(false);
        } else {
            enableHoverRead(); // Habilitar la lectura al pasar el ratón
            setIsNarrationActive(true);
        }
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        changeLanguage(lang); // Cambiar las traducciones al cambiar el idioma
    };

    return (
        <div>
            <div className="language-switch">
                <label htmlFor="language-select">Selecciona el idioma:</label>
                <select id="language-select" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="fr">Francés</option>
                    <option value="pt">Portugués</option>
                    <option value="de">Alemán</option>
                    <option value="it">Italiano</option>
                    <option value="zh">Chino</option>
                    <option value="ru">Ruso</option>
                    <option value="ja">Japonés</option>
                    <option value="nl">Neerlandés</option>
                </select>

                <button id="toggle-narration" onClick={toggleNarration}>
                    {isNarrationActive ? "Desactivar Narración" : "Activar Narración"}
                </button>
                <button id="read-button" onClick={readContent}>Leer contenido</button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;