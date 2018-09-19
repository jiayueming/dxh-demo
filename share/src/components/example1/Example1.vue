<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content clearfix" ref="content">
        <li v-for="(item, index) in arrText" @click="testClick(index)">{{item}}</li>
      </ul>
    </div>
    <button @click="toPos">跳转到指定位置</button>
    <button @click="toEl">跳转到指定元素</button>
    <div ref="text" style="font-size: 14px">{{msg}}</div>
    <button @click="change" style="font-size: 14px">change</button>
    <!--<vue-loading type="spin" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import vueLoading from 'vue-loading-template'
  import BScroll from 'better-scroll'


  export default {
    components: {
      vueLoading
    },
    mounted() {
      //设置content元素宽度
      this._setWidth();

      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: false,
        scrollX: true,
        click: false,     //是否开启点击
        bounce: true,   //是否开启回弹
        momentum: true, //是否开启惯性
        probeType: 3
      })

      this.scroll.on('scroll',(pos) => {
        console.log(`x:${pos.x}--y:${pos.y}`)
      })

      console.log(this.$route)


    },
    data() {
      return {
        arrText: ['js','jq','vue','css','html','less','react','es6','angular','git','node','mock','java','php','c','python','ruby'],
        msg: 'no change'
      }
    },
    methods: {
    	change() {
    		this.msg = "change one";
    		console.log(this.$refs.text.innerHTML);
    		this.$nextTick(() => {
    			console.log(this.$refs.text.innerHTML);
    		})
    		this.msg = "change two";
    		console.log(this.$refs.text.innerHTML);
    	},
      _setWidth() {
        let content = this.$refs.content;
        let list = content.children;
        let width = 0;
        for(let i=0 ; i<list.length; i++){
          width += list[i].clientWidth;
        }
        content.style.width = width + "px";
      },
      testClick(index) {
        console.log(index);
      },
      toPos() {
        //滚动到指定的位置
        this.scroll.scrollTo(-100, 0,1000, 'ease')
      },
      toEl() {
        //滚动到指定元素
        this.scroll.scrollToElement(this.$refs.content.children[4], 1000, 0, 0, 'linear')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width:100%;
    overflow: hidden;
    font-size: 14px;
  }
  .wrapper .content {
    white-space:nowrap;
  }
  .wrapper .content li {
    float: left;
    width:50px;
    text-align: center;
    color: rebeccapurple;
  }
  button {
    margin: 10px;
  }
</style>
