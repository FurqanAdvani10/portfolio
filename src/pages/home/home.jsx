import './home.css'

import FirstSection from '../../components/mainFirst/firstSection';
import MainSecond from '../../components/mainSecond/mainSecond';
import MainThird from '../../components/mainThird/mainThird';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='home-main-container section-padding'> 
            <FirstSection />
            <MainSecond />
            <MainThird />
        </div >
    )
}

export default Home
