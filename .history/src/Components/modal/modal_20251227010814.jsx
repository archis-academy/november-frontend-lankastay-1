import React, { useState } from "react";
import './SuccessModal.scss';

const Modal = ({ isOpen, type, title, message, ctaText, onCtaClick, onClose }) => {
  // Modalın kendi içinde kapanıp açılabilmesi için yerel bir durum ekledik
  const [isVisible, setIsVisible] = useState(true);

  // Eğer dışarıdan gelen isOpen kesinlikle false ise veya kullanıcı X'e bastıysa gösterme
  if (isOpen === false || !isVisible) return null;

  const handleClose = () => {
    setIsVisible(false); // Yapıyı ekrandan kaldırır
    if (typeof onClose === "function") onClose();
  };

  return (
    <div className="lankastay-standalone-scope">
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          
          {/* X Butonu: Tıklandığında yapıyı kapatır */}
          <button className="close-x" onClick={handleClose} type="button">&times;</button>
          
          <div className="modal-inner">
            <div className="brand-logo">Lanka<span>Stay.</span></div>
            
            <div className="status-section">
              {/* type="error" ise kırmızı, type="success" ise yeşil ikon */}
              <div className={`status-circle ${type}`}>
                 {type === 'success' ? '✓' : '✕'}
              </div>
            </div>

            <h2 className="title">{title}</h2>
            <p className="message">{message}</p>

            <div className="action-button-wrapper">
              {/* Dinamik Buton: type="error" ise kırmızı (btn-error) olur */}
              <button 
                type="button"
                className={`cta-button btn-${type}`} 
                onClick={() => {
                  if (typeof onCtaClick === "function") onCtaClick();
                }}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;