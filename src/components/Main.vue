<template>
<q-scroll-area style="width: 100%; height: 80%;">    <!-- <HeaderBar ></HeaderBar> -->
        <div>
        <img width="100%" src="statics/images/qq2cy.jpg" />
      </div>
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
  
      <div  class=" column inline items-center content-center  justify-center gutter">
       
        <div class=" ">
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
              <!-- <q-rating slot="subtitle" v-model="stars" disabled :max="5" /> -->
              <!-- <div slot="right" class="row items-center">
                <q-icon name="place" /> 重庆
              </div> -->
            </q-card-title>
            <q-card-main>
              <p>力の社团</p>
              <!-- <p class="text-faded">我是来至重庆的妹子,希望大家多多支持我</p> -->
            </q-card-main>
            <q-card-separator />
          </q-card>

        </div>
        <div class="" >
          <img class=" text-center" width="60%" src="statics/images/vs.png">
         
        </div>

        <div class="">
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
              <!-- <q-rating slot="subtitle" v-model="stars" disabled :max="5" /> -->
              <!-- <div slot="right" class="row items-center">
                <q-icon name="place" /> 成都
              </div> -->
            </q-card-title>
            <q-card-main>
              <p>hongの社团</p>
              <!-- <p class="text-faded">我是来至成都的妹子,希望大家多多支持我</p> -->
            </q-card-main>
            <q-card-separator />
          </q-card>

        </div>

      </div>
    </div>
    </div>
</q-scroll-area>
    </div>  
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
    Carousel3d,
    Slide
  },
}
</script>
