<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
    <HeaderBar :scrollTop="scrollTop"></HeaderBar>
    <!-- <q-toolbar inverted color="red-3">
                
                <q-btn flat>
                  <q-icon name="face" /></q-btn>
                <q-toolbar-title>
                 <strong> Coser Stage</strong>
                </q-toolbar-title> -->

    <!-- Header -->
    <!-- <q-toolbar slot="header" color="purple-3">

      <q-toolbar-title>
        Cosplay Stage
        <span slot="subtitle">专业的Cosplay平台</span>
      </q-toolbar-title>

      <q-side-link item to="/login">
        <q-item-main label="登陆" />
      </q-side-link>/
      <q-side-link item to="/login">
        <q-item-main label="注册" />
      </q-side-link>
    </q-toolbar> -->

    <!-- Navigation -->
    <!-- <q-tabs slot="navigation" id="navbar" inverted color="white">
      <q-tab slot="title" label="竞技堂" count="30" color="cyan-8" to="/login" exact />
      <q-tab alert slot="title" label="TV" to="/login" color="teal-8" exact />
      <q-tab alert slot="title" label="商城" to="/group" exact color="green-8" />
      <q-tab slot="title" label="社团" to="/group" exact color="light-green-8" />
      <q-tab slot="title" label="活动" to="/login" count="5" color="lime-8" />
    </q-tabs> -->

    <!--
                      Replace following "div" with
                      "<router-view class="layout-view">" component
                      if using subRoutes
                    -->
                      <div class="container">
    <div class="layout-view">
      <div class=" gutter wrap justify-center content-center text-center">

        <carousel-3d :autlplay=true :display="7">
          <slide :index="0">
            <img src="statics/images/index-1.jpg" />
          </slide>
          <slide :index="1">
            <img src="statics/images/index-2.jpg" />
          </slide>
          <slide :index="2">
            <img src="statics/images/index-3.jpg" />
          </slide>
          <slide :index="3">
            <img src="statics/images/index-4.jpg" />
          </slide>
          <slide :index="4">
            <img src="statics/images/index-5.jpeg" />
          </slide>
          <slide :index="5">
            <img src="statics/images/index-6.jpeg" />
          </slide>
          <slide :index="6">
            <img src="statics/images/index-7.jpg" />
          </slide>
          <slide :index="7">
            <img src="statics/images/index-8.jpg" />
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div>
     <div>
      <img class="pk" src="statics/images/pk.png">
      <!-- <span class="text-bold">竞技台</span> -->
    </div>
  
      <div class="row  items-center content-center  justify-center gutter">
       
        <div class="col-5 ">
          <q-card  width="100%">
            <q-card-media overlay-position="top">
              <img  src="statics/images/index-5.jpeg" />
              <q-card-title slot="overlay">
                <div slot="subtitle" class="text-right">
                  <q-btn flat round small color="red">
                    <q-icon name="favorite" /></q-btn>
                </div>
              </q-card-title>
            </q-card-media>

            <q-card-title>
              Cafe Basilico
              <q-rating slot="subtitle" v-model="stars" disabled :max="5" />
              <div slot="right" class="row items-center">
                <q-icon name="place" /> 重庆
              </div>
            </q-card-title>
            <q-card-main>
              <p>力の社团</p>
              <p class="text-faded">我是来至重庆的妹子,希望大家多多支持我</p>
            </q-card-main>
            <q-card-separator />
          </q-card>

        </div>
        <div class="col-2" >
          <img class=" text-center" width="60%" src="statics/images/vs.png">
         
        </div>

        <div class="col-5">
          <q-card  width="100%">
            <q-card-media overlay-position="top">
              <img  src="statics/images/index-3.jpg" />
              <q-card-title slot="overlay" inverted>
                <div slot="subtitle" class="text-right">
                  <q-btn flat round small color="red">
                    <q-icon name="favorite" /></q-btn>
                </div>
              </q-card-title>
            </q-card-media>

            <q-card-title>
               BasilicoCafe
              <q-rating slot="subtitle" v-model="stars" disabled :max="5" />
              <div slot="right" class="row items-center">
                <q-icon name="place" /> 成都
              </div>
            </q-card-title>
            <q-card-main>
              <p>hongの社团</p>
              <p class="text-faded">我是来至成都的妹子,希望大家多多支持我</p>
            </q-card-main>
            <q-card-separator />
          </q-card>

        </div>

      </div>
    </div>
    </div>

    </div>
    <!-- Footer -->
    <q-toolbar slot="footer" inverted class="text-center">
      <q-toolbar-title>
        Cosplay Stage @2017
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>




import { Carousel3d, Slide } from 'vue-carousel-3d';
import HeaderBar from 'components/common/Header'
export default {
  components: {
    Carousel3d,
    Slide,
    HeaderBar
  },
  data() {
    return {
      stars: 4,
      scrollTop:0
    }
  },
  computed: {
    'position':()=> {
       
          console.log(this.$refs.layout.scrollTop)
          return this.$refs.layout.scrollTop
    }
  },
  methods: {
      handleScroll(){
        this.scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
      }
  },
  mounted() {
    this.$nextTick(() => {
              window.addEventListener('scroll', this.handleScroll);

    })
  },
  beforeDestroy() {

  }, created() {

  }
}
</script>

<style>
.pk {
  height: 70px;
  width: 70px;
}

.vs-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}

.scrolledDown {
  background: rgba(0, 0, 0, 0);
  color: #ddd;
}
.container{
  padding-left: 5%;
  padding-right: 5%;
}
</style>
