<template>
    <header 
        ref="header"
        :class="{
        'globe_header':true,
        'globe_header_fixed': isFixed
    }"><div class="globe_header-content">
        <h1 :class="{h1_small:h1Small}"><span v-show="h1Small" class="chapter-title">{{title}} - </span> {{doc?doc.title:''}}</h1>
    </div></header>
    <div ref="pl" class="globe_header-placehoder"></div>
</template>
<script>
export default {
    props:['title','doc'],
    data:()=>({
        top:0,  
        height:0.  
    }),
    mounted(){
        this.height = this.$refs.pl.getBoundingClientRect().height
        document.body.onscroll = ()=>{
            this.top = this.$refs.pl.getBoundingClientRect().top
        }
    },

    computed:{
        isFixed(){return this.top < (72-this.height) },
        h1Small(){return this.top < -152}
    }

}
</script>


<style lang="scss" scoped>

    $header-expanded-height : 256px;
    $header-fixed-height : 72px;
    $content-width:760px;


    .globe_header{
        
        height: $header-expanded-height;
        position: absolute;
        top: 0; left: $catalogue-width;right:0;
        padding:0 $header-padding;
        background: $bg-color;

        &.globe_header_fixed{
            position: fixed;
            top: 0;
            height:$header-fixed-height;


            > div.globe_header-content {
                padding-top: 0;
                height: $header-fixed-height;
            }
           
        }
    
        > div.globe_header-content {
            height: $header-expanded-height;
            padding-top: 152px;
            line-height: $header-fixed-height;
            border-bottom: 1px solid #999;

            >h1{
                width: $content-width;
                margin: 0 auto;
                transform: scale(2);
                transform-origin: left;
                &.h1_small{

                    line-height: $header-fixed-height;
                    transform: scale(1)!important;
                }
            }
        
        }    



        +.globe_header-placehoder{
          height: $header-expanded-height;
          line-height: $header-expanded-height;
        }
    }
</style>