<template>
    <div class="article">
        <article-content v-if="doc && doc.content" :content='doc.content' />
    </div>
</template>

<script>
export default {
    props:['doc']
}
</script>


<style lang="scss" scoped>
.article{
    width: 840px;padding: 80px 40px;margin: 0 auto;
    overflow: auto;
}
</style>