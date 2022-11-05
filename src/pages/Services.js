import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../components/Services';

export default function Service(props) {
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