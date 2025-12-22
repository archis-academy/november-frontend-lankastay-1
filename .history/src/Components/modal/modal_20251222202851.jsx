import React, { useState } from 'react';
import './SuccessModal.scss';

const ModalApp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-wrapper">
      <button className="open-btn" onClick={() => setShowModal(true)}>
        Hesabı Tamamla
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          {/* stopPropagation: İçeriğe tıklandığında modalın kapanmasını engeller */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowModal(false)}>&times;</button>
            
            <div className="lankastay-card">
              <div className="logo">
                Lanka<span>Stay.</span>
              </div>
              
              <div className="icon-wrapper">
                <div className="check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              <h1 className="title">Account Created Successful</h1>
              <p className="subtitle">Please Check Your Email</p>

              <button className="btn-book" onClick={() => setShowModal(false)}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalApp;