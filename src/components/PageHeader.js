import { Link } from "react-router-dom";

const PageHeader = ({ img, pageTitle, showTagline = false, backgroundImage = "../assets/img/hero-bg.jpg" }) => {
  return <section id={showTagline ? "hero" : "hero-page"} style={{ background: `url("${backgroundImage}") ${showTagline ? 'top' : ''} center` }} className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div
        // className="row justify-content-center" 
        className={showTagline ? 'row justify-content-center' : 'row'}
        data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          {img && <img src={`${img}`} alt="img" style={{ width: '100%' }}></img>}
          {!img && pageTitle && <h1>{pageTitle}</h1>}
        </div>
      </div>

      {showTagline && <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><Link to="/">Quicker Actions</Link></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"></i>
            <h3><Link to="/">Optimized Solutions</Link></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"></i>
            <h3><Link to="/">Holistic Approach</Link></h3>
          </div>
        </div>

      </div>}

    </div>
  </section>
}

export default PageHeader;