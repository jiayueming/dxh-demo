<template>
	<div id="app">
		<Tab></Tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import Tab from 'components/tab/Tab'

	export default {
		name: 'app',
		components: {
			Tab
		}
	}
</script>

<style>
  #app {
    font-size: 14px;
  }
	* {
		margin: 0;
		padding: 0;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	li {
		list-style: none;
	}
</style>
