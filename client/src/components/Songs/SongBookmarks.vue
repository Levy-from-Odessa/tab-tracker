<template>
  <div>
    <panel title="Bookmarks">
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
        <template slot="items" scope="props">
          <td class="text-xs-right">
            {{props.item.title}}
          </td>
          <td class="text-xs-right">
            {{props.item.artist}}
          </td>
        </template>
      </v-data-table>
    </panel>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '../../services/BookmarkService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: true

      },
      bookmarks: []
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarkService.index()).data
    }
    console.log(this.bookmarks)
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
