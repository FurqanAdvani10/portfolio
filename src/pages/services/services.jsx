import { useEffect } from 'react';
import { ServicesCards } from '../../components';
import './services.css';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <div className='services'>
      <ServicesCards />
    </div>
  )
}

export default Services
