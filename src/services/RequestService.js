import axios from 'axios'

export const ApiRequest = async (method, url, data, headers) => {
  if (!headers) {
    headers = prepareHeader()
  }
  const config = {
    method,
    url,
    headers,
    // baseURL: 'http://localhost:3001',
    baseURL: 'https://www.snssindia.in'
  }
  if (data) {
    config.data = data;
  }
  try {
    const response = await axios(config);
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log("e.response", e);
    throw e.resonse
  }
}

const prepareHeader = () => {
  //   let userInfo = localStorage.getItem('userInfo');
  //   if (userInfo) {
  //     userInfo = JSON.parse(userInfo);

  return {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${userInfo.token}`,
    },
  }
  //   }
  //   return null;
}