import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section id="team" className="team section-content">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""></img>
                <div className="social">
                  <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/"><i className="bi bi-facebook"></i></Link>
                  <Link to="/"><i className="bi bi-instagram"></i></Link>
                  <Link to="/"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4 className="section-content">CA Niranjan Shah</h4>
                <span>Co-founder</span>
                <div>
                  {/* <ul>
                    <li>Member of international tax committee of WIRC of ICAI for the year 2022-23</li>
                    <li>Registered valuer with IBBI and a member of Independent Director’s Databank with IICA</li>
                    <li>Working in the field of International Tax, Transfer pricing, FEMA consulting, Business Valuations, cross border structuring, advisory and litigation under direct tax etc. since 2010</li>
                    <li>Contributor to the journals published by ICAI RVO and other social media platforms of firm</li>
                    <li>Performing key role in the firms for Statutory Audit, Ind AS/IFRS consulting etc</li>
                  </ul> */}
                  {/* <div>Since 2010, He has been working in the field of International Tax, Transfer pricing, FEMA consulting, Business Valuations, cross border structuring, advisory and litigation under direct tax etc.</div><br/>
                  <div>Niranjan Shah, a contributor to the journals published by ICAI RVO and other social media platforms of firm, is also member of international tax committee of WIRC of ICAI for the year 2022-23. He is a registered valuer with IBBI and a member of Independent Director’s Databank with IICA.</div><br/>
                  <div>During the tenure of his professional career, he has been exposed to various clients having global presence across diversified sectors as well as advising to MNCs who wants to set up their business in India. He is also performing key role in the firms for Statutory Audit, Ind AS/IFRS consulting etc.</div><br/> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <div className="row">
                  <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""></img>
                  <div className="social">
                    <Link to="/"><i className="bi bi-twitter"></i></Link>
                    <Link to="/"><i className="bi bi-facebook"></i></Link>
                    <Link to="/"><i className="bi bi-instagram"></i></Link>
                    <Link to="/"><i className="bi bi-linkedin"></i></Link>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h4>CA Sanyam Shah</h4>
                <span>Co-founder</span>
                <div>
                  <div>
                    {/* <ul>
                      <li>Experienced in consulting and compliance for GST matters</li>
                      <li>Advised small and medium enterprises in the field of GST and finance solutions</li>
                      <li>Key expertise includes CFO functions for SMEs, Financial Planning and GST solutions, commercial law matters, strategic business planning for service and trading companies as well as retail sector</li>
                      <li>Exposed to service entities operating in FMCG and retail industry</li>
                    </ul> */}
                    {/* Sanyam Shah is qualified Chartered accountants since 2016 and has good experience in consulting and compliance for GST matters. He has also advised small and medium enterprises in the field of GST and finance solutions. His key expertise includes CFO functions for SMEs, Financial Planning and GST solutions, commercial law matters, strategic business planning for service and trading companies as well as retail sector. He has been exposed to service entities operating in FMCG and retail industry. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Team;