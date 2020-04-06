import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('histories', {params: params})
  },
  post (params) {
    return Api().post('histories', {params: params})
  }
}
