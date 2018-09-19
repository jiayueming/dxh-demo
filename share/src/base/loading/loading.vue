<template>
	<div class="loading-box">
		<img src="./loading.gif" width="30" height="30"/>
		<div class="desc">{{title}}</div>
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

<style scoped>
  .loading-box {
    width: 100%;
    text-align: center;
  }
  .desc {
    font-size: 12px;
    color: #afafaf;
  }

</style>
