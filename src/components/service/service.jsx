import React from 'react';
import {
  FaChartBar,
  FaCode,
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaMousePointer,
} from 'react-icons/fa';
import { MdOutlineKeyboardTab } from 'react-icons/md';
import img from '../../assets/signature.svg';
import './main.css';
import MainThird from '../mainThird/mainThird';

const ServicesCards = () => {
  const services = [
    { icon: 'ri-earth-line', title: 'Web Design' },
    { icon: 'ri-code-s-slash-line', title: 'Web Development' },
    { icon: 'ri-cursor-line', title: 'Researching' },
    { icon: 'ri-line-chart-line', title: 'Analyzing' },
  ];



  const servicesContent = [
    {
      title: 'Web Design',
      content:
        'Creating visually appealing and user-friendly interfaces that ensure seamless user experiences across devices. I focus on responsive layouts, modern aesthetics, and intuitive navigation.',
    },
    {
      title: 'Web Development',
      content:
        'Building fast, scalable, and maintainable web applications using modern frameworks and tools. From front-end interactivity to back-end integrations, I handle complete development cycles.',
    },
    {
      title: 'Researching',
      content:
        'Conducting thorough research to understand client requirements, user behavior, and industry trends. This helps in crafting solutions that are both effective and future-proof.',
    },
    {
      title: 'Analyzing',
      content:
        'Using data-driven approaches to evaluate application performance, user engagement, and design impact. I optimize solutions based on analytics and user feedback.',
    },
  ];

  return (
    <div className='services-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='services-left-cards'>
              {services.map((service, index) => (
                <div
                  className='services-left-card animated-card'
                  key={index}
                  style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
                >
                  <div className='services-left-icon'><i className={service.icon}></i></div>
                  <div className='services-left-content'>
                    <h4>{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='col-md-8'>
            <div className='services-right-section'>
              <div className='services-heading'>
                <i className='ri-asterisk'></i>
                <h4>SERVICES</h4>
                <i className='ri-asterisk'></i>
              </div>

              <div className='row g-3 justify-content-center row-cols-xl-2 row-cols-md-2 row-cols-1'>
                {servicesContent.map((service, index) => (
                  <div className='col' key={index}>
                    <div
                      className='services-right-card animated-card'
                      style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
                    >
                      <div className='services-right-content'>
                        <h4>{service.title}</h4>
                        <p>{service.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media, Work Together, Info Sections */}
      </div>
        <MainThird />
    </div>
  );
};

export default ServicesCards;
