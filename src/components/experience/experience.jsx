import React from 'react';
import './experience.css'; // CSS for styling and animations

const items = [
  {
    id: 1,
    years: '2020-2022',
    designation: 'Front-End Engineer',
    company: 'KamelPay',
    work: 'Worked on multiple React projects, building scalable UIs and integrating APIs with Firebase auth and Firestore.',
  },
  {
    id: 2,
    years: '2019-2020',
    designation: 'Trainee Front-End Engineer',
    company: 'KamelPay',
    work: 'Learned core front-end technologies including React, Redux, HTML, and SCSS while contributing to internal tools.',
  },
  {
    id: 3,
    years: '2018-2019',
    designation: 'Front-End Engineer',
    company: 'CIS (Computer Information Systems)',
    work: 'Built UI components and collaborated with backend engineers to deliver high-performance web apps.',
  },
  {
    id: 4,
    years: '2017-2018',
    designation: 'Operation Manager',
    company: 'Karwan-e-Rafeeq ul Harmain',
    work: 'Managed operations and led digital transition for booking and customer experience.',
  },
];

const Experience = () => {
  return (
    <div className="experience-main mt-50">
      <h4 className="experience-heading">EXPERIENCE</h4>
      <div className="experience-list">
        {items.map((item, index) => (
          <div
            className="experience-card"
            key={item.id}
            style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
          >
            <span className="years">{item.years}</span>
            <h3>{item.designation}</h3>
            <h5>{item.company}</h5>
            <p>{item.work}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
