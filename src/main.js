// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
    // ==============================
require(`./themes/app.${__THEME}.styl`)
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
    /* eslint-disable no-new */
    new Vue({
        el: '#q-app',
        router,
        render: h => h(require('./App'))
    })
})