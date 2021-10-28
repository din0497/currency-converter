import axios from "axios";

const baseURL = "http://api.exchangeratesapi.io/v1/";
const apiclient = axios.create({
  baseURL,
});

apiclient.defaults.params = {};


apiclient.interceptors.request.use(
  async (config) => {

    return config;
  },
  (error) => Promise.reject(error)
);
apiclient.interceptors.response.use(
  (response) =>

    Promise.resolve(response),
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log("Bad request");
          break;
        case 401:
          console.log("unauthorized");
          break;
        case 403:
          console.log("access denied");
          break;
        case 404:
          console.log("Request error, the resource was not found");
          break;
        case 405:
          console.log("Request method not allowed");
          break;
        case 408:
          console.log("Request timed out");
          break;
        case 500:
          console.log("Server-side error");
          break;
        case 501:
          console.log("Network not implemented");
          break;
        case 502:
          console.log("Network Error");
          break;
        case 503:
          console.log("service is not available");
          break;
        case 504:
          console.log("network timeout");
          break;
        case 505:
          console.log("http version does not support the request");
          break;
        default:
          console.log(`connection error${error.response.status}`);
      }
    } else {
      console.log("Failed to connect to server");
    }
    return Promise.reject(error);
  }
);

// /**
//  * @param {String} url
//  * @param {Object} params
//  * @returns {Promise}
//  */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    apiclient
      .get(url, { params })
      .then((res) => {
        if (res.status === 200) {
          if (res.data || !res.data.code) {
            // request is successful
            resolve(res.data);
          } else {
            // request error
            reject(res);
          }
        } else {
          // Server Error
          console.log("Server Error!");
          reject(res);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
