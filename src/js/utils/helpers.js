import axios from 'axios';

export const parseJSON = (response) => {
  if (response.status === 201 || response.status === 204) {
    return new Promise((resolve) => {
      resolve({
        status: response.status,
        statusText: response.statusText,
        json: { message: 'OK' },
        headers: response.headers
      });
    });
  }
  return new Promise((resolve) => {
    resolve({
      status: response.status,
      statusText: response.statusText,
      json: response.data,
      headers: response.headers
    });
  });
};

export const headers = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const request = (url, options, includeHeader = false) => new Promise((resolve, reject) => {
  axios({
    url,
    headers: headers(),
    withCredentials: true,
    ...options
  })
    .then(parseJSON)
    .then((res) => {
      if (includeHeader) {
        return {
          json: res.json,
          headers: res.headers
        };
      }
      return res.json;
    })
    .then(resolve)
    .catch(reject);
});
