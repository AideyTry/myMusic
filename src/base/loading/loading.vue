<style lang="scss">
  .loading{
    width: 100%;
    text-align:center;
    .desc{
      line-height: 20px;
      color: blue;
    }
  }
</style>
<template>
  <div class="loading">
    <img src="./loading.gif" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
