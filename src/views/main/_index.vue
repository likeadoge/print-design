<template>
    <globe-header v-model:doc="doc" v-model:title="title"/>
    <article-page v-model:doc="doc" v-model:title="title"/>
    <doc-catalogue v-model:doc="doc" v-model:title="title"/>
</template>

<script>
import GlobeHeader from './GlobeHeader.vue'
import ArticlePage from './ArticlePage.vue'
import DocCatalogue from './DocCatalogue.vue'

export default {
    data:()=>({doc:null,title:''}),
    components:{GlobeHeader,ArticlePage,DocCatalogue},
}
</script>


