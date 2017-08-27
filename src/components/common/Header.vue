<template>
  <div ref="headerbar">
      <!-- <q-toolbar inverted color="red-3">
                
                <q-btn flat>
                  <q-icon name="face" /></q-btn>
                <q-toolbar-title>
                 <strong> Coser Stage</strong>
                </q-toolbar-title> -->

    <!-- Header -->
    <q-toolbar slot="header" color="purple-3" glossy>
      <q-toolbar-title>
        Cosplay Stage
        <span slot="subtitle">专业的Cosplay平台</span>
      </q-toolbar-title>
     
      <q-side-link v-if="!user" item to="/login">
        <q-item-main label="登陆" />
      </q-side-link>
      <q-side-link v-if="!user" item to="/login">
        <q-item-main label="注册" />
      </q-side-link>

<ul v-if="dropdown" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>

<avatar v-if="user" username="Darth Vader"
                src="statics/images/boy-avatar.png"
                :size="40" v-on:onclick="dropdown=true"></avatar>              
    </q-toolbar>

    <!-- Navigation -->
    <q-tabs slot="navigation" v-bind:class="fixedNav" id="navbar" v-if="showNavbar" inverted color="white">
      <q-tab slot="title" label="竞技堂" count="30" color="cyan-8" to="/login" exact />
      <q-tab alert slot="title" label="TV" to="/login" color="teal-8" exact />
      <q-tab alert slot="title" label="商城" to="/group" exact color="green-8" />
      <q-tab slot="title" label="社团" to="/group" exact color="light-green-8" />
      <q-tab slot="title" label="活动" to="/login" count="5" color="lime-8" />
    
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
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    background: #ce93d8 !important;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0) 50%, rgba(0,0,0,0.12) 51%, rgba(0,0,0,0.04)) !important;
}
.dropdown-content {
    background-color: #fff;
    margin: 0;
    display: none;
    min-width: 100px;
    max-height: 650px;
    overflow-y: auto;
    opacity: 0;
    position: absolute;
    z-index: 999;
    will-change: width, height;
}
</style>

