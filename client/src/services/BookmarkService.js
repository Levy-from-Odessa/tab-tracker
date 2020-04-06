import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('bookmark', {params: params})
  },
  post (params) {
    return Api().post('bookmark', {params: params})
  },
  delete (bookmarkId) {
    return Api().delete(`bookmark/${bookmarkId}`)
  }
}
