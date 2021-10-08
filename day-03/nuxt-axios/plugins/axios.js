import axios from "axios";
export default (context, inject) => {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1"
  inject('api', {
    /**
     * 
     * huo获取主题列表
     * @param {string} path 
     * @returns Promise
     */
    getTopics(path) {
      return axios.get(path)
    }
  })
}