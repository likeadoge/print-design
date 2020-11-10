<template>
    <div v-for="(v,i) in content" :key="i">
        <markdown-block 
            :md="v"
            v-if="isMd(v)" 
        />
    </div>
</template>


<script>

import MarkdownBlock from './MarkdownBlock'
export default {
    components:{MarkdownBlock},
    props:{
        content:{default:[]}
    },
    methods:{
        isMd(s){return typeof s === 'string'}
    }

}
</script>

<style scoped>

</style>