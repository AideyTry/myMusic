<style lang="scss" scoped>
	.nav{
		display:flex;
		height:44px;
		line-height:44px;
		.nav-item{
			flex:1;
			text-align:center;
			.nav-link{
				padding-bottom:5px;
				color:#00f;
			}
			&.router-link-active{
				.nav-link{
					color:#0f0;
					border-bottom:2px solid #ccc;
				}
			}
		}
	}
</style>
<template>
	<div class="nav">
		<router-link tag="div" class="nav-item" to="/recommend">
			<span class="nav-link">推荐</span>
		</router-link>
		<router-link tag="div" class="nav-item" to="singer">
			<span class="nav-link">歌手</span>
		</router-link>
		<router-link tag="div" class="nav-item" to="/rank">
			<span class="nav-link">排行</span>
		</router-link>
		<router-link tag="div" class="nav-item" to="/search">
			<span class="nav-link">搜索</span>
		</router-link>
		<p>{{addNum}}</p>
		<button @click="add">{{num}}</button>
		<button @click="popUp">点我</button>
	</div>
</template>
<script type='ecmascript-6'>
	export default {
		data () {
			return {
		    	str: 'zs',
		    	num: 1
			}
		},
		computed: {
			addNum () {
				let fact = (num) => {
					if (num<=1) {
						return 1
					}
					return num * fact(num-1)
				}
				return fact(this.num)
			}
		},
		methods: {
			add () {
				this.num++
			},
			popUp () {
				alert('我被点击了')
			}
		}
	}
</script>