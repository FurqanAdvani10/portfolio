import React from 'react';
import './experience.css'; // CSS for styling and animations

const items = [
  {
    id: 1,
    years: 'Apr 2024 -  (Present)',
    designation: 'Front-End Engineer',
    company: 'KamelPay',
    work: [
      { item: 'Built and optimized interactive web interfaces using React and Tailwind CSS.' },
      { item: 'Integrated REST APIs for dynamic data rendering and real-time updates.' },
      { item: 'Collaborated in a cross-functional team of 5+ developers using Git and agile methodologies.' },
    ],
  },
  {
    id: 2,
    years: 'Nov 2023 - Apr 2024',
    designation: 'Trainee Front-End Engineer',
    company: 'KamelPay',
    work: [
      { item: 'Developed responsive UI/UX web pages with HTML5, CSS3/SASS, and JavaScript.' },
      { item: 'Improved layout consistency and ensured cross-browser compatibility.' },
      { item: 'Contributed to building components for real-world use cases.' },
    ],
  },
  {
    id: 3,
    years: '2018-2019',
    designation: 'Front-End Engineer',
    company: 'CIS (Computer Information Systems)',
    work: [
      { item: 'Designed custom UI components for desktop apps using C# (WinForms/WPF).' },
      { item: 'Focused on creating clean, intuitive, and scalable interfaces.' },
      { item: 'Collaborated with design and development teams for effective UX workflows.' },
    ],
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
            <ul>
              {Array.isArray(item.work) &&
                item.work.map((workItem, i) => (
                  <li key={i}>
                    <i>{workItem.item}</i>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
