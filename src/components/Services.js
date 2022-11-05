import { useNavigate } from 'react-router-dom';
import { services } from '../constant/service-detail';

const Services = () => {
  const navigate = useNavigate();

  // const services = [{
  //   title: "Valuation",
  //   description: `Knowing true value of business/assets assist in fund raising,
  //   negotiation during mergers and acquisition, deciding exit
  //   strategies, regulatory compliances etc.`,
  //   link: '/service/valuation',
  //   key: 'valuation'
  // },
  // {
  //   title: "Domestic taxation",
  //   description: `statutory audit, tax audit, internal audit, concurrent
  //   audit, management audit, compliance review audit, fraud investigation audit, GST audit, and
  //   information system audit services`
  // },
  // {
  //   title: "Indirect Tax",
  //   description: `statutory audit, tax audit, internal audit, concurrent
  //   audit, management audit, compliance review audit, fraud investigation audit, GST audit, and
  //   information system audit services`
  // },
  // {
  //   title: "International Tax",
  //   description: `Global tax outflow is the key consideration for any business entities
  //   proposing to have their global footprints.`
  // },
  // {
  //   title: "Foreign Exchange Regulation",
  //   description: `RBI is keeping watch any transactions such as purchase of
  //   movable or immovable assets, investment in shares or securities,
  //   export or import transactions between residents and Non-
  //   Resident.`
  // },
  // {
  //   title: "Company Set up in UAE",
  //   description: `UAE has emerged as financial and trading hub in recent era which
  //   motivates entrepreneurs to set up company in UAE.`
  // }
  // ]

  const navigateToPage = (page) => {
    navigate(page)
  }

  return (
    <section id="services" className="services section-content">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row">
          {services.map((s, index) =>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" key={s.key}>
              <div className="icon-box service-card" style={{ textAlign: 'left' }}>
                <h5 >{s.title}</h5>
                <br />

                {/* <hr /> */}
                {/* <ul> */}
                {/* <li> */}
                <p style={{ textAlign: 'justify' }}>{s.description}</p>
                <br />

                {s.content && <div className="read-more" onClick={(e) => navigateToPage(s.link)}>Read More...</div>}
                {/* </li> */}
                {/* </ul> */}
              </div>
            </div>
          )}

          {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">Domestic taxation</a></h4>
              <hr />
              <ul>
                <li>
                  <p>Tax efficient business structuring</p>
                </li>
                <li>
                  <p>Preparation and filing of Tax Returns</p>
                </li>
                <li>
                  <p>Representation before the Taxation Authorities</p>
                </li>
                <li>
                  <p>Appearing before the Appellate Authority</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
            data-aos-delay="300">
            <div className="icon-box">
              <h4><a href="">Indirect Tax</a></h4>
              <hr />
              <ul>
                <li>
                  <p>GST Registration, Return, Audit</p>
                </li>
                <li>
                  <p>Monthly consulting for routine GST compliances</p>
                </li>
                <li>
                  <p>GST Compliance Review</p>
                </li>
                <li>
                  <p>Refund of Input Tax Credit</p>
                </li>
                <li>
                  <p>Impact analysis of GST applicability to Industry</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <h4><a href="">International Taxation</a></h4>
              <hr />
              <ul>
                <li>
                  <p>Guiding benchmarking principles for establishment of Place of Effective Management (POEM)</p>
                </li>
                <li>
                  <p>Assisting structuring especially for green field entities wants to set up business operations
                    in/Outside India</p>
                </li>
                <li>
                  <p>Advising on routine and non routine international transactions with an emphasis on global tax
                    efficiency, DTAAs, BEPS, Multi lateral Agreement signed between the countries etc.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">NRI Consulting</a></h4>
              <hr />
              <ul>
                <li>
                  <p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
                    related
                    to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
                    business valuation, and merger and acquisition.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <h4><a href="">FEMA Consulting</a></h4>
              <hr />
              <ul>
                <li>
                  <p>Compliances for Foreign Direct investment as well as transfer of shares, debentures & securities
                    between Residents and Non - Residents in India and outside India.</p>
                </li>
                <li>
                  <p>Reporting in Single Master Form (Erstwhile separate reporting for FC-GPR , FC-TRS , ODI etc).</p>
                </li>
                <li>
                  <p>Compliances for Overseas Direct Investment (ODI) by Indian residents.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">Valuations Advisory</a></h4>
              <hr />
              <ul>
                <li>
                  <p>Assisting in development & review of financial model/projections</p>
                </li>
                <li>
                  <p>Valuation of intellectual property(IP) like trade name, brand name, goodwill, customer contracts
                  </p>
                </li>
                <li>
                  <p>Valuation of Shares & Securities as required under RBI law or Companies act.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">Business Setup</a></h4>
              <hr />
              <ul>
                <li>
                  <p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
                    related
                    to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
                    business valuation, and merger and acquisition.</p>
                </li>
              </ul>
            </div>

          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">RERA Consulting</a></h4>
              <hr />
              <ul>
                <li>
                  <p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
                    related
                    to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
                    business valuation, and merger and acquisition.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <h4><a href="">Startup Consulting</a></h4>
              <hr />
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <p>Guiding on legal structuring of entities</p>
                </li>
                <li>
                  <p>Guiding on Investment Instruments</p>
                </li>
                <li>
                  <p>Start Up registration, valuation</p>
                </li>
                <li>
                  <p>Review of Start Up’s Business Plan </p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default Services;