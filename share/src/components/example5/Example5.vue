<template>
  <div class="wrapper">
    <p style="font-size: 18px;text-align: center">{{parseInt(money)}}</p>
    <div class="point-box">
      <div class="point"></div>
    </div>
    <div class="rule-box"
         ref="rule"
         @touchstart.prevent="progressTouchStart"
         @touchmove.prevent="progressTouchMove"
         @touchend="progressTouchEnd">
      <span class="rule-line" :class="{long: index%10 == 5}" v-for="(item, index) in ruleList">
        <i v-if="index == 5">4000</i>
        <i v-if="index == 45">8000</i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import {prefixStyle} from 'common/js/dom'

  const transform = prefixStyle('transform')

  let ruleArr = []
  for (var i = 0; i < 51; i++) {
    ruleArr.push(i)
  }

  export default {
    data() {
      return {
        ruleList: ruleArr,
        money: 6000
      }
    },
    created() {
      this.touch = {}
    },
    methods: {
      progressTouchStart(e) {
        this.$refs.rule.style.transition = "none";
        this.touch.initiated = true
        this.touch.startX = e.touches[0].pageX
        const rect = this.$refs.rule.getBoundingClientRect()
        this.touch.left = rect.left
      },
      progressTouchMove(e) {
        if (!this.touch.initiated) {
          return
        }
        let deltax = e.touches[0].pageX - this.touch.startX
        //let offsetWidth = Math.max(0, this.touch.left + deltax)
        let offsetWidth = this.touch.left + deltax
        if (offsetWidth < 0) {
          this.money = 6000 - offsetWidth*20
        } else if (offsetWidth > 0) {
          this.money = 6000 - offsetWidth*20
        }

        console.log(offsetWidth)
        this.$refs.rule.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      },
      progressTouchEnd() {
        this.touch.initiated = false
        const rect = this.$refs.rule.getBoundingClientRect()
        let left = rect.left
        // console.log(left)
        // console.log(left % 5)
        if (left % 6 != 0) {
          if(left % 6 > 3) {
            left = Math.floor(left / 6) * 6 + 6
          } else {
            left = Math.floor(left / 6) * 6
          }
        }
        if (left > 120) {
          left = 120
        } else if(left < -120) {
          left = -120
        }

        if (left > 0) {
          this.money = 6000 - parseInt(left/6*100)
        } else if(left < 0) {
          this.money = 6000 - parseInt(left/6*100)
        }else {
          this.money = 6000
        }
        this.$refs.rule.style.transition = ".5s"
        this.$refs.rule.style[transform] = `translate3d(${left}px,0,0)`
      },
    }
  }
</script>

<style scoped="scoped">
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    position: fixed;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 100px 0;
    overflow: hidden;
    z-index: -1;
  }

  .rule-box {
    width: 100%;
    padding: 10px 5px 0;
    box-sizing: border-box;
    font-size: 0;
    border-bottom: 1px solid #cdcdcd;
    text-align: center;
  }

  .rule-box .rule-line {
    position: relative;
    display: inline-block;
    width: 5px;
    height: 6px;
    border-left: 1px solid #cdcdcd;
  }
  .rule-box .rule-line i {
    font-style: normal;
    position: absolute;
    top: -20px;
    left: -16px;
    font-size: 14px;
  }

  .rule-box .long {
    height: 12px;
  }
  .point-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
  }
  .point-box .point {
    position: relative;
    left: -2px;
    width: 2px;
    height: 52px;
    background: red;
    z-index: 2;
  }
</style>
