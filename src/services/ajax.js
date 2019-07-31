import axios from 'axios';

// eslint-disable-next-line
const baseUrl = '';

const ajax = (url, options) => {
  if(!url){
    throw new Error('url is required.');
  }

  if(typeof url !== 'string'){
    throw new Error('url should be string.');
  }

  const {
    method,
    ...restOptions
  } = options;

  return axios({
    url: baseUrl + url,
    method: method && method.toUpperCase() || 'POST',
    ...restOptions
  }).then(res=>{
    return res.data;
  }).catch(err=>{
    // do something
    //全局错误提示

    return err;
  });
};

export default ajax;
