const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="section-title">
              <h2>About</h2>
              <p>SNSS & CO.</p>
            </div>
            {/* <div className="service-title"><p></p></div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0 order-2 order-lg-1 content section-content" data-aos="fade-right" data-aos-delay="100">
            {/* <ul style={{ listStyleType: "none" }}> */}
              <p>
                SNSS & Co, Chartered Accountants cater to the several needs for accounting and legal domain for all kind of business entities like listed or unlisted entities, SMEs, MNCs, NGOs etc
              </p>
              <p>
                The firm is a multidisciplinary consulting firm equipped with bunch of unique service portfolio like national and international tax compliances, business valuation, foreign exchange regulations, company set up in UAE along with tax compliances, transfer pricing compliances, Outsourced CFO functions auditing and accounting solutions, Goods and service tax compliances, start-up solutions etc.
              </p>
              <p>
                SNSS is a leading solver for foreign exchanges laws  and international tax matters that helps its global clients to make the best and fast decision in the face of complex global legal challenges.
              </p>
            {/* </ul> */}
            {/* <p>
              SNSS & Co, Chartered Accountants cater to the several needs for accounting and legal domain for all kind of business entities like listed or unlisted entities, SMEs, MNCs, NGOs etc. The firm is a multidisciplinary consulting firm equipped with bunch of unique service portfolio like national and international tax compliances, business valuation, foreign exchange regulations, company set up in UAE along with tax compliances, transfer pricing compliances, Outsourced CFO functions auditing and accounting solutions, Goods and service tax compliances, start-up solutions etc.<br />
            </p> */}
            {/* <br />
            <p>
              SNSS is a leading solver for foreign exchanges laws  and international tax matters that helps its global clients to make the best and fast decision in the face of complex global legal challenges.
            </p> */}

          </div>
        </div>

      </div>
      {/* <div className="row mt-4">
        <div className="col" style={{ backgroundColor: '#8d0506', color: 'white' }}>
          <div className="container" style={{ textAlign: 'center', padding: '35px' }}>
            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Our Motto</div>
            <div style={{ fontSize: '20px' }}>"Support Indian business entrepreneurs to go global with compliance friendly culture in organization.  We try to fulfil it by providing high quality services along with maintaining professional ethics. We place emphasis on knowledge gaining through knowledge sharing and continous skill enhancement coupled with best use of technology."</div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default AboutUs;