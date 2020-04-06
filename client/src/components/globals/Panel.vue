<template>
 <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title >{{title}}</v-toolbar-title>
        <slot name="action" />
        </v-toolbar>
        <div class="ma-5">
          <slot>
            no Content
          </slot>

          </div>
      </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
