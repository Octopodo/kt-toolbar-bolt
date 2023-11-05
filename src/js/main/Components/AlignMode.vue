<template>
  <div >
    <v-row >

    
    <v-col class="mt-6 mx-3 mr-6">
      <v-row>
        <v-btn
          v-model="animMode"
          hide-details="auto"
          density="compact"
          :icon="getIcon(store.animMode)"
          @click.prevent="store.animMode = !store.animMode"
          variant="plain"
          :color="getColor(store.animMode)"
        >
        </v-btn>
        <v-label class="text-body-2" :color="getColor(store.animMode)">
          Align
        </v-label>
      </v-row>
      
      <v-row>
        <v-btn
          v-model="animatePosition"
          hide-details="auto"
          density="compact"
          :icon="getIcon(store.animatePosition)"
          @click.prevent="store.animatePosition = !store.animatePosition"
          variant="plain"
          :color="getColor(store.animatePosition)"
        >
        </v-btn>
        <v-label class="text-body-2">
          Position
        </v-label>
      </v-row>
      <v-row>
        <v-btn
          v-model="animateScale"
          hide-details="auto"
          density="compact"
          :icon="getIcon(store.animateScale)"
          @click.prevent="store.animateScale = !store.animateScale"
          variant="plain"
          :color="getColor(store.animateScale)"
        >
        </v-btn>
        <v-label class="text-body-2">
          Scale
        </v-label>
      </v-row>
      

    </v-col>
  </v-row>
    
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore();


//COMPUTED
const animatePosition = computed({
  get:()=> store.animatePosition,
  set: (value: boolean) => { store.animatePosition = value}
});


const animateScale = computed({
  get:()=> store.animateScale,
  set: (value: boolean) => { store.animateScale = value}
})


const animMode = computed({
  get:()=> store.animMode,
  set:(value:boolean) => {
    data.title = value === true ? 1 : 0 
    store.animMode =  value

  }
})


//DATA
const data = reactive({
  titles: ['Align', 'Animate'],
  title: animMode.value ? 0 : 1,
  iconVariant: '',
  activeColor: 'cyan-lighten-1',
  disabledColor: 'grey'
})


function getIcon(value:Boolean) {
  return value ? "mdi-toggle-switch" + data.iconVariant : "mdi-toggle-switch-off" + data.iconVariant 
}

function getColor(value:Boolean) {
  return value ?  data.activeColor : data.disabledColor
}



</script>

<style scoped>

</style>