<template>

    <v-layout row class="container" height="400px">

    
      <v-row class="w-50" position="fixed" width="100">
        <directions class="pt-5"></directions>
        <!-- <kt-divider></kt-divider> -->
        <zoom-controls></zoom-controls>
        <kt-divider></kt-divider>
 
        <align-mode></align-mode>
         
          
        <kt-divider></kt-divider>
        <sliders ></sliders>
        <kt-divider></kt-divider>
        <auto-edit-controls></auto-edit-controls>
   
      </v-row>
    </v-layout>

    
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from 'vue'
import Directions  from "./Directions.vue"
import AlignMode  from "./AlignMode.vue"
import ZoomControls from "./ZoomControls.vue"
import KtDivider from "./KtDivider.vue"
import AutoEditControls from "./AutoEditControls.vue"
import ItemSelectors from "./ItemSelectors.vue"
import Sliders from "./Sliders.vue"


</script>

<style lang="scss" scoped>

</style>