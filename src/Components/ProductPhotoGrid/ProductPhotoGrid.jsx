import React from 'react';
import './ProductPhotoGrid.scss';

const ImageGrid = ({images}) => {
  return (
    <div className="image-grid">
      <div className="image-grid__main">
        <img
          src={images && images.length > 0 ? images[0] : '/images/ProductPhotoGrid/Product1.png'}
          alt="House"
          className="image-grid__main-image"
        />
      </div>
      <div className="image-grid__side">
        <img
          src={images && images.length > 1 ? images[1] : '/images/ProductPhotoGrid/Product2.png'}
          alt="Bedroom"
          className="image-grid__side-image"
        />
        <img
         src={images && images.length > 2 ? images[2] : '/images/ProductPhotoGrid/Product3.png'}
          alt="Bathroom"
          className="image-grid__side-image"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
