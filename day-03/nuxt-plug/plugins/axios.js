import axios from "axios";
export default (context, inject) => {
  // 注入插件
  inject('api', {
    getTopics(path) {
      return axios.get(`https://cnodejs.org/api/v1${path}`)
    }
  })
}