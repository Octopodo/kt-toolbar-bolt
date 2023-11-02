<template>
  <div>


    
    <v-col class="mt-8 mr-2">
      <v-row>
        <v-btn
          size="x-small"
          rounded="false"
          icon="mdi-arrow-collapse-all"
          color="orange"
          class="mb-1"
          @click.prevent="zoom(-1)"
        ></v-btn>
      </v-row>
      <v-row>
        <v-btn
          size="x-small"
          rounded="false"
          icon="mdi-arrow-expand-all"
          color="orange"
          @click.prevent="zoom(1)"
        ></v-btn>
      </v-row>
      
    </v-col>

  </div>
</template>

<script lang="ts" setup>
import { reactive , watch, computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore()


function zoom(multiplier:number){
  store.zoom(multiplier)
}
</script>

<style lang="scss" scoped>

</style>