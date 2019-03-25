import Vue from 'vue'
import App from './app.vue'

import './asset/styles/test.css'
import './asset/images/bg.jpg'
import './asset/styles/test-stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)