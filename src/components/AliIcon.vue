<template>
    <i :style="style">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${type}`"></use>
        </svg>   
    </i>
</template>

<script>
export default {
    props:['size','color','type'],
    computed:{
        style(){
            const size = this.size?{fontSize:`${this.size}px`} :{}
            const color = this.color?{color:this.color} :{}
            return Object.assign({},size,color)
        }
    }
}
</script>

<style>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>