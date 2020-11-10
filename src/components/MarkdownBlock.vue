<template>
    <div v-html="html"></div>    
</template>

<script>
import * as commonmark from 'commonmark'
const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();
const convert = (md)=>writer.render(reader.parse(md))


export default {
    props:{md:{default:''}},
    computed:{
        html(){
            return convert(this.md)
        }
    }
}
</script>

