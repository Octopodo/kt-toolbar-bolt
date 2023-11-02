<template>

    <v-col cols="2" class="mt-5">
      <!-- <div class="text-caption">Pan</div> -->
      <v-slider 
        thumb-size="12"
        thumb-label
        class=" pb-0" 
        v-model="panStrength"
        :color="panColor"
        hide-details="auto"
        prepend-icon="mdi-pan"
        
      >
      </v-slider>

      <!-- <div class="text-caption">Zoom</div> -->
      <v-slider 
        thumb-size="12"
        thumb-label
        class=" pb-0"
        v-model="zoomStrength"
        :color="zoomColor"
        hide-details="auto"
        prepend-icon="mdi-magnify-plus"
      
      >
      </v-slider>

    
      <!-- <div class="text-caption">Randomness</div> -->
      <v-slider 
        thumb-size="12"
        thumb-label
        class=""
        v-model="randomnessValue"
        :max="maxRandomness"
        hide-details="auto"
        prepend-icon="mdi-dice-multiple-outline"
      >
      </v-slider>
    </v-col>
    </template>

<script setup lang="ts">
import { reactive ,computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'


const store = OptionsStore();
const panStrength = computed({
  get: () => store.panStrength,
  set: (value: number) => {
    store.panStrength = value;
  },
});

const zoomStrength = computed({
  get: () => store.zoomStrength,
  set: (value: number) => {
    store.zoomStrength = value;
  },
});


const randomnessValue = computed({
  get: () => store.randomness,
  set: (value: number) => {
    store.randomness= value;
  },
});

const maxRandomness = computed(() => store.maxRandomness)

function color(comp:any) {
  if (comp.value < 25) return 'indigo'
  if (comp.value < 50) return 'green'
  if (comp.value < 75) return  'yellow'
  if (comp.value < 100) return 'orange'
  return 'red'
}

const panColor = computed(() => color(panStrength))
const zoomColor = computed(() => color(zoomStrength))



</script>

<style scoped>

</style>