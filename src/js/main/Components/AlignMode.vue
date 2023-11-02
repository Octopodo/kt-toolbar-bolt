<template>
  <div >
    <v-row >

    
    <v-col class="mt-6 mx-2">
      <v-switch
        v-model="animMode"
        :label="data.titles[data.title]"
        color="green"
        hide-details="auto"
        density="compact"
      
      >
      </v-switch>
      
      <v-switch 
        label="Animate Position"
        density="compact"
        hide-details="auto"
        v-model="animatePosition"
        color="green"
        
      ></v-switch>
      <v-switch 
        label="Animate Scale"
        density="compact"
        hide-details="auto"
        v-model="animateScale"
        color="green"

      >
      <a title="Default tooltip">Test Tooltip</a>
      </v-switch>
      

    </v-col>
  </v-row>
    
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore();

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

const data = reactive({
  titles: ['Align', 'Animate'],
  title: animMode.value ? 0 : 1
})



</script>

<style scoped>

</style>