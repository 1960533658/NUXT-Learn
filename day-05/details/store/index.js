// 公共数据
export const state = () => {
  return {
    topics: []
  }
}

// 修改数据的同步方法
export const mutations = {
  updateTopics(state, payload) {
    state.topics = payload
  }
}