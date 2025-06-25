import React from 'react';
import { BounceLoader, HashLoader } from 'react-spinners';
import './loader.css';

const CLoader = () => {
  return (
    // <div className="loading-spinner">
    //   <div className="loader-main-container text-center">
    //     <BounceLoader color="#ffff" size={40} />
    //   </div>
    // </div>
    <div className='loader-main w-100 d-flex justify-content-center align-items-center' style={{height : '100vh'}}>
      <div className="loader-body">
        <div className="loader-content">
          <h4 className='p-0 m-0 slide-out'><span>f</span><span>u</span><span>r</span><span>q</span><span>a</span><span>n</span><span>.</span></h4>
        </div>
      </div>
    </div>
  );
};

export default CLoader;
