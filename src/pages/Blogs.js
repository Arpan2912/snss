import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { getBlogs } from '../services/BlogService';
import { Row, Col, Card, FormControl } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader';

const pageSize = 6;
export default function Blogs(props) {
  let navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loadMoreData, setLoadMoreData] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [blogs, setBlogs] = useState([]);
  const [bucketUrl, setBucketUrl] = useState(null);

  useEffect(() => {
    getAllBlogs(1);
    window.addEventListener('scroll', handleWindowResize);
    return () => {
      window.removeEventListener('scroll', handleWindowResize);
    };
  }, [])

  const handleWindowResize = () => {
    setWindowSize({ ...getWindowSize() });
  }

  useEffect(() => {
    const blogListComponent = document.querySelector('#blogs-list')
    console.log("blogListComponent", blogListComponent)
    if (blogListComponent) {
      console.log("blogListComponent.offsetHeight", blogListComponent.offsetHeight)
      console.log("blogListComponent.offsetTop", blogListComponent.offsetTop)
      console.log("blogListComponent.scrollHeight", blogListComponent.scrollHeight)
      console.log("blogListComponent.scrollTop", blogListComponent.scrollTop)
      console.log("blogListComponent.clientHeight", blogListComponent.clientHeight)
      console.log("windowSize.pageYOffset", windowSize.pageYOffset)
      console.log("Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1", Math.abs(blogListComponent.scrollHeight - blogListComponent.clientHeight - blogListComponent.scrollTop) < 1)
      console.log("blogListComponent.scrollHeight - Math.abs(blogListComponent.scrollTop) === blogListComponent.clientHeight", blogListComponent.scrollHeight - Math.abs(blogListComponent.scrollTop) === blogListComponent.clientHeight)

      //       OffsetHeight = Height of an element + Scrollbar Height.
      //         ClientHeight = Height of an element.
      // Height of scrollbar = offsetHeight – clientHeight.
      console.log("blogListComponent.offsetHeight + blogListComponent.scrollTop", blogListComponent.offsetHeight + blogListComponent.scrollTop)
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
    const blogsResponse = await getBlogs(page, pageSize);
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
    navigate(`/blog/${blog.uuid}`, { state: { blog, bucketUrl } })
    // history.push("/blog", {
    //   blog
    // })
  }

  return (
    <>
      <PageHeader
        pageTitle='Blogs'
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
              <Card className='blog-list-card' >
                {bucketUrl && <img src={`${bucketUrl}/${b.poster_image}`} className="poster-list-image"></img>}
                <Card.Body>
                  <div onClick={() => openBlog(b)} className="blog-list-title">{b.title}</div>
                  <div className="blog-list-description">{b.description}</div>
                </Card.Body>
              </Card>
            </Col>
            )}
          </Row>
        </div>
      </div>
    </>)
}