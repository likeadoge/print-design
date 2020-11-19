<template>
    <div v-for="(v,i) in content" :key="i">
        <markdown-block 
            :md="v"
            v-if="isMd(v)" 
        />

        <component  
            v-if="isDemo(v)" 
            :is="v.name"  
      ></component>
    </div>
    
</template>


<script>

import MarkdownBlock from './MarkdownBlock'
import {Demo} from '@/models/Demo'
export default {
    components:{MarkdownBlock},
    props:{
        content:{default:[]}
    },
    methods:{
        isMd(s){
            return typeof s === 'string'
        },
        isDemo(s){
            console.log(s)

            if( s instanceof Demo){
                console.log(s.name)
            }
            
            return s instanceof Demo
        }
    },
    mounted(){
        console.log(this.content)
    }

}
</script>

<style scoped>

</style>