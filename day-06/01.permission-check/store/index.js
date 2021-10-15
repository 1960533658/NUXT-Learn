
// 引入cookieparser
const cookieParser =  require("cookieparser");
export const state = () => {
  return {
    auth: ""
  }
}

export const mutations = {
  updateStatus(state, payload) {
    state.auth = payload
  }
}

export const actions = {
  nuxtServerInit({commit}, {req}) {
    // console.log(context, "context")
    // console.log(app)
    let auth = "";
    commit("updateStatus", "")
    // 判断用户是否已经登录
    if (req.headers.cookie) {
      let parser = cookieParser.parse(req.headers.cookie)
      auth = parser.auth
    }
    commit("updateStatus", auth)
    // console.log(parser);
  }
}