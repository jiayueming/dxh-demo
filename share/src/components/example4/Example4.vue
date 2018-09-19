<template>
  <Scroll :data="list" class="wrapper" :pullup="pullup" :scrollbar="scrollbar" @scrollToEnd="searchMore">
    <ul class="content clearfix" ref="content">
      <li v-for="(item, index) in list" @click="testClick(index,$event)">
        <img width="100" height="80" v-lazy="item.img"/>
        <span>{{item.text}}</span>
      </li>
      <Loading v-show="hasMore" title=""></Loading>
    </ul>
  </Scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'

  export default {
    components: {
      Scroll,
      Loading
    },
    data() {
      return {
        list: [],
        pullup: true,
        hasMore: true,
        scrollbar: true
      }
    },
    created() {
      let _ = this
      this.$http({
        method: 'get',
        url: hostUrl + "/test/list"
      }).then(function (response) {
        _.list = response.data.list

        console.log(_.list)
      })
    },
    methods: {
      testClick(index, event) {
//			if (!event._constructed) {
//              return;
//          }
        console.log(index)
      },
      /**
       * 下拉加载
       */
      searchMore() {
        let _ = this
        this.$http({
          method: 'get',
          url: hostUrl + "/test/list"
        }).then(function (response) {
          _.list = _.list.concat(response.data.list)

          console.log(_.list)
        })
      }
    }
  }
</script>

<style scoped="scoped">
  .wrapper {
    position: fixed;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
  }
</style>
