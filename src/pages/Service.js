import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router'
import { services } from '../constant/service-detail';
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { seo } from '../utils';

export default function Service(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  // const [isMobileView, setIsMobileView] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // const { blog, bucketUrl } = state;
  // const [blogs, setBlogs] = useState([]);
  // const [bucketUrl, setBucketUrl] = useState([]);
  useEffect(() => {
    const element = document.getElementById('service-detail');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100
      })
    }
    console.log("service", service)
    if (!service) {
      navigate('/')
    } else {
      const serviceDetail = services.find((s) => s.key === service)
      console.log('serviceDetail', serviceDetail)
      if(serviceDetail){
       seo({ title: serviceDetail.metaTitle })
      }
      if (!serviceDetail) {
        navigate('/')
      } else {
        setServiceDetail(serviceDetail);
      }
    }
    // getAllBlogs();
  }, [])

  useEffect(() => {
    console.log("location changed", location)
    const serviceDetail = services.find((s) => s.link === location.pathname)
    seo({ title: serviceDetail.metaTitle })
    if (serviceDetail) {
      setServiceDetail(serviceDetail);
    }
  }, [location]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      // getWindowSize();
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight, pageYOffset } = window;
    console.log(innerWidth, innerHeight, pageYOffset)
    // if (innerWidth <= 992) {
    //   setIsMobileView(true);
    // } else {
    //   setIsMobileView(false);
    // }
    return { innerWidth, innerHeight, pageYOffset };
  }

  const navigateService = (key) => {
    navigate(`/service/${key}`)
    const serviceDetail = services.find((s) => s.key === key)
    console.log('serviceDetail', serviceDetail)
    seo({ title: serviceDetail.metaTitle })
    if (!serviceDetail) {
      navigate('/')
    } else {
      setServiceDetail(serviceDetail);
    }
  }


  return (
    <div
      id="service-detail"
    >
      {serviceDetail && <>
        <PageHeader pageTitle={serviceDetail.title}></PageHeader>

        <div className="container" >
          <Row className='ms-2'>
            <Col lg={3} md={12} sm={12}></Col>
            <Col>
              <div className="service-title">{serviceDetail.title}</div>
            </Col>
          </Row>
          <Row className='ms-2'>
            {/* <Col md={2}>

        </Col> */}
            {windowSize && windowSize.innerWidth >= 992 && <Col md={3}>
              {services.map((s) => s.content && <div className={`service-side-link ${serviceDetail.key === s.key ? 'active-side-link' : ''}`} key={s.key} onClick={() => navigateService(s.key)}>{s.title}</div>)}
            </Col>}
            <Col lg={9} md={12} sm={12}>
              <div>{serviceDetail.content.map((c, index) => {
                return <><Row>
                  {/* {index % 2 !== 0 && < Col >
                  <img src={`${c.imgPath}`} style={{ width: '100%' }}></img>
                </Col>
                } */}
                  <Col>
                    <div>
                      {c.type === 'paragraph' && <p className='content-center'>{c.content}</p>}
                      {c.type === 'list' && <div className='custom-list'>
                        {c.title && <p>{c.title}</p>}
                        <ul>{
                          c.content.map((cnt) => <li>{cnt}</li>)
                        }</ul>
                      </div>}
                    </div>
                  </Col>
                  {/* {index % 2 === 0 && <Col>
                  <img src={`${c.imgPath}`} style={{ width: '100%' }}></img>
                </Col>} */}
                </Row>
                  <br />
                </>
              })}</div>
              {/* <div><img src={`${bucketUrl}/${blog.poster_image}`} className="blog-poster-image"></img></div> */}
              {/* <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
            </Col>
            {/* <Col md={2}>

        </Col> */}
          </Row></div></>}

      {/* <ContactUs></ContactUs> */}
    </div >
  )
}