
// import Header from '../components/Header';

import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsComponent from '../components/ContactUs';
import { useEffect } from 'react';
import { seo } from '../utils';

export default function ContactUs(props) {
  useEffect(() => {
    seo();
  },[]);

  return (
    <div
      id="service-detail"
    >
      <PageHeader pageTitle='Contact Us'></PageHeader>

      <ContactUsComponent></ContactUsComponent>
    </div >
  )
}