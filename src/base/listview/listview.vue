<style lang="scss">

</style>
<template>
  <div :data="data">
    <ul ref="list">
      <li v-for="group in data" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" @click="selectItem(item)" class="list-group-item">
            <img v-lazy="item.avatar" class="avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data () {
      return {

      }
    },
    methods: {
      selectItem (item) {
        this.$emit('select', item)
      },
      _initList () {
        this.listScroll = new BScroll(this.$refs.list, {
          click: true
        })
      }
    }
  }
</script>
