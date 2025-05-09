import React, { useEffect } from 'react'
import './contact.css'
import { FaCode, FaGlobe, FaMousePointer } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    { icon: 'ri-mail-send-line', title: 'EMAIL', address: 'furqanadvani8@gmail.com' },
    { icon: 'ri-contacts-line', title: 'CONTACT', address: '+92 3363 027854' },
    { icon: 'ri-user-location-line', title: 'ADDRESS', address: 'Defence Phase 6, Karachi, Pakistan' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='contact-main-container section-padding'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
            <div className="info-container-heading">
              <h3 className='p-0 m-0'>GET IN TOUCH</h3>
            </div>
            <div className="info-cards-container">
              <div className="info-cards">
                {contactInfo.map((card, index) => (
                  <div className="info-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="info-card-icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="info-card-content">
                      <h4>{card.title}</h4>
                      <p>{card.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-link-container mt-40">
              <div className="info-container-heading social-heading">
                <h3 className='p-0 m-0'>SOCIAL INFO</h3>
              </div>
              <div className="social-link-icons">
                <a href=""><i class="ri-facebook-fill"></i></a>
                <a href=""><i class="ri-instagram-line"></i></a>
                <a href=""><i class="ri-github-line"></i></a>
                <a href=""><i class="ri-linkedin-box-line"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-8">

            <div className='contact-us-form-container'>

              <div className="contact-us-form-heading">
                <h3 className='p-0 m-0'>Let's work <span>together.</span></h3>
              </div>

              <div className="row align-items-center justify-content-center">
                <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">

                  <div class="input col-md-12 col-12">
                    <input type="name"
                      name='name'
                      class="form-control"
                      id="John"
                      // value={values.name}
                      // onChange={handleChange}
                      // onBlur={() => setFieldTouched('name', true, true)}
                      placeholder="Your Name *" />
                    {/* {errors.name && touched.name ? (
                                                <p className="p_msg p-0 m-0">
                                                    {errors.name}
                                                </p>
                                            ) : null} */}
                  </div>

                  <div class="col-12 col-md-12 col-12 input">
                    <input
                      type="eamil"
                      name='email'
                      // value={values.email}
                      // onChange={handleChange}
                      // onBlur={() => setFieldTouched('email', true, true)}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email *" />
                    {/* {errors.email && touched.email ? (
                                                <p className="p_msg p-0 m-0">
                                                    {errors.email}
                                                </p>
                                            ) : null} */}
                  </div>

                  <div class="col-12 col-md-12 col-12 input">
                    <input
                      type="input"
                      name='service'
                      // value={values.email}
                      // onChange={handleChange}
                      // onBlur={() => setFieldTouched('email', true, true)}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Service *" />
                    {/* {errors.email && touched.email ? (
                                                <p className="p_msg p-0 m-0">
                                                    {errors.email}
                                                </p>
                                            ) : null} */}
                  </div>


                  <div class="text-section">
                    <textarea class="form-control"
                      name='message'
                      // value={values.message}
                      // onChange={handleChange}
                      // onBlur={() => setFieldTouched('message', true, true)}
                      placeholder="Your Message"
                      id="exampleFormControlTextarea1" rows="5"></textarea>
                    {/* {errors.message && touched.message ? (
                                        <p className='p_msg msg p-0 m-0'>
                                            {errors.message}
                                        </p>
                                    ) : null} */}

                  </div>
                  <div class="contact-btn ">
                    {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                    {/* <button type="Submit" onClick={handleSubmit}>Send Your Message</button> */}
                    <button type="Submit" >Send Your Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
