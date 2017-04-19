<template>
  <div class="header">
    {{header}}
  </div>
</template>

<script>
  export default {
    name: "header",
    data () {
      return {
        header: '这个是页2头'
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    color: #f30026;
    font-size: 30px;
  }
</style>
