<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content clearfix" ref="content">
        <li v-for="(item,index) in list" @click="click(index)">
        	<img :src="item.img" width="160px" height="80px"/>
        	<span>{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	  import BScroll from 'better-scroll'

    export default {
    	data() {
    		return {
    			list: []
    		}
    	},
    	created() {
    		let _ = this
    		this.$http({
    			method:'get',
          url:hostUrl+"/test/list"
    		}).then(function(response){
    			_.list = response.data.list

    			setTimeout(function(){
    				_.scroll = new BScroll(_.$refs.wrapper, {
			        scrollY: true,
			        scrollX: false,
			        probeType: 3,
			        scrollbar: true,
			        click: true
			      })
    				_.scroll.on('scroll',(pos) => {
    					//_.scroll.y == pos.y
    					//console.log(`x:${pos.x}--y:${pos.y}`)
			        console.log(_.scroll.y)
			      })

    				console.log(_.scroll.maxScrollY)
    			},20)


		    })
    	},
    	methods: {
    		click(index) {
    			console.log(index)
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
		z-index: -1;
	}
</style>
