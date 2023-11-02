<template>
  <v-app >
    <!-- <v-toolbar height="500px"> -->
      <main-panel></main-panel>
    <!-- </v-toolbar> -->
      
  </v-app>
  
</template>


<script lang="ts">

import MainPanel from "./Components/MainPanel.vue"

export default {
  name:'App',
  components: {
    MainPanel
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>