<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100" class="scroll ">
    <HeaderBar ></HeaderBar>
    <router-view></router-view>
    <FooterBar></FooterBar>
                     

  </q-layout>
</template>

<script>




import HeaderBar from 'components/common/Header'
import FooterBar from 'components/common/Footer'
export default {
  components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      stars: 4,
      scrollTop:0
    }
  },
  computed: {
   
  },
  methods: {

  },
  mounted() {
    this.$nextTick(() => {

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
