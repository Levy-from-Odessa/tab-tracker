<template>
      <panel title="Songs">
          <v-btn :to="{name:'create-song'}" slot="action" fab class="cyan accent-5" dark absolute right middle>add</v-btn>
        <div v-for="song in songs" v-bind:key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn class="cyan" :to="{name: 'view-song', params: {songId: song.id}}"  dark>more</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt=""/>
            </v-flex>
          </v-layout>

        </div>
      </panel>
</template>

<script>
import SongsService from '../../services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },

  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
