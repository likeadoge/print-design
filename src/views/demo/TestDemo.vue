<template>
    <demo-view>
        <div class="card"></div>
        <p-input />

    </demo-view>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


.card{
    margin: 16px;
    background-color: $dark0;
    box-shadow: 4px 4px 0 0 $dark2;
    transform: translate(-2px,-2px);
    height: 120px;
    width: 240px;
    transition: all 0.3s ease-out;
    cursor: pointer;
}

.card:hover{
    box-shadow: 0 0 0 2px $light2;
    transform: translate(0,0);
}


</style>