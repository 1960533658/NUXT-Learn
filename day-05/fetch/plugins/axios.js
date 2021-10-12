import axios from "axios";
export default (context, inject) => {
  // 基准地址
  axios.defaults.baseURL = "https://cnodejs.org/api/v1"
  inject('api', {

    /**
     * 加载主题列表
     * @param {String} path 
     * @returns Promsie
     */
    getTopics(path) {
      return axios.get(path)
    }
  })
}