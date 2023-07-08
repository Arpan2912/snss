import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import moment from 'moment';

import { getBlogs } from '../services/BlogService';
import { Row, Col, Card, FormControl } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader';
import { categories, subCategories } from '../constant/category';

// const categories = [
//   {
//     name: 'Valuation Scoop',
//     value: 'valuation'
//   },
//   {
//     name: 'Tax Tidings',
//     value: 'tax'
//   },
//   {
//     name: 'FEMA Flash',
//     value: 'fema'
//   },
//   {
//     name: 'Global Business Setup',
//     value: 'global_business_setup'
//   },
//   {
//     name: 'Startup Sparkle',
//     value: 'startup'
//   }
// ];

// const subCategories = {
//   tax: [
//     {
//       name: 'Direct Tax',
//       value: 'direct_tax'
//     },
//     {
//       name: 'International Tax',
//       value: 'international_tax'
//     },
//     {
//       name: 'Transfer Pricing',
//       value: 'transfer_pricing'
//     },
//     {
//       name: 'GST',
//       value: 'gst'
//     },
//     {
//       name: 'NRI taxation',
//       value: 'nri_taxation'
//     }
//   ],
//   fema: [
//     {
//       name: 'Foreign Direct Investment',
//       value: 'foreign_direct_investment'
//     },
//     {
//       name: 'Overseas Investment',
//       value: 'overseas_investment'
//     },
//     {
//       name: 'External Commercial Borrowings',
//       value: 'external_commercial_borrowings'
//     },
//     {
//       name: 'Dealing In Immovable properties by NRI',
//       value: 'dealing_in_immovable_properties_by_nri'
//     }
//   ],
//   global_business_setup: [
//     {
//       name: 'United Arab Emirates(UAE)',
//       value: 'uae'
//     },
//     {
//       name: 'United States of America(USA)',
//       value: 'usa'
//     },
//     {
//       name: 'Canada',
//       value: 'canada'
//     }
//   ]
// }

const pageSize = 6;
export default function Blogs({ type }) {
  let navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loadMoreData, setLoadMoreData] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [blogs, setBlogs] = useState([]);
  const [bucketUrl, setBucketUrl] = useState(null);

  useEffect(() => {
    getAllBlogs(1);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  const handleWindowResize = () => {
    setWindowSize({ ...getWindowSize() });
  }

  useEffect(() => {
    const blogListComponent = document.querySelector('#blogs-list')
    console.log("blogListComponent", blogListComponent)
    if (blogListComponent) {
      if (windowSize.pageYOffset + 50 >= blogListComponent.offsetHeight + blogListComponent.scrollTop && blogListComponent.offsetHeight > 0) {
        console.log("load more data....")
        if (loadMoreData) {
          getAllBlogs(page + 1);
        }
      }
      // let componentBottom = blogListComponent.offsetTop + blogListComponent.offsetHeight - 280;
      // console.log("componentBottom", componentBottom)
      // console.log("windowSize.pageYOffset", windowSize.pageYOffset)
      // if (windowSize.pageYOffset > componentBottom) {
      //   console.log("load more data....")
      //   if (loadMoreData) {
      //     getAllBlogs(page + 1);
      //   }
      // }
      // console.log("1", { ...scrollHeight });
      // setAboutScrollHeight(blogList.offsetTop - 200)
    }
  }, [windowSize])

  function getWindowSize() {
    const { innerWidth, innerHeight, pageYOffset } = window;
    return { innerWidth, innerHeight, pageYOffset };
  }

  const getAllBlogs = async (page) => {
    const blogsResponse = await getBlogs(type, page, pageSize);
    console.log("blogsResponse", blogsResponse)
    const { data: { blogs: blogsData, bucketUrl } } = blogsResponse;
    if (blogsData.length > 0) {
      if (blogsData.length !== pageSize) {
        setLoadMoreData(false);
      }
      setPage(page);
    }
    console.log("blogsData", blogsData)
    setBlogs([...blogs, ...blogsData]);
    setBucketUrl(bucketUrl)
  }

  const openBlog = (blog) => {
    if (type === 'news_and_update') {
      navigate(`/news/${blog.url}`, { state: { blog, bucketUrl } })
    } else {
      navigate(`/blog/${blog.url}`, { state: { blog, bucketUrl } })
    }
    // history.push("/blog", {
    //   blog
    // })
  }

  const findCategory = (category) => {
    const blogCategory = categories.find((c) => c.value === category);
    return blogCategory && blogCategory.name ? blogCategory.name : category;
  }

  return (
    <>
      <PageHeader
        pageTitle={type === 'news_and_update' ? 'News and Updates' : 'Blogs'}
        backgroundImage="../assets/img/hero-bg2.jpg"
      ></PageHeader>
      <div
        className='blog-container'
      >

        {/* <Header></Header> */}
        <div id="blogs-list">
          {/* <Row>
          <Col>
            <div style={{ position: 'relative' }} className='search-control'>
              <FormControl type='text' name="search">

              </FormControl>
              <span style={{ position: 'relative' }}>Search</span>
            </div>
          </Col>
        </Row> */}
          <Row>
            {blogs.map((b) => <Col lg={4} md={6} sm={12} className='mt-4 mb-4'>
              <Card className='blog-list-card' onClick={() => openBlog(b)} >
                {bucketUrl && <img src={`${bucketUrl}/${b.poster_image}`} className="poster-list-image"></img>}
                {b.category && <div className='blog-list-category'>{findCategory(b.category)}</div>}
                <Card.Body>
                  <div className="blog-list-title">{b.title}</div>
                  <div className="blog-list-description">{b.description}</div>
                  <div className='blog-date'>{moment(b.created_at).format('MMMM DD, YYYY')}</div>
                  {/* <div className='blog-date'>{moment(b.created_at).format('DD MMMM YYYY')}</div> */}
                </Card.Body>
              </Card>
            </Col>
            )}
          </Row>
        </div>
      </div>
    </>)
}