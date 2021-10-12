import axios from "axios";
export default (context, inject) => {
  // 基准地址
  axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
  inject("api", {
    /**
     * 加载主题列表
     * @param {String} path 
     * @returns Promise
     */
    getTopics(path) {
      return axios.get(path)
    },
    /**
     * 加载主题详情
     * @param {String} path 
     * @returns Promise
     */
    getTopicsDetail(path) {
      return axios.get(path)
    }
  })
}