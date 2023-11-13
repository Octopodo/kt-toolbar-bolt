<template>
  <div >
    <v-row class="mt-3 ml-1">
      <v-col>
        <v-row>

          <v-btn 
            @click.prevent="store.moveLayersToCurrentTime()" 
            size="x-small" value="0" 
            icon="mdi-format-list-group" 
            class="pa-1 x-small" 
            flex="1" 
            color="light-blue-lighten-4"
            
            variant="outlined"
          />

          <v-btn 
            @click.prevent="moveToWorkArea(true)" 
            size="x-small" value="0" 
            icon="mdi-format-horizontal-align-left" 
            class="pa-1 x-small" 
            flex="1" 
            color="light-blue-lighten-2"
            variant="outlined"
          />
          <v-btn 
            @click.prevent="moveToWorkArea()" 
            size="x-small" value="0" 
            icon="mdi-format-horizontal-align-center" 
            class="pa-1 x-small" 
            flex="1" 
            color="light-blue-lighten-2"
            variant="outlined"
          />


          <v-btn 
            @click.prevent="moveToWorkArea(false)" 
            size="x-small" 
            value="0" 
            icon="mdi-format-horizontal-align-right" 
            class="pa-1 x-small" 
            flex="1" 
            color="light-blue-lighten-2"
            variant="outlined"
          />

          <v-col>
            
          </v-col>
          <v-btn 
            
            @click.prevent="" 
            draggable="true"
            size="x-small" value="0" 
            icon="mdi-swap-vertical" 
            class="pa-1 x-small" 
            flex="1" 
            color="blue"
            variant="tonal"
          />
          <v-btn 
            @click.prevent="" 
            size="x-small" value="0" 
            icon="mdi-swap-horizontal" 
            class="pa-1 x-small" 
            flex="1" 
            color="blue"
            variant="tonal"
          />

      </v-row>
      <v-row class="pt-1">
        <v-col></v-col>
        <v-btn
          @click.prevent="store.fitToComp()" 
          size="x-small" value="0" 
          icon="mdi-resize" 
          class="pa-1 x-small" 
          flex="1" 
          color="blue"
          variant="tonal">
          
        </v-btn>
        <v-btn
          @click.prevent="store.removeKeys()" 
          size="x-small" value="0" 
          icon="mdi-cards-diamond" 
          class="pa-1 x-small" 
          flex="1" 
          color="blue"
          variant="tonal">
          
        </v-btn>
      </v-row>
      <v-row>
        <v-slider
          class="pt-2"
          thumb-size="12"
          thumb-label
          prepend-icon="mdi-arrow-expand-horizontal"
          color="blue"
        >
          
        </v-slider>
      </v-row>
      
      </v-col>
     
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { OptionsStore } from '../Stores/OptionsStore'

const store = OptionsStore();

function moveToWorkArea(start?:Boolean) {
  store.moveLayersToWorkarea(start)
}
</script>

<style scoped>

</style>