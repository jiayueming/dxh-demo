<template>
	<div class="tab">
		<ul>
      <router-link tag="li" class="tab-item" to="/example1">
        案例一
      </router-link>
      <router-link tag="li" class="tab-item" to="/example2">
        案例二
      </router-link>
      <router-link tag="li" class="tab-item" to="/example3">
        案例三
      </router-link>
      <router-link tag="li" class="tab-item" to="/example4">
        案例四
      </router-link>
      <router-link tag="li" class="tab-item" to="/example5">
        案例五
      </router-link>
      <router-link tag="li" class="tab-item" to="/example6">
        案例六
      </router-link>
      <router-link tag="li" class="tab-item" to="/example7">
        案例七
      </router-link>
		</ul>
	</div>
</template>

<script>

</script>

<style scoped>
  .tab {
    border-bottom:1px solid darkgrey;
    background: white;
  }
  .tab ul{
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .tab ul .tab-item {
    flex:1;
    text-align: center;
    font-size: 14px;
  }
  .tab ul .router-link-active {
    color: red;
  }
</style>
