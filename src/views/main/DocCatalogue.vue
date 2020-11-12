<template>
    <div class="catalogue">
        <div class="chapter-cntr">
            <div :class="{'chapter':true,'chapter_focus':title === v.title}" v-for="v in docs" :key="v.title">
                <h3 class="chapter-title">{{v.title}}</h3>
                <div  v-for="d in v.list" :key="d.title">
                    <a 
                        :class="{
                            'doc-link':true,
                            'doc-link_disabled':!d.content,
                            'doc-link_focus':doc&&(doc.title === d.title)
                        }" 
                        @click="update(v.title,d)"
                    >{{d.title}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import docs from '@/docs/_index'

export default {
    data:()=>({docs}),
    props:['doc','title'],
    mounted(){
        if(!this.doc) {
            this.update(
                this.docs[0].title,this.docs[0].list[0]
            )
        }
    },
    methods:{
        update(title,doc){
            if(!doc.content) return 
            this.$emit('update:doc',doc),
            this.$emit('update:title',title)
        }
    }
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
    padding:24px 0;


    >.chapter-cntr{
        height: 100%;
        overflow: auto;
        border-right: 1px solid #999;
        padding-left: $header-padding;


        .chapter_focus{
           .chapter-title{
                color: #A8497A;
           } 
        }

        .doc-link{
            cursor: pointer;
            transition: all 0.3s ease-out;

            &:not(.doc-link_focus):not(.doc-link_disabled):hover{
                color: #A8497A;
                text-shadow:  4px 4px 0   rgba(168,73,122,0.2);
            }
            &.doc-link_focus{
                color: #A8497A;
                font-weight: bold;
                
                &:hover{
                    color: #A8497A;
                    text-shadow: none;
                }
            }
            
            &.doc-link_disabled{
                opacity: 0.5;
                &:hover{
                    color: inherit;
                    text-shadow: none;
                }
            }
        }
    }
}

</style>