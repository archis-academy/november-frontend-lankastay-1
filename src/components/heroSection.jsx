import React from 'react';

const HeroSection = () => {

  return (
    <section className="hero-section">
      <div className="hero-container">
    
        <div className="hero-content">
          <h1 className="hero-title">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          
          <p className="hero-description">
            We provide what you need to enjoy your holiday with family. 
            Time to make another memorable moments.
          </p>

          <button className="btn-primary">
            Show More
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <img src="/icons/icon1.svg" alt="Users" />
              <span>2500 Users</span>
            </div>

            <div className="stat-item">
              <img src="/icons/icon2.svg" alt="Treasure" />
              <span>200 treasure</span>
            </div>

            <div className="stat-item">
              <img src="/icons/icon3.svg" alt="Cities" />
              <span>100 cities</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src="/images/picture.svg" 
            alt="Vacation Home" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;