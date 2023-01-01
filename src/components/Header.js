
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { services } from '../constant/service-detail';

// const defaultScrollHeights = {
//   about: 5000,
//   service: 5000,
//   team: 5000,
//   contact: 5000
// }
const mobileWidth = 992;
const Header = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // const [activePath, setActivePath] = useState(Infinity);
  // const [scrollHeight, setScrollHeight] = useState(defaultScrollHeights);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight, pageYOffset } = window;
    return { innerWidth, innerHeight, pageYOffset };
  }

  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   const sectionAbout = document.querySelector('#about')
  //   const sectionService = document.querySelector('#services')
  //   const sectionTeam = document.querySelector('#team')
  //   const sectionContact = document.querySelector('#contact')
  //   const scrollHeight = { ...defaultScrollHeights }
  //   if (sectionAbout) {
  //     // console.log("clientTop", sectionAbout.clientTop)
  //     // console.log("sectionAbout.scrollHeight", sectionAbout.scrollHeight);
  //     scrollHeight.about = sectionAbout.offsetTop - 300
  //     // console.log("1", { ...scrollHeight });
  //     // setAboutScrollHeight(sectionAbout.offsetTop - 200)
  //   }
  //   if (sectionService) {
  //     // console.log("sectionService.scrollHeight", sectionService.scrollHeight);
  //     scrollHeight.service = sectionService.offsetTop - 300;
  //     // console.log("2", { ...scrollHeight });
  //     // setServicesScrollHeight(sectionService.offsetTop - 200)
  //   }
  //   if (sectionTeam) {
  //     // console.log("sectionTeam.scrollHeight", sectionTeam.scrollHeight);
  //     scrollHeight.team = sectionTeam.offsetTop - 300;
  //     // console.log("3", { ...scrollHeight });
  //     // setTeamScrollHeight(sectionTeam.offsetTop - 200)
  //   }
  //   if (sectionContact) {
  //     // console.log("sectionContact.scrollHeight", sectionContact.scrollHeight);
  //     scrollHeight.contact = sectionContact.offsetTop - 300;
  //     // console.log("4", { ...scrollHeight });
  //     // setContactScrollHeight(sectionContact.offsetTop - 200)
  //   }
  //   // console.log({ ...scrollHeight });
  //   setScrollHeight({ ...scrollHeight });
  //   // console.log("windowSize.pageYOffset", windowSize.pageYOffset)
  //   // if (sectionAbout && windowSize.pageYOffset >= sectionAbout.scrollHeight) {
  //   //   setActivePath('about')
  //   //   console.log("inside about")
  //   // }
  //   // console.log("sectionAbout", sectionAbout, sectionAbout.scrollHeight)
  // }, [windowSize]);

  return (
    <div>
      {/* {console.log("scrollHeight", scrollHeight)}
      {console.log("aboutScrollHeight ", windowSize.pageYOffset, scrollHeight.about, scrollHeight.service, windowSize.pageYOffset > scrollHeight.about && windowSize.pageYOffset < scrollHeight.service)}
      {console.log("servicesScrollHeight ", windowSize.pageYOffset, scrollHeight.service, scrollHeight.team, windowSize.pageYOffset > scrollHeight.service && windowSize.pageYOffset < scrollHeight.team)} */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-lg-between">

          {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">SNSS</a></h1> */}
          <div>
            <Link to="/"><img src="logo.png" alt="SNSS" className="logo" style={{ width: '200px' }}></img></Link>
          </div>

          <nav id="navbar" className={`${windowSize.innerWidth >= mobileWidth ? 'navbar' : 'navbar-mobile'} order-last order-lg-0`}>
            {<ul style={{ display: `${isMobileMenuOpen || windowSize.innerWidth >= mobileWidth ? 'inherit' : 'none'}` }} onClick={() => setIsMobileMenuOpen(false)}>
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  (isActive) ? 'active' : undefined
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined}
                >
                  About
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/services"
                  // onClick={e => {
                  //   e.preventDefault()
                  //   // setui(!ui)
                  // }}
                  className={({ isActive }) =>
                    isActive ? 'dropdown-toggle active' : 'dropdown-toggle'}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {services.map((s) => s.content && <NavLink className="dropdown-item" to={{
                    pathname: s.link,
                    state: { key: s.key }

                  }} key={s.key}>{s.title}</NavLink>)}
                  {/* <NavLink className="dropdown-item" to="#">Action</NavLink>
                  <NavLink className="dropdown-item" to="s">Another action</NavLink> */}
                </div>
              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) =>
                  isActive ? 'active' : 'scrollto'
                }>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) =>
                  isActive ? 'active' : 'scrollto'
                }>
                  Contact
                </NavLink>
              </li>
            </ul>}
            <i className="bi bi-list mobile-nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}></i>
          </nav>
        </div>

      </header >
    </div >
  )
}
export default Header;