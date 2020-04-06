<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6  class="ml-2">
        <youtube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tabs :tabs="song.tab" />
      </v-flex>
      <v-flex xs6 class="ml-2 " >
        <lyrics :lyrics="song.lurics" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '../../services/SongsService'
import SongHistoryService from '../../services/SongHistoryService'

import {mapState} from 'vuex'

import SongMetadata from '../ViewSong/SongMetadata'
import Youtube from '../ViewSong/Youtube'
import Lyrics from '../ViewSong/Lyrics'
import Tabs from '../ViewSong/Tabs'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(songId)

    if (this.isUserLoggedIn) {
      console.log('history')
      SongHistoryService.post({
        songId: parseInt(songId)
      })
    }
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tabs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
