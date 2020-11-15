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
    max-width: $content-width;
    padding: 80px $content-padding-hor;
    margin: 0 auto;
    overflow: auto;
}
</style>