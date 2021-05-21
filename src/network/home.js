import { request } from "./request"

export function getHomeMultidata() {
  return request({
    url: "http://127.0.0.1:5000/index/banner"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: "http://127.0.0.1:5000/index/goodsList",
    params: {
      type,
      page
    }
  })
}
