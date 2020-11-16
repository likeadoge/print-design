<template>
    <div :class="{'catalogue':true, 'hidden':isHidden}">
        <div class="float-btn" @click="toggleHidden">
            <ali-icon type="menu" :size='28'></ali-icon>
        </div>
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
    <div class="mask"  @click="toggleHidden"></div>
</template>

<script>
import docs from '@/docs/_index'

export default {
    data:()=>({docs,isHidden:true}),
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
        },
        toggleHidden(){
            this.isHidden = !this.isHidden
        }
    }
}
</script>


<style lang="scss">

body{
    padding-left: $catalogue-width!important;
}

@media (max-width: $xl) {
    body{
        padding-left: 0!important;
    }
}

</style>

<style lang="scss" scoped>



.catalogue{
    width:  $catalogue-width;
    padding-left: 72px;
    top: 0;
    bottom: 0;
    left:0;
    background: $catalogue-bg;
    color: $catalogue-color;
    position: fixed;
    padding:24px 0;
    overflow: visible;
    transition: all 0.3s ease-out;
    z-index: 101;

    @media  (min-width: $xl) {
        &.hidden{
            left:  0!important;
        }

        +.mask{display: none;}

        
        >.float-btn{
            display: none;
        }
    }

    +.mask{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        backdrop-filter:blur(2px);
        transition: all 0.3s ease-out;
        background-color: rgba(255,255,255,0.2);
    }

    &.hidden{
        left:  0- $catalogue-width;

        +.mask{
            width: 0;
        }
        >.float-btn{
            opacity: 1;
        }
    }
   
    >.float-btn{
        height: 40px;
        width: $header-padding;
        position: absolute;
        right: 0- $header-padding;
        text-align: center;
        top: 0;
        margin: 8px 0;
        color: $dark0;
        opacity: 0;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    >.chapter-cntr{
        height: 100%;
        overflow: auto;
        padding-left: $header-padding;

        
        .chapter {
            overflow: hidden;
        }
        .chapter > div{
            overflow: hidden;
            position: relative;
        }

        .chapter_focus{
           .chapter-title{
                color:  $red-light;
           } 
        }

        .doc-link{
            cursor: pointer;
            transition: all 0.3s ease-out;

            &:not(.doc-link_focus):not(.doc-link_disabled):hover{
                color: $red-light;
                text-shadow:  4px 4px 0   rgba(168,73,122,0.2);
            }
            &.doc-link_focus{
                color: $red-light;
                font-weight: bold;
                
                &:hover{
                    color: $red-light;
                    text-shadow: none;
                }
            }
            
            &.doc-link_disabled{
                opacity: 0.3;
                text-decoration: line-through;
                &:hover{
                    color: inherit;
                    text-shadow: none;
                }
            }
        }
    }
}

</style>