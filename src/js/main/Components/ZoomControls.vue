<template>
  <div>


    
    <v-col class="mt-8 mr-2">
      <v-row>
        <v-btn
          size="x-small"
          rounded="false"
          icon="mdi-arrow-collapse-all"
          class="mb-1"
          @click.prevent="zoom(-1)"
          :variant="data.variant"
          :color="data.color"
        ></v-btn>
      </v-row>
      <v-row>
        <v-btn
          size="x-small"
          rounded="false"
          icon="mdi-arrow-expand-all"
          @click.prevent="zoom(1)"
          :variant="data.variant"
          :color="data.color"
        ></v-btn>
      </v-row>
      
    </v-col>

  </div>
</template>

<script lang="ts" setup>
import { reactive , watch, computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore()

const data = reactive({
  variant:"tonal",
  color: "amber-darken-3"
})

function zoom(multiplier:number){
  store.zoom(multiplier)
}
</script>

<style lang="scss" scoped>

</style>