import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserIdKey = 'userId'
const TagsViewKey = 'tagsView'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUserId(userId) {
  return Cookies.set(UserIdKey, userId)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function removeUserId() {
  return Cookies.remove(UserIdKey)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTags(tags){
  sessionStorage.setItem(TagsViewKey,JSON.stringify(tags))
}

export function getTags(){
  return JSON.parse(sessionStorage.getItem(TagsViewKey)) || []
}

export function clearTags(){
  sessionStorage.clear()
}
