import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {params: {search: search}})
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (credentials) {
    return Api().post('songs', credentials)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
