
// import Header from '../components/Header';

import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsComponent from '../components/ContactUs';

export default function ContactUs(props) {

  return (
    <div
      id="service-detail"
    >
      <PageHeader pageTitle='Contact Us'></PageHeader>

      <ContactUsComponent></ContactUsComponent>
    </div >
  )
}