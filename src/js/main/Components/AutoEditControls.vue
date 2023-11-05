<template>
  <div class="mt-4">
    <v-row>

    <v-col>
      
      <v-btn 
        class=" mx-6" 
        width="180" 
        height="30" 
        color="light-blue-darken-1" 
        border-radius="0"
        @click.prevent="autoedit"
      >
        <v-icon size="x-large">mdi-alien</v-icon>
      </v-btn>
      <item-selectors
        class="ml-4 mt-1"
      ></item-selectors>
    </v-col>
  </v-row>
  </div>
</template>

<script setup lang="ts">
import ItemSelectors from './ItemSelectors.vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore();


function autoedit() {
  store.autoEdit()
}
</script>



<style scoped>

</style>