import { defineStore } from 'pinia'
import { callCommand } from './kt-commands'

const directions = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [0, 0], 
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
]



export const OptionsStore = defineStore('options',{
  state: () => ({ 
    animatePosition: true,
    animateScale:false,
    animMode: true,
    audioItem: '',
    audioItemName: 'AudioReference',
    audioSelected: false,
    baseZoom: 0,
    compDuration: 0,
    compItem:'',
    compItemName: 'KT_ToolbarComp',
    compSelected: false,
    compSize: [1920, 1080],
    direction: [0, 0],
    duration: 120,
    maxRandomness:20,
    randomness: 10,
    resetAnimations: true,
    panStrength: 10,
    testI: 0,
    testParam: {a: 1, b:2},
    zoom: 0,
    zoomStrength: 20,
    waSelected: true,
    worareaTolerance: 50
  }),
  getters: {

  },
  actions: {
    set(key:keyof Object, value:any) {
      
      if(!this[key] ||  typeof this[key] !== typeof value) return;
      this[key] = value;
    },
    
    setDirection( dir: number | undefined){
      this.direction = dir === undefined ? [0, 0] : [-directions[dir][0], -directions[dir][1]]
    },

    execute() {
      if(this.animMode === false) {
        this.align()
      } else {
        this.animate()
      }
    },

    align(){
      let command = `KT.Commands.AutoEditor.align(comp, [${this.direction}])`
      let result = callCommand(command, "Pan layers")

    },

    animate(){
      let command = `KT.Commands.AutoEditor.autoPan(comp, [${this.direction}], ${this.panStrength});`
      let result = callCommand(command)

    },
    zoom(direction: number) {
      let mult = direction > 0 ? -1 : 1;
      let command = `KT.Commands.AutoEditor.autoZoom(comp, ${this.zoomStrength*mult}, ${this.resetAnimations});`
      let result = callCommand(command);
      

    },
    selectAudio() {
      let command = this.audioSelected === false 
        ?`KT.Store.storeItem('audio', '${this.audioItemName}');`
        :`KT.Store.delete('${this.audioItemName}')`;

      callCommand(command).then(res => this.audioSelected = JSON.parse(res))


    },
    selectComp() {
      let command = this.compSelected === false
        ?`KT.Store.storeItem('comp', '${this.compItemName}');`
        :`KT.Store.delete('${this.compItemName}')`

      callCommand(command).then(res => this.compSelected = JSON.parse(res) );

    },

    autoEdit() {
      alert(this.animateScale)
      let args = {
        strength:this.panStrength ,
        zoomStrength: this.zoomStrength,
        randomness: this.randomness,
        animatePosition: this.animatePosition,
        animateScale: this.animateScale,
        audioItemName: this.audioItemName,
        compItemName: this.compItemName,
        duration: this.duration,
        insideWorkArea: this.waSelected,
        workareaTolerance: this.worareaTolerance
      }

      let command = `KT.Commands.AutoEditor(${JSON.stringify(args)});`
      callCommand(command).then((res) => {
        let parsed = JSON.parse(res)
        this.compSelected = parsed.comp
        this.audioSelected = parsed.audio
        }
      );
    },

    moveLayersToWorkarea(start?:Boolean) {
      let command = `KT.Layers.getSelected().toWorkArea(${start})` ;
      callCommand(command) 
    },

    flipLayers() {

    },
    moveLayersToCurrentTime() {
      let command = `KT.Layers.getSelected().moveToCurrentTime()`;
      callCommand(command)
    },

    fitToComp() {
      let command = `KT.Layers.getSelected().fitToComp()`
    }
  },
})

