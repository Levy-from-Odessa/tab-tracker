<template>
  <v-layout>

      <v-flex 4 xs >
        <panel title="Create Song">
          <v-text-field required :rules="[required]" v-model="song.title" type="title" name="title" label="title"></v-text-field >
          <v-text-field required :rules="[required]" v-model="song.artist" type="artist" name="artist" label="artist"></v-text-field >
          <v-text-field required :rules="[required]" v-model="song.genre" type="genre" name="genre" label="genre"></v-text-field >
          <v-text-field required :rules="[required]" v-model="song.album" type="album" name="album" label="album"></v-text-field >
          <v-text-field required :rules="[required]"
            v-model="song.albumImageUrl"
            type="albumImageUrl"
            name="albumImageUrl"
            label="albumImageUrl"
          ></v-text-field >
          <v-text-field required :rules="[required]" v-model="song.youtubeId" type="youtubeId" name="youtubeId" label="youtubeId"></v-text-field >
        </panel>
      </v-flex>
      <v-flex 8 xs ml-2>
        <panel title="song structure" >
          <v-text-field required :rules="[required]" multi-line v-model="song.lurics" type="lurics" name="lurics" label="lurics"></v-text-field >
          <v-text-field required :rules="[required]" multi-line v-model="song.tab" type="tab" name="tab" label="tab"></v-text-field >
        </panel><div v-html="error" class="error"></div>
         <v-btn class="cyan" @click="onCreateSong()" dark>Create a song</v-btn>
      </v-flex>

      </v-layout>
</template>

<script>
import SongsService from '../services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lurics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  methods: {
    async onCreateSong () {
      this.error = null
      const areAllFieldFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldFilledIn) {
        this.error = 'please fill all the req'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({name: 'song'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
