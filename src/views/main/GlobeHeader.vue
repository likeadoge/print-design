<template>
    <header class="globe_header"><h1>纸感设计</h1></header>
    <div class="globe_header-placehoder"></div>
</template>



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