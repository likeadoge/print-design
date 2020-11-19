import {Demo,DemoGroup} from '@/models/Demo'

export const TestDemo = new Demo('TestDemo',
    ()=>import('./TestDemo')
)

export const group = new DemoGroup([TestDemo])