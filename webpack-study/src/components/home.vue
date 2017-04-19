<template>
  <div class="home">
    <h3>你好</h3>
    <v-head></v-head>
    <v-foot></v-foot>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHead from './header.vue'
  import vFoot from './footer.vue'
  export default {
    name: "home",
    data () {
      return {
      }
    },
    components: {
      vHead,
      vFoot
    }
  }
</script>

<style lang="less" scoped>
  .home{
    background-color: #333;
    color: #fff;
  }
</style>
