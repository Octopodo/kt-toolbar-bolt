<template>

    <div class="">
      <v-col class="pl-3">
        <!-- <v-btn-toggle 
          class="h-auto ma-1" 
          v-model="data.toggleValue"  
          > -->
            <v-col>
              <v-row>
                <v-btn @click.prevent="click(0)" size="x-small" :color="data.color" :variant="data.variant" value="0" :icon="icon('mdi-arrow-top-left')" class="pa-1 x-small" flex="1" />
                <v-btn @click.prevent="click(1)" size="x-small" :color="data.color" :variant="data.variant" value="1" :icon="icon('mdi-arrow-up')" flex="1"/>
                <v-btn @click.prevent="click(2)" size="x-small" :color="data.color" :variant="data.variant" value="2" :icon="icon('mdi-arrow-top-right')" flex="1"/>
              </v-row>
              <v-row>
                <v-btn @click.prevent="click(3)" size="x-small" :color="data.color" :variant="data.variant" value="3" :icon="icon('mdi-arrow-left')" class="pa-1" flex="1"/>
                <v-btn @click.prevent="click(4)" size="x-small" :variant="data.variant" value="4" icon="" disabled :active="false" flex="1"/>
                <v-btn @click.prevent="click(5)" size="x-small" :color="data.color" :variant="data.variant" value="5" :icon="icon('mdi-arrow-right')" flex="1"/>
              </v-row>
              <v-row>
                <v-btn @click.prevent="click(6)" size="x-small" :color="data.color" :variant="data.variant" value="6" :icon="icon('mdi-arrow-bottom-left')" class="pa-1" flex="1"/>
                <v-btn @click.prevent="click(7)" size="x-small" :color="data.color" :variant="data.variant" value="7" :icon="icon('mdi-arrow-down')" flex="1"/>
                <v-btn @click.prevent="click(8)" size="x-small" :color="data.color" :variant="data.variant" value="8" :icon="icon('mdi-arrow-bottom-right')" flex="1"/>
              </v-row>
            </v-col>
          <!-- </v-btn-toggle> -->
          
        </v-col>
    </div>

</template>


<script lang="ts" setup>

import { reactive, computed } from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const optionsStore = OptionsStore();




const data = reactive({
  toggleValue: undefined,
  arrowTypes: [
    "bold-box",
    'thick'
  ],
  arrow: 1,
  variant:"tonal",
  color: "amber-lighten-2"
})

function click (value: number) {
  optionsStore.setDirection(value)
  optionsStore.execute()
}

function icon(direction:string) {
  return `${direction}-${data.arrowTypes[data.arrow]}` 
}






</script>

<style scoped>

</style>



<style scoped>

</style>