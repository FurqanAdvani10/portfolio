import './about.css'
import img from '../../assets/my.jpg'
import Experience from '../../components/experience/experience'
import { Progress } from 'antd';
import { useEffect } from 'react';

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 75 },
    { name: 'NodeJs', level: 35 },
    { name: 'ReactNative', level: 25 },
    { name: 'Redux', level: 70 },
    { name: 'Tailwind CSS', level: 50 },
    { name: 'Firebase', level: 65 },
    { name: 'Git', level: 25 },
    { name: 'NodeJs', level: 35 },
    { name: 'ReactNative', level: 25 },
  ];

  return (
    <div className='about-main section-padding'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-left-card">
              <div className="about-card-container">
                <div className="about-card-img-container">
                  <img src={img} alt="" />
                </div>
                <div className="about-card-content-container">
                  <h3 className='p-0 m-0'>Furqan Advani</h3>
                  <h5 className='p-0 m-0'>@furqanadvani</h5>
                  <div className="about-card-icons">
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-github-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-linkedin-box-line"></i>
                  </div>
                  <button>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-me-container">
              <h4 className='p-0 m-0'>ABOUT ME</h4>
              <p className='p-0 m-0'>I’m a passionate Front-End Engineer with over 3 years of industry experience, building responsive and modern user interfaces for both web and desktop applications. My journey includes working with companies like KamelPay and CIS, where I delivered high-quality front-end solutions using React, Tailwind CSS, JavaScript, and C# (WinForms/WPF).</p>
              <p className='p-0 m-0'>I hold a professional certification in Web and Mobile App Development, where I graduated with excellent grades. This course laid a strong foundation in both front-end and full-stack concepts, empowering me to work confidently on real-world projects and understand the full development lifecycle.</p>
              <p className='p-0 m-0'>Throughout my career, I’ve focused on writing clean, reusable code, integrating REST APIs, and creating seamless user experiences. I enjoy working in agile teams, collaborating with developers, designers, and product owners to ship impactful features and interfaces.</p>
              <p className='p-0 m-0'>Beyond code, I’m an energetic individual who enjoys traveling, adventures, and exploring new ideas. I believe that creativity outside the screen feeds innovation inside it — whether it's discovering new places or learning a new tool.</p>
              <p className='p-0 m-0'>Looking ahead, I aim to become a full-stack developer and work on dynamic, large-scale applications that challenge my skills and expand my learning. I’m always curious, open to feedback, and committed to growing both personally and professionally.</p>
            </div>

            <Experience />


            <div className="skills-section">
              <h4 className="skills-heading">MY SKILLS</h4>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      {/* <span>{skill.level}%</span> */}
                    </div>
                    <div className="progress-bar">
                      <Progress percent={skill.level} status="active" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
