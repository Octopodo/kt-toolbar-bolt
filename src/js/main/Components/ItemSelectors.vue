<template>
  <v-row>
    <v-col cols="5" class="ml-2">
      <v-row>
        <v-label class="text-body-2">
          Audio
        </v-label>
        <v-btn
          icon
          class="transparent"
          @click.prevent="getAudio"
          flat
          size="x-small"
        >
          <v-icon :color="audioStyle.color" size="x-large">
            {{audioStyle.icon}}
          </v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-label class="text-body-2">
          Comp
        </v-label>
        <v-btn
          icon
          class="transparent"
          @click.prevent="getComp"
          flat
          size="x-small"
        >
          <v-icon :color="compStyle.color" size="x-large">
            {{compStyle.icon}}
          </v-icon>
        </v-btn>
      </v-row>
      
    </v-col>
    <v-col>
      <v-row>

        <v-label class="text-body-2" color="light-blue-darken-1" >
          W. Area
        </v-label>
        <v-btn
          icon
          class="transparent"
          @click.prevent="selectWa"
          flat
          size="x-small"
          
        >
          <v-icon :color="waStyle.color" size="x-large">
            {{waStyle.icon}}
          </v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>

</template>

<script setup lang="ts">
import { reactive, ref, watch, computed} from 'vue'
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore();

const data = reactive({
  audioColor:'red',
  audioIcon:'mdi-circle-outline',
  compColor: 'red',
  compIcon:'mdi-circle-outline',
  waColor: 'red',
  waIcon:'mdi-circle-outline',
  activeColor: 'light-blue-darken-1',
  unactiveColor: 'grey'
})

const audioSelected = computed({
  get:() => store.audioSelected,
  set:(newValue) => {
    store.audioSelected = newValue
  }
})

const compSelected = computed({
  get:() => store.compSelected,
  set:(newValue) => {
    store.compSelected = newValue
  }
})

const waSelected = computed({
  get:() => store.waSelected,
  set:(newValue) => {
    store.waSelected = newValue
  }
})

const audioStyle = computed(()=>({ 
  color: audioSelected.value ? data.activeColor : data.unactiveColor,
  icon: audioSelected.value ? 'mdi-circle-slice-8' : 'mdi-circle-outline'
}))

const compStyle = computed(()=>({ 
  color: compSelected.value ? data.activeColor : data.unactiveColor,
  icon: compSelected.value ? 'mdi-circle-slice-8' : 'mdi-circle-outline'
}))

const waStyle = computed(()=>({ 
  color: waSelected.value ? data.activeColor : data.unactiveColor,
  icon: waSelected.value ? 'mdi-circle-slice-8' : 'mdi-circle-outline'
}))



function getAudio() {
  store.selectAudio();
  console.log(data.audioIcon)
}

function getComp() {
  store.selectComp();
  console.log(data.audioIcon)
}

function selectWa() {
  store.waSelected = !store.waSelected
}

</script>

<style lang="sass" scoped>
.transparent
  background-color: transparent!important
  border-color: transparent!important

.glow
  box-shadow: 120px 80px 40px 20px #0ff
</style>