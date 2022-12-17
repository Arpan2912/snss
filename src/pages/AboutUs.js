// import {  useState } from 'react';
// import Header from '../components/Header';
// import { useNavigate, useLocation, useParams } from 'react-router'
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsComponent from '../components/AboutUs';
// import Team from '../components/Team';

export default function AboutUs() {
  return (
    <div
      id="service-detail"
    >
      <PageHeader pageTitle='About Us'
      backgroundImage="../assets/img/hero-bg2.jpg"
      ></PageHeader>

      <AboutUsComponent></AboutUsComponent>
      {/* <Team></Team> */}
      {/* <ContactUs></ContactUs> */}
    </div >
  )
}