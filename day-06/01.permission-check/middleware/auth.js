export default ({ store, redirect}) => {
  // 是否已登录
  if(!store.state.auth) redirect("/login")
}