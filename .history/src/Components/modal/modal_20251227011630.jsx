import React, { useState } from "react";
import './SuccessModal.scss';

const Modal = ({ isOpen, type, title, message, ctaText, onCtaClick, onClose }) => {
 
  const [isVisible, setIsVisible] = useState(true);

  
  if (isOpen === false || !isVisible) return null;

  const handleClose = () => {
    setIsVisible(false); 
    if (typeof onClose === "function") onClose();
  };

  return (
    <div className="lankastay-standalone-scope">
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          
          
          <button className="close-x" onClick={handleClose} type="button">&times;</button>
          
          <div className="modal-inner">
            <div className="brand-logo">Lanka<span>Stay.</span></div>
            
            <div className="status-section">
            
              <div className={`status-circle ${type}`}>
                 {type === 'success' ? '✓' : '✕'}
              </div>
            </div>

            <h2 className="title">{title}</h2>
            <p className="message">{message}</p>

            <div className="action-button-wrapper">
            
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