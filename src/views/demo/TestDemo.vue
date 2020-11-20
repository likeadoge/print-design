<template>
    <demo-view>
        <div class="card"></div>


    </demo-view>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


.card{
    margin: 16px;
    background-color: $dark2;
    box-shadow: 4px 4px 0 0 $dark0;
    transform: translate(-2px,-2px);
    height: 120px;
    width: 240px;
    transition: all 0.3s ease-out;
    border: 0 solid $red-dark;
    cursor: pointer;
}

.card:hover{
    box-shadow: 0 0 0 2px $light2;
    transform: translate(0,0);
}


</style>