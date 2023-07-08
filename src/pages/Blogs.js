import { useEffect, useState } from 'react';
import BlogsComponent from '../components/Blogs';
import { seo } from '../utils';


export default function Blogs(props) {
  // useEffect(() => {
  //   seo();
  // },[]);
  return <BlogsComponent type="blog"></BlogsComponent>
}