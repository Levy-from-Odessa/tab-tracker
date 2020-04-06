<template>
  <div>
    <panel title="Recently viewed">
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="songs">
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
import SongHistoryService from '../../services/SongHistoryService'
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
        sortBy: 'createdAt',
        descending: true

      },
      songs: []
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongHistoryService.index({
        userId: this.user.id
      })).data
    }
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
