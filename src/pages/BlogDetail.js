import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { getBlogs } from '../services/BlogService';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogDetail(props) {
  const { state } = useLocation();
  const { blog, bucketUrl } = state;
  // const [blogs, setBlogs] = useState([]);
  // const [bucketUrl, setBucketUrl] = useState([]);
  useEffect(() => {
    const element = document.getElementById('blog-detail');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100
      })
    }
    // getAllBlogs();
  }, [])


  return (
    <div
      id="blog-detail"
    // className={styles.container}
    >
      <Row>
        <Col md={2}>

        </Col>
        <Col>
          <div className='blog-title'>{blog.title}</div>
          <div><img src={`${bucketUrl}/${blog.poster_image}`} className="blog-poster-image"></img></div>
          <div className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Col>
        <Col md={2}>

        </Col>
      </Row>
    </div>
  )
}