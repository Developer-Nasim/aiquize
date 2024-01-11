import { lazy } from 'react'
import PageLayout from '../components/PageLayout'
const Home = lazy(() => import('../pages/Home'))
const Contact = lazy(() => import('../pages/Contact'))
const Howto = lazy(() => import('../pages/Howto'))
const ErorrPage = lazy(() => import('../pages/ErorrPage'))
const About = lazy(() => import('../pages/About'))
const Profile = lazy(() => import('../pages/dashboard/Profile'))
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'))
const Quize = lazy(() => import('../pages/dashboard/Quize'))
const QuizeDetails = lazy(() => import('../pages/dashboard/QuizeDetails')) 
const Auth = lazy(() => import('../pages/Auth')) 

export {PageLayout,Home,Contact,Howto,ErorrPage,About,Profile,Dashboard,Quize,QuizeDetails,Auth}