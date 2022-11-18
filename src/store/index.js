import { defineStore, storeToRefs } from 'pinia'

export const textStore = defineStore("test1",{
  state: () =>{
    return {
      isCollapse: false
    }
  },
  actions:{
    changeBtn () {
      console.log(this.isCollapse)
      if(this.isCollapse == true){
        this.isCollapse = false
      }else if(this.isCollapse == false){
        this.isCollapse = true
      }
    }
  },
  getters:
  {
    
  }

})