import Vue from 'vue'
import Router from 'vue-router'
import CodeMirror from '@/components/public/CodeMirror'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CodeMirror',
            component: CodeMirror
        }
    ]
})
