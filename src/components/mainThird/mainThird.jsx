import React from 'react'
import './main.css'
import { MdOutlineKeyboardTab } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const MainThird = () => {

    const navigate = useNavigate()

    const items = [
        { id: 1, title: 'YEARS EXPERIENCE', subtitle: '03' },
        { id: 2, title: 'CLIENTS SATISFIED', subtitle: '60+' },
        { id: 3, title: 'PROJECT COMPLETED', subtitle: '100+' }
    ]

    return (
        <div className='third-main mt-20'>
            <div className="container">
                <div className="row g-4 justify-content-center row-cols-xl-2 row-cols-md-1 row-cols-1">
                    <div className="col">
                        <div className="items-card hover-effect d-flex flex-column">
                            <div className="row g-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-1 ">
                                {items.map((item, index) =>
                                    <div className="col" key={index}>
                                        <div className="item-box d-flex justify-content-center align-items-center">
                                            <h3 className='p-0 m-0'>{item?.subtitle}</h3>
                                            <h4 className='p-0 m-0'>{item?.title}</h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="items-card hover-effect d-flex flex-column"  onClick={() => navigate('/contact')}>
                            <div className="items-card-content">

                                <div className="items-card-heading">
                                    <h2>Let's</h2>
                                    <h2>Work <span>together!</span></h2>
                                </div>
                                <div className="items-arrow-icon">
                                    <MdOutlineKeyboardTab className="sc-arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainThird
