import { lazy } from 'react';

const Home = lazy(() => import('./home/home'))
const About = lazy(() => import('./about/about'))
const Contact = lazy(() => import('./contact/contact'))
const Services = lazy(() => import('./services/services'))
const Work = lazy(() => import('./work/work'))

export {
    Home,
    About,
    Contact,
    Services,
    Work
}