import { defineAsyncComponent } from 'vue'

export class Demo{
    name = ''
    #component=null

    constructor(name,component){
        this.name = 'Demo'+ name 
        this.#component = defineAsyncComponent(component)
    }

    install(app){
        app.component(this.name,this.#component)
        console.log(app)
        console.log(this.name)
        console.log(this.#component)

        console.log(`${this.name} has been install!`)
    }

}

export class DemoGroup{
    #demoList = []
    constructor(list){
        this.#demoList = list
    }

    install(app){
        this.#demoList.forEach(v=>v.install(app))
    }
}