<template>
  <div class="list-wrap">
    <List :data="list"></List>
  </div>
</template>

<script>
  import List from 'base/list/list'
  export default {
    components: {
      List
    },
    data() {
      return {
        list: []
      }
    },
    created() {
      this.$http({
        method: 'get',
        url: 'https://www.easy-mock.com/mock/5b29b801bc5c3e3bb363ddb9/api/singer/list'
      }).then(res => {
        this.list = res.data
        console.log(this.list)
      })
    }
  }
</script>

<style scoped>
  .list-wrap {
    position: fixed;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
