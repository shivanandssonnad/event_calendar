import axios from 'axios';
import { generatePath } from 'react-router-dom';

export function createService(config) {
  const { baseUrl, url, method, headers: configHeaders } = config;
  return async (params, data, headers) => {
    const urlWithParams = generatePath(url, params);
    return axios({
      baseURL: baseUrl,
      url: urlWithParams,
      method,
      params,
      data,
      headers: {
        ...configHeaders,
        ...headers,
        'token': 'atk_j8bz79z7',
      },
    }).catch((error) => {
      const { response } = error || {};
      const { data } = response || {};
      return Promise.reject(data || error);
    });
  };
}
