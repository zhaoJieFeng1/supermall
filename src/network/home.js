import {request} from "./request";

export function getHomeMultidatea() {
  return request({
    url: '/home/multidata'
  })
}
