import { request } from "./request"

export function getHomeMultidata() {
  return request({
    // url: "http://47.112.175.182/index/banner"
    // url: "http://localhost:8080/getUrl"
    url: "http://127.0.0.1:5000/index/banner"
  })
}