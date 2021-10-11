export const state = () => {
  return {
    state: 0,
    arr: [10, 20, 30, 40]
  }
}
export const mutations = {
  updataArr(state,payload) {
    state.arr.push(payload)
  }
}