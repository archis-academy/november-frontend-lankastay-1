import React from 'react';
import './ProductPhotoGrid.scss';



const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="image-grid__main">
        <img
          src={require('./images/ProductPhotoGrid/Product1.png')}  
          alt="Exterior house"
          className="image-grid__main-image"
        />
      </div>
      <div className="image-grid__side">
        <img
          src={require('./images/ProductPhotoGrid/Product2.png')}  
          alt="Interior bedroom"
          className="image-grid__side-image"
        />
        <img
          src={require('./images/ProductPhotoGrid/Product3.png')} 
          alt="Bathroom"
          className="image-grid__side-image"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
