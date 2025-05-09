import { MdOutlineKeyboardTab } from 'react-icons/md';
import './mainSecond.css';
import { useNavigate } from 'react-router-dom';

const MainSecond = () => {


    const navigate = useNavigate()


    return (
        <div className="sc-main-container mt-20">
            <div className="container">
                <div className="row g-3">
                    {/* Blogs Card */}
                    <div className="col-md-6 col-12 col-lg-2 col-xl-2">
                        <div className="sc-card hover-effect d-flex flex-column">
                            <div className="sc-icon-box text-center">
                            <i class="ri-newspaper-line"></i>
                            </div>
                            <div className="sc-text-box">
                                <h3>BLOGS</h3>
                                <h4>Tech Writing</h4>
                            </div>
                        </div>
                    </div>

                    {/* Services Card */}
                    <div className="col-md-6 col-12 col-lg-7">
                        <div className="sc-card hover-effect d-flex flex-column justify-content-between" onClick={() => navigate('/services')}>
                            <div className="sc-multi-icons">
                            <i class="ri-earth-line"></i>
                            <i class="ri-code-s-slash-line"></i>
                            <i class="ri-cursor-line"></i>
                            <i class="ri-line-chart-line"></i>
                            </div>
                            <div className="sc-bottom-box d-flex justify-content-between align-items-center">
                                <div className="sc-text-box">
                                    <h3>SPECIALIZATION</h3>
                                    <h4>Services</h4>
                                </div>
                                <MdOutlineKeyboardTab className="sc-arrow-icon" />
                            </div>
                        </div>
                    </div>

                    {/* Socials Card */}
                    <div className="col-md-12 col-lg-3  col-12">
                        <div className="sc-card hover-effect d-flex flex-column justify-content-between" onClick={() => navigate('/contact')}>
                            <div className="sc-multi-icons sc-multi-icons-shadow">
                            <i class="ri-facebook-fill"></i>
                            <i class="ri-linkedin-box-line"></i>
                            </div>
                            <div className="sc-bottom-box d-flex justify-content-between align-items-center">
                                <div className="sc-text-box">
                                    <h3>CONNECT</h3>
                                    <h4>Social Media</h4>
                                </div>
                                <MdOutlineKeyboardTab className="sc-arrow-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSecond;
