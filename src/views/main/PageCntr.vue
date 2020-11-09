<template>
    <div>page</div>
    <markdown-body :md='md'></markdown-body>
</template>

<script>
import md from '@/docs/test'

export default {
    data(){
        return {
            md:md[0]
        }
    }
}
</script>