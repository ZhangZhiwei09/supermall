import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getProductData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}