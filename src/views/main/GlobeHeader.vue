<template>
    <header class="globe_header"><h1>{{title}} - {{doc?doc.title:''}}</h1></header>
    <div class="globe_header-placehoder"></div>
</template>
<script>
export default {
    props:['title','doc']
}
</script>


<style lang="scss" scoped>
    .globe_header{
        height: $header-height;
        line-height: $header-height;
        position: fixed;
        top: 0; left: $catalogue-width;right:0;
        padding:0 $header-padding;
        background: $bg-color;
    
        h1 {
            height: $header-height;
            line-height: $header-height;
            border-bottom: 1px solid #999;
        }    

        +.globe_header-placehoder{
          height: $header-height;
          line-height: $header-height;
        }
    }
</style>