import { ApiRequest } from '../services/RequestService';
import { endpoints } from '../constant/endpoint';
const { ADD_BLOG, GET_BLOG, GET_BLOGS } = endpoints;

const addBlog = (data) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  return ApiRequest('post', ADD_BLOG, data, headers)
}

const getBlogs = (page, pageSize) => {
  return ApiRequest('get', `${GET_BLOGS}?page=${page}&limit=${pageSize}`, null, null)
}

const getBlogDetail = (uuid) => {
  return ApiRequest('get', `${GET_BLOG}?uuid=${uuid}`, null, null)
}

export {
  addBlog,
  getBlogs,
  getBlogDetail
}