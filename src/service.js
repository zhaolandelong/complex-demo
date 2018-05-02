import axios from 'axios';

export function getData(url, params = null, sucFun) {
  axios
    .get(url, { params })
    .then((res) => {
      sucFun(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function postData(url, params = null, sucFun) {
  axios
    .get(url, params)
    .then((res) => {
      sucFun(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
