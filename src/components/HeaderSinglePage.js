
import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
const defaultScrollHeights = {
  about: 5000,
  service: 5000,
  team: 5000,
  contact: 5000
}
const Header = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // const [activePath, setActivePath] = useState(Infinity);
  const [scrollHeight, setScrollHeight] = useState(defaultScrollHeights);
  // const [servicesScrollHeight, setServicesScrollHeight] = useState(Infinity);
  // const [teamScrollHeight, setTeamScrollHeight] = useState(Infinity);
  // const [contactScrollHeight, setContactScrollHeight] = useState(Infinity);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    console.log("pathname", pathname, hash, key)
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100
          })
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('scroll', handleWindowResize);

    return () => {
      window.removeEventListener('scroll', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight, pageYOffset } = window;
    return { innerWidth, innerHeight, pageYOffset };
  }

  useEffect(() => {
    // if not a hash link, scroll to top
    const sectionAbout = document.querySelector('#about')
    const sectionService = document.querySelector('#services')
    const sectionTeam = document.querySelector('#team')
    const sectionContact = document.querySelector('#contact')
    const scrollHeight = { ...defaultScrollHeights }
    if (sectionAbout) {
      // console.log("clientTop", sectionAbout.clientTop)
      // console.log("sectionAbout.scrollHeight", sectionAbout.scrollHeight);
      scrollHeight.about = sectionAbout.offsetTop - 300
      // console.log("1", { ...scrollHeight });
      // setAboutScrollHeight(sectionAbout.offsetTop - 200)
    }
    if (sectionService) {
      // console.log("sectionService.scrollHeight", sectionService.scrollHeight);
      scrollHeight.service = sectionService.offsetTop - 300;
      // console.log("2", { ...scrollHeight });
      // setServicesScrollHeight(sectionService.offsetTop - 200)
    }
    if (sectionTeam) {
      // console.log("sectionTeam.scrollHeight", sectionTeam.scrollHeight);
      scrollHeight.team = sectionTeam.offsetTop - 300;
      // console.log("3", { ...scrollHeight });
      // setTeamScrollHeight(sectionTeam.offsetTop - 200)
    }
    if (sectionContact) {
      // console.log("sectionContact.scrollHeight", sectionContact.scrollHeight);
      scrollHeight.contact = sectionContact.offsetTop - 300;
      // console.log("4", { ...scrollHeight });
      // setContactScrollHeight(sectionContact.offsetTop - 200)
    }
    // console.log({ ...scrollHeight });
    setScrollHeight({ ...scrollHeight });
    // console.log("windowSize.pageYOffset", windowSize.pageYOffset)
    // if (sectionAbout && windowSize.pageYOffset >= sectionAbout.scrollHeight) {
    //   setActivePath('about')
    //   console.log("inside about")
    // }
    // console.log("sectionAbout", sectionAbout, sectionAbout.scrollHeight)
  }, [windowSize]);

  return (
    <div>
      {/* {console.log("scrollHeight", scrollHeight)}
      {console.log("aboutScrollHeight ", windowSize.pageYOffset, scrollHeight.about, scrollHeight.service, windowSize.pageYOffset > scrollHeight.about && windowSize.pageYOffset < scrollHeight.service)}
      {console.log("servicesScrollHeight ", windowSize.pageYOffset, scrollHeight.service, scrollHeight.team, windowSize.pageYOffset > scrollHeight.service && windowSize.pageYOffset < scrollHeight.team)} */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-lg-between">

          {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">SNSS</a></h1> */}
          <div>
            <img src="logo.png" className="logo" style={{ width: '200px' }}></img>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>

              <li>
                <NavLink to="/" className={({ isActive }) =>
                  windowSize.pageYOffset < scrollHeight.about
                    && (isActive) ? 'active' : undefined
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/#about"
                  className={({ isActive }) =>
                    isActive && (windowSize.pageYOffset > scrollHeight.about && windowSize.pageYOffset < scrollHeight.service) ? 'active' : 'scrollto'
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/#services" className={({ isActive }) =>
                  (isActive && (windowSize.pageYOffset > scrollHeight.service && windowSize.pageYOffset < scrollHeight.team) ? 'active' : 'scrollto')
                }>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/#team" className={({ isActive }) =>
                  isActive && (windowSize.pageYOffset > scrollHeight.team && windowSize.pageYOffset < scrollHeight.contact) ? 'active' : 'scrollto'
                }>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) =>
                  isActive ? 'active' : 'scrollto'
                }>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/#contact" className={({ isActive }) =>
                  isActive && (windowSize.pageYOffset > scrollHeight.contact) ? 'active' : 'scrollto'
                }>
                  Contact
                </NavLink>
              </li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>

      </header>
      {/* <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <img src="logo.png" style={{ width: '100%' }}></img>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3><a href="">Quicker Actions</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3><a href="">Optimized Solutions</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3><a href="">Holistic Approach</a></h3>
              </div>
            </div>

          </div>

        </div>
      </section> */}
    </div>
  )
}
export default Header;