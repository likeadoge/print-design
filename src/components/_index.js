
import ArticleContent from './ArticleContent.vue'
import AliIcon from './AliIcon.vue'

import FlexCol from "./flex/FlexCol.vue";
import FlexRow from "./flex/FlexRow.vue";
import FlexFill from "./flex/FlexFill.vue";
import FlexFixed from "./flex/FlexFixed.vue";

import DemoView from "./demo/DemoView.vue";

export const install = (app)=>{
    [
        [ArticleContent,'ArticleContent'],
        [AliIcon,'AliIcon'],
        [FlexCol,'FlexCol'], 
        [FlexRow,'FlexRow'],
        [FlexFill,'FlexFill'],
        [FlexFixed,'FlexFixed'],
        [DemoView,'DemoView']
    ].forEach((([comp,name ])=> app.component(name,comp)))
    return app
}