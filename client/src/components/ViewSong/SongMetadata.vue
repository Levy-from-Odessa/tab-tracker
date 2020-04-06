<template>
  <div>
    <panel title="Song Metadata">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn class="cyan" :to="{name: 'edit-song', params: {songId: song.id}}" dark>Edit</v-btn>
          <v-btn class="cyan" v-if="isUserLoggedIn && !bookmark"  @click="setAsBookmark" dark>Bookmark</v-btn>
          <v-btn class="cyan" v-if="isUserLoggedIn && bookmark" @click="unBookmark" dark>unBookmark</v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt /><br>
          {{song.album}}
        </v-flex>
      </v-layout>
    </panel>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '../../services/BookmarkService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false,
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unBookmark () {
      try {
        console.log(this.bookmark)
        await BookmarkService.delete(this.bookmark.id)
        // пытается удалит SONG
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    async song () {
      console.log(this.user)
      if (this.UserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarkService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
        console.log(this.bookmark)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 3px auto;
}
</style>
