<template>
  <div class="mt-5">
    <v-row>

    <v-col>
      <item-selectors
        class="ml-4"
      ></item-selectors>
      <v-btn 
        class="mt-3 ml-3" 
        width="300" 
        height="50" 
        color="red" 
        border-radius="0"
        @click.prevent="autoedit"
      >
        <v-icon size="x-large">mdi-alien</v-icon>
      </v-btn>
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