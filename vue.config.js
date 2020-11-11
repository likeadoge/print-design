module.exports = {
    css:{
        loaderOptions:{
            sass:{
                additionalData:`@import "~@/style/variables.scss"`
            },
            scss:{
                additionalData:`@import "~@/style/variables.scss";`
            }
        }
    }
}