import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";

axios.defaults.baseURL = " https://jsonplaceholder.org/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(function (config) {
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);

    switch (error.status) {
      case 400:
        Alert.alert(error.message);
        break;
      case 401:
        Alert.alert(error.message);
        break;
      case 500:
        Alert.alert(error.message);
        break;
      default:
        break;
    }
    //   console.log(data);

    return Promise.reject(error);
  }
);

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
};

//multipart
function createFormData(items: any) {
  let formData = new FormData();
  for (const key in items) {
    formData.append(key, items[key]);
  }
  return formData;
}

const Posts = {
  list: () => requests.get("posts"),
  details: (params: URLSearchParams) => requests.get(`comments`, params),
};

const agent = {
  Posts,
};

export default agent;
