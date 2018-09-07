const service = require('axios').create({
  baseURL: 'http://172.17.191.60:3000',            //api请求的baseURL
  timeout: 0,
  withCredentials: true, // 允许跨域 cookie
  Headers: {'X-Requested-With': 'XMLHttpRequest'},
  maxContentLength: 2000,
  transformResponse: [function (data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      data = {};
    }
    return data;
  }]
});

// post
export const _post = (req) => {
  return service({method: 'post', url: `/${req.url}`, data: req.data})
};

//get
export const _get= (req) => {
  return service(req.url, {params: req.data})
};
