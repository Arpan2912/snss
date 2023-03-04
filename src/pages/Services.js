import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../components/Services';
import { useEffect } from 'react';
import { seo } from '../utils';

export default function Service(props) {
  useEffect(() => {
    seo();
  },[]);

  return (
    <div
      id="service-detail"
    >
      <PageHeader pageTitle='Services'></PageHeader>

      <Services></Services>
      {/* <Team></Team> */}
      {/* <ContactUs></ContactUs> */}
    </div >
  )
}