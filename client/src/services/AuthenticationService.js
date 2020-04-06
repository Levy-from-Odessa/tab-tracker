import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    console.log('login auto')
    return Api().post('login', credentials)
  }
}
