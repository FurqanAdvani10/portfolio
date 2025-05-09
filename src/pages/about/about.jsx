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
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-github-line"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-linkedin-box-line"></i>
                  </div>
                  <button>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-me-container">
              <h4 className='p-0 m-0'>ABOUT ME</h4>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
              <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam officiis id sed quas perferendis, reprehenderit cumque nulla aliquam. Consectetur qui sapiente porro sed sit tenetur cupiditate quidem, nisi aliquid.</p>
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
