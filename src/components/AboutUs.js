const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>About Us</h3>
            <p className="fst-italic">
              S N S S & Co is a firm of young Chartered Accountants, run by professionals having expertise in the
              different domains at Surat, Gujarat, India. Our diversified domain consists of audit, taxations and
              consulting of corporate clients as well as Medium & Small sized entities. <br />
            </p>
            <p>
              Our cross-border service portfolio includes International taxation, transfer pricing, FEMA compliances,
              structuring of mid sized entities, business valuations etc. We also conduct statutory audits for banks,
              corporate entities and LLPs.
            </p>
            <p>
              We place emphasis on professional ethics, Innovation and continuous skill enhancements coupled with proper
              use of technology play an important role. Our professional approach blended with personal touch has earned
              us enormous confidence of all our clients, which is reflected in an enduring business relationship that we
              enjoy with them as also in the consistent growth in portfolio of our services. We hold ourselves
              responsible to the profession, clients, society at large and to the nation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs;