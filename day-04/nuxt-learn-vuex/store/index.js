export const state = () => {
  return {
    count: 0
  }
}
export const mutations = {
  // 同步 加
  increment(state,payload) {
    state.count+= payload
  },
  // 更改count
  updataCount(state,payload) {
    state.count = payload
  }
}
export const actions = {
  asyncIncrement({commit},payload) {
    setTimeout(() => {
      commit("increment", payload)
    },1000)
  }
}