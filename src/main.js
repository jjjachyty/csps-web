// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
    // ==============================
require(`./themes/app.${__THEME}.styl`)
import Vue from 'vue'
import Quasar, * as All from 'quasar'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import languages from './i18n'
import Carousel3d from 'vue-carousel-3d';
import VueI18n from 'vue-i18n'

Vue.use(Vuelidate)

Vue.use(VueI18n)

Vue.use(Carousel3d)
Vue.use(Vuelidate)
Vue.use(Quasar, {
        components: All,
        directives: All
    }) // Install Quasar Framework



const i18n = new VueI18n({ 
    locale: 'zh',
    messages: languages
})

Quasar.start(() => {
    /* eslint-disable no-new */
    new Vue({
        el: '#q-app',
        router,
        store,
        i18n,
        render: h => h(require('./App'))
    })
})
window.router = router
window.vue = Vue