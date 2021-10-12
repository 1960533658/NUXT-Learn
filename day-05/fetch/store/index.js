// 存放公共数据
export const state = () => {
  return {
    topics: []
  }
}
// 修改数据同步方法
export const mutations = {
  updataTopics(state,payload) {
    state.topics = payload
  }
} 
