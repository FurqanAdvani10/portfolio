import React from 'react';
import { BounceLoader, HashLoader } from 'react-spinners';
import './loader.css';

const CLoader = () => {
  return (
    <div className="loading-spinner">
      <div className="loader-main-container text-center">
        <BounceLoader color="#ffff" size={40} />
      </div>
    </div>
  );
};

export default CLoader;
