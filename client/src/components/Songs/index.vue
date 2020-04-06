<template>
  <v-layout>
    <v-flex xs6>
      <song-bookmarks />
       <recently-viewed-song class="ml-2"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
       <songs-search-panel />
       <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongBookmarks from './SongBookmarks'
import RecentlyViewedSong from './RecetlyViewedSongs'
import SongsService from '../../services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },

  components: {
    SongsPanel,
    SongsSearchPanel,
    SongBookmarks,
    RecentlyViewedSong
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 3px auto ;
}
</style>
