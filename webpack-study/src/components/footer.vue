<template>
  <div class="footer">
    {{footer}}
  </div>
</template>

<script>
  export default {
    name: "footer",
    data () {
      return {
        footer: '这个是4页脚'
      }
    }
  }
</script>

<style lang="less" scoped>
  .footer{
    color: #428bca;
    font-size: 30px;
  }
</style>
