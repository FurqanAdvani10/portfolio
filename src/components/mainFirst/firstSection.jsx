import React from 'react';
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineKeyboardTab } from "react-icons/md";
import img from './../../assets/my.jpg';
import signature from '../../assets/signature12.png';
import './firstSection.css';
import { useNavigate } from 'react-router-dom';

const FirstSection = () => {

    const navigate = useNavigate()

    const cards = [
        { title: 'MORE ABOUT ME', subtitle: 'Credential', icon: 'signature', path: '/about' },
        { title: 'SHOWCASE', subtitle: 'Projects', icon: 'clipboard', path: '/work' },
    ];

    return (
        <section className="fs-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Profile Card */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="fs-profile-card shadow-sm">
                            <div className="fs-profile-img">
                                <img src={img} alt="Profile" />
                            </div>
                            <div className="fs-profile-content">
                                <h4 className="fs-role">Frontend Engineer</h4>
                                <h2 className="fs-name">Furqan Advani</h2>
                                <p className="fs-description">
                                    Passionate about building beautiful and performant UIs using modern web technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Cards Section */}
                    <div className="col-md-6">
                        <div className="fs-right-content">
                            <div className="fs-welcome-text">
                                <p>
                                    Howdy, welcome to my portfolio!
                                    <span> Take a look around, feel at home, and let’s build something great together!</span>
                                </p>
                            </div>

                            <div className="row g-3 mt-2">
                                {cards.map((card, index) => (
                                    <div className="col-12 col-sm-6" key={index}>
                                        <div className="fs-card hover-shadow" onClick={() => navigate(card?.path)}>
                                            <div className="fs-card-icon">
                                                {card.icon === 'signature' ? (
                                                    <h4>furqan</h4>
                                                ) : (
                                                    <LuClipboardList />
                                                )}
                                            </div>
                                            <div className="fs-card-body">
                                                <div className="fs-card-text">
                                                    <h3>{card.title}</h3>
                                                    <h4>{card.subtitle}</h4>
                                                </div>
                                                <MdOutlineKeyboardTab className="fs-card-arrow" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FirstSection;
