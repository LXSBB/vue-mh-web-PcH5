import axios from 'axios';

// 创建实例
const Instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

Instance.interceptors.request.use(
  config => {
    // 根据请求方法构建请求参数和数据
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
Instance.interceptors.response.use(
  response => {
    const code = response.data && response.data.code;
    if (code === 0) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

export default Instance;
