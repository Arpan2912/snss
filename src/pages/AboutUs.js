// import {  useState } from 'react';
// import Header from '../components/Header';
// import { useNavigate, useLocation, useParams } from 'react-router'
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsComponent from '../components/AboutUs';
import Team from '../components/Team';
import { useEffect } from 'react';
import { seo } from '../utils';

export default function AboutUs() {
  useEffect(() => {
    seo();
  },[])
  return (
    <div
      id="service-detail"
    >
      <PageHeader pageTitle='About Us'
        backgroundImage="../assets/img/about-us.jpg"
      ></PageHeader>

      <AboutUsComponent></AboutUsComponent>
      <Team></Team>
      {/* <ContactUs></ContactUs> */}
    </div >
  )
}