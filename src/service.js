import axios from 'axios';

export function getData(url, params = null, sucFun) {
  axios
    .get(url, { params })
    .then((res) => {
      sucFun(res.data);
    });
}

export function postData(url, params = null, sucFun) {
  axios
    .get(url, params)
    .then((res) => {
      sucFun(res.data);
    });
}
