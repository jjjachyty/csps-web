<template>
  <div >




          <q-tabs position="bottom" color="red-1" class="fixednav" align="justify">
         <q-route-tab
    icon="home"
    to="/"
    default
    label="首页"
    exact
    slot="title"    
    color="light-blue-5"
  />
           <q-route-tab
    icon="games"
    to="/games"
    label="活动"
    exact
    slot="title"    
    color="light-blue-5"
  />
          <q-tab slot="title" icon="add"  color="red-3"/>

           <q-route-tab
    icon="message"
    to="/"
    label="消息"
    exact
    slot="title"    
    color="deep-orange-6"
  />
           <q-route-tab
    icon="person"
    to="/user/profile"
    label="我的"
    exact
    slot="title"    
    color="light-blue-5"
  />

      </q-tabs>
    </div>
</template>
<script>
import Avatar from 'vue-avatar/dist/Avatar'
import { scroll } from 'quasar'
const {getScrollHeight} = scroll
export default {
    components: {
    Avatar
  },
  data () {
      return {
        showNavbar:true,
      fixedNav:"",
      starts:4,
      dropdown:false,
      user:"Janly",
      scrollTop:0
      }
  },
  computed:{

  },
  methods: {
      handleScroll(){
        this.scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop

     }
  },
mounted(){
    this.$nextTick(() => {
              window.addEventListener('scroll', this.handleScroll);

    })
},
watch:{
    'scrollTop':function(value){
      if (value > 50){
          this.fixedNav= "fixednav"
      }else{
           this.fixedNav= ''
      }
    }
}
}
</script>
<style>
.fixednav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    background: #ce93d8 !important;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0) 50%, rgba(0,0,0,0.12) 51%, rgba(0,0,0,0.04)) !important;
}
</style>

