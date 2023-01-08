import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { getBlogs, getBlogDetail } from '../services/BlogService';
import { Row, Col, Card } from 'react-bootstrap';
import moment from 'moment';
import { useNavigate, useLocation, useParams } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader';
import { Download } from 'react-ionicons'
import { downlodFile } from '../utils';

const mobileWidth = 992;


const categories = [
  {
    name: 'Valuation Scoop',
    value: 'valuation'
  },
  {
    name: 'Tax Tidings',
    value: 'tax'
  },
  {
    name: 'Fema Flash',
    value: 'fema'
  },
  {
    name: 'Global Business Setup',
    value: 'global_business_setup'
  }
];

const subCategories = {
  tax: [
    {
      name: 'Direct Tax',
      value: 'direct_tax'
    },
    {
      name: 'International Tax',
      value: 'international_tax'
    },
    {
      name: 'Transfer Pricing',
      value: 'transfer_pricing'
    },
    {
      name: 'GST',
      value: 'gst'
    },
    {
      name: 'NRI taxation',
      value: 'nri_taxation'
    }
  ],
  fema: [
    {
      name: 'Foreign Direct Investment',
      value: 'foreign_direct_investment'
    },
    {
      name: 'Overseas Investment',
      value: 'overseas_investment'
    },
    {
      name: 'External Commercial Borrowings',
      value: 'external_commercial_borrowings'
    },
    {
      name: 'Dealing In Immovable properties by NRI',
      value: 'dealing_in_immovable_properties_by_nri'
    }
  ],
  global_business_setup: [
    {
      name: 'United Arab Emirates(UAE)',
      value: 'uae'
    },
    {
      name: 'United States of America(USA)',
      value: 'usa'
    },
    {
      name: 'Canada',
      value: 'canada'
    }
  ]
}


export default function BlogDetail(props) {
  // const { state } = useLocation();
  const { uuid } = useParams();
  const [blog, setBlog] = useState(null);
  const [bucketUrl, setBucketUrl] = useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  const handleWindowResize = () => {
    setWindowSize({ ...getWindowSize() });
  }

  // console.log("state", state)
  // const { blog, bucketUrl } = state;

  // const [blogs, setBlogs] = useState([]);
  // const [bucketUrl, setBucketUrl] = useState([]);
  useEffect(() => {

    if (uuid) {
      getBlogDetailFunc(uuid);
    }
    // getAllBlogs();
  }, [])


  const getBlogDetailFunc = async (uuid) => {
    const blogDetail = await getBlogDetail(uuid);
    const { blog, bucketUrl } = blogDetail.data;
    setBucketUrl(bucketUrl);
    setBlog(blog);
    const element = document.getElementById('blog-detail');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100
      })
    }
    // console.log("blogDetail", blogDetail);
  }

  function getWindowSize() {
    const { innerWidth, innerHeight, pageYOffset } = window;
    return { innerWidth, innerHeight, pageYOffset };
  }

  const findCategory = (category) => {
    const blogCategory = categories.find((c) => c.value === category);
    return blogCategory && blogCategory.name ? blogCategory.name : category;
  }

  const fetchImage = (key) => {
    if (key.includes('.pdf')) {
      return '/assets/img/pdf.png'
    }
    if (key.includes('.xlsx')) {
      return '/assets/img/excel.png'
    }
    if (key.includes('.csv')) {
      return '/assets/img/excel.png'
    }
  }

  const fetchClass = (key) => {
    if (key.includes('.pdf')) {
      return 'attachment-pdf'
    }
    if (key.includes('.xlsx')) {
      return ''
    }
    if (key.includes('.csv')) {
      return ''
    }
  }

  return (
    <>
      {windowSize.innerWidth >= mobileWidth && <PageHeader
        pageTitle={blog && blog.category ? findCategory(blog.category) : 'Blogs'}
        backgroundImage="../assets/img/hero-bg2.jpg"
      ></PageHeader>}
      <div
        id="blog-detail"
        // className={styles.container}
        style={{ marginTop: `${windowSize.innerWidth >= mobileWidth ? '0' : '50px'}` }}
      >
        {blog && <Row>
          <Col md={2}>

          </Col>
          <Col>
            <div style={{ paddingLeft: '7px', paddingRight: '7px', paddingBottom: '7px' }}>
              <div className='blog-title'>{blog.title}</div>
              <div className='blog-detail-last'>
                {/* Niranjan Shah (niranjan@snssindia.in) <span style={{ color: '#c70c0c' }}>|</span>  */}
                {moment(blog.created_at).format('MMMM DD, YYYY')}
              </div>
              <div><img src={`${bucketUrl}/${blog.poster_image}`} className="blog-poster-image"></img></div>
              <div className='blog-detail-description'>{blog.description}</div>
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }} />
              <div className='attachment-container'>
                {blog.attachments && blog.attachments.map((a) =>
                  <div className='attachment'>
                    <img className={`attachment-img ${fetchClass(a.attachment)}`} title={a.attachment} src={fetchImage(a.attachment)}></img>
                    <div className='download-icon'>
                      <Download
                        style={{ zIndex: 100, cursor: 'pointer' }}
                        color={'#444345'}
                        // rotate
                        height="25px"
                        width="25px"
                        onClick={() => downlodFile(`${bucketUrl}/${a.attachment}`)}
                      />
                    </div>
                  </div>)
                }
              </div>
              {/* <div className='blog-detail-last'>{moment(blog.created_at).format('DD MMM `YY')}</div> */}
            </div>
          </Col>
          <Col md={2}>

          </Col>
        </Row>}
      </div>
    </>
  )
}