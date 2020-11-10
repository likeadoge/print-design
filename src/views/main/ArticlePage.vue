<template>
    <div class="article">
        <article-content :content='content' />
    </div>
</template>

<script>
import content from '@/docs/test'

export default {
    data(){
        return {content}
    }
}
</script>


<style lang="scss" scoped>
.article{
    width: 840px;padding: 0 40px;margin: 0 auto;
}
</style>