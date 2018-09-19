<template>
  <Scroll :data="data" class="list-view">
    <ul>
      <li v-for="group in data" class="list-group">
        <h2>{{group.title}}</h2>
        <uL>
          <li v-for="item in group.items" class="list-group-item">
            <img class="avatar" :src="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </uL>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="(item, index) in shortcutList" class="item" :data-index="index" :class="{'current':0 === index}">
          {{item}}
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      Scroll
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    computed: {
      shortcutList() {
        let arrtitle =  this.data.map(function(item) {
          return item.title.substr(0,1)
        })
        return arrtitle
      }
    },
    created() {
      // console.log(this.shortcutList)
    }
  }
</script>

<style scoped>
  .list-view {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .list-group h2 {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 14px;
    color: black;
    background: #cccccc;
  }
  .list-group-item {
    display: flex;
    align-items: center;
    padding: 20px 0 0 30px;
  }
  .list-group-item .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .list-group-item .name {
    margin-left: 20px;
    font-size: 14px;
    color: black;
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: black;
    font-family: Helvetica;
  }
  .list-shortcut .item {
    padding: 3px;
    line-height: 1;
    color: white;
    font-size: 14px;
  }
  .list-shortcut .current {
    color: gold;
  }
</style>
