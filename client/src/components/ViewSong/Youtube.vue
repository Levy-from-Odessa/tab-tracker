<template>
  <div>
    <panel title="video">
      {{youtubeId}}
      <youtube
       :video-id="youtubeId"
       :player-width="500"
       :player-height="200"
       >
       </youtube>
    </panel>
  </div>
</template>

<script>

import VueYouTubeEmbed from 'vue-youTube-embed'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
