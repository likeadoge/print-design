<template>
    <div class="catalogue">
        <div class="chapter-cntr">
            <div class="chapter" v-for="v in docs" :key="v.title">
                <h3 class="chapter-title">{{v.title}}</h3>
                <div class="doc-link" v-for="d in v.list" :key="d.title">{{d.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import docs from '@/docs/_index'

export default {
    data:()=>({docs})
}
</script>


<style lang="scss">

body{
    padding-left: $catalogue-width!important;
}

</style>

<style lang="scss" scoped>

.catalogue{
    width:  $catalogue-width;
    padding-left: 72px;
    top: 0;
    bottom: 0;
    left:0;
    background: $bg-color;
    position: fixed;
    padding:32px 0;
    >.chapter-cntr{
        height: 100%;
        overflow: auto;
        border-right: 1px solid #999;
        padding-left: $header-padding;

        .doc-link{
            cursor: pointer;
            transition: all 0.3s ease-out;

            &:hover{
                color: #A8497A;
                text-shadow:  4px 4px 0   rgba(168,73,122,0.2);
            }
        }
    }
}

</style>