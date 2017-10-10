<style lang="scss" scoped>

</style>
<template>
	<div class='recommend'>
		<div class="recommend-content">
			<div v-if="recommends.length" class="slider-wrapper">
				<slider :recommend="recommends">
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl" alt="">
						</a>
					</div>
				</slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in discList" class="item">
            <div class="icon">
              <img v-lazy="item.imgurl" alt="">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading @title="titles"></loading>
      </div>
		</div>
	</div>
</template>
<script>
	import slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
	import {getRecommend, getDiscList} from 'api/recommend.js'
	// import {ERR_OK, commonParams, options} from 'api/config.js'
  import {ERR_OK} from 'api/config.js'
	// import axios from 'axios'
	export default {
		components: {
			slider,
      Loading
		},
		data () {
			return {
				recommends: [],
        discList: [],
        titles: '图片正在被载入'
			}
		},
		methods: {
			_getRecommend () {
				getRecommend().then((res) => {
					// console.log("原始数据",res);
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider
					}
				})
			},
			_getDiscList () {
				getDiscList().then((res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
					}
				}).catch((err) => {
					console.log(err)
				})
			}
		},
		created () {
      setTimeout(() => {
        this._getRecommend()
      }, 20)
			// 歌单列表
      setTimeout(() => {
        this._getDiscList()
      }, 20)
		}
	}
</script>
