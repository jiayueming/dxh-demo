<template>
  <div>
    <div class="slider-wrapper">
      <v-slider>
        <div v-for="item in url">
          <a>
            <img  :src="item">
          </a>
        </div>
      </v-slider>
    </div>
    <div>
      <j-button type="default">默认按钮</j-button>
      <j-button type="primary">主要按钮</j-button>
      <j-button type="success">成功按钮</j-button>
      <j-button type="warning">警告按钮</j-button>
      <j-button type="danger">危险按钮</j-button>
      <j-button type="info">信息按钮</j-button>
    </div>
    <!--<loading></loading>-->
    <blog-post>
      <h1 slot="header">
        About Me
      </h1>

      <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>

      <p slot="footer">
        Copyright 2016 Evan You
      </p>

      <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
    </blog-post>
  </div>
</template>

<script type="text/ecmascript-6">
    import Slider from 'base/slider/slider'
    import Loading from 'base/loading/loading'

    var merge = function(target) {
      console.log(target)
      for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i];
        for (var prop in source) {
          if (source.hasOwnProperty(prop)) {
            var value = source[prop];
            if (value !== undefined) {
              target[prop] = value;
            }
          }
        }
      }
      return target;
    };

    export default {
      components:{
        'v-slider': Slider,
        Loading
      },
      data() {
        return {
          url: [
            'http://y.gtimg.cn/music/photo_new/T003R720x288M000001ncEYH2aCBsW.jpg',
            'http://y.gtimg.cn/music/photo_new/T003R720x288M0000032pnR70E0WOR.jpg',
            'http://y.gtimg.cn/music/photo_new/T003R720x288M000001qts4A04iqQf.jpg',
            'http://y.gtimg.cn/music/photo_new/T003R720x288M000003KrRKE3oyCGn.jpg',
            'http://y.gtimg.cn/music/photo_new/T003R720x288M0000045GTLt1yGqJH.jpg'
          ]
        }
      },
      mounted() {
        let obj1 = {
          a: 1,
          b: 2
        }
        let obj2 = {
          b: 3,
          d: 4
        }
        console.log(merge(obj1, obj2))
      }
    }
</script>

<style scoped>
  .slider-wrapper {
    position: relative;
    width:100%;
    overflow: hidden;
  }
</style>
