import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { getBlogs, getBlogDetail } from '../services/BlogService';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../components/PageHeader';

export default function BlogDetail(props) {
  // const { state } = useLocation();
  const { uuid } = useParams();
  const [blog, setBlog] = useState(null);
  const [bucketUrl, setBucketUrl] = useState(null);
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
  return (
    <>
      <PageHeader
        pageTitle='Blogs'
        backgroundImage="../assets/img/hero-bg2.jpg"
      ></PageHeader>
      <div
        id="blog-detail"
      // className={styles.container}
      >


        {blog && <Row>
          <Col md={2}>

          </Col>
          <Col>
            <div style={{ paddingLeft: '7px', paddingRight: '7px' }}>
              <div className='blog-title'>{blog.title}</div>
              <div><img src={`${bucketUrl}/${blog.poster_image}`} className="blog-poster-image"></img></div>
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </Col>
          <Col md={2}>

          </Col>
        </Row>}
      </div>
    </>
  )
}