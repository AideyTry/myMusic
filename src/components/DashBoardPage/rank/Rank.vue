<style lang="scss" scoped>
		.time{
			color:#f00;
		}
		.main{
			margin-top:200px;
			img{
				display:inline-block;
			}
		}
</style>
<template>
	<div>
    <header class="time">{{timers}}</header>
    <h2>{{newTime}}</h2>
		<div class="main">
			<img src="../../../common/image/1.jpg" height="220" width="220" data-path="1.jpg" alt="">
			<img src="" data-path="2.jpg" alt="">
			<img src="" data-path="3.jpg" alt="">
			<img src="" data-path="4.jpg" alt="">
			<img src="" data-path="5.jpg" alt="">
			<img src="" data-path="6.jpg" alt="">
			<img src="" data-path="7.jpg" alt="">
			<img src="" data-path="8.jpg" alt="">
			<img src="" data-path="9.jpg" alt="">
			<img src="" data-path="10.jpg" alt="">
			<img src="" data-path="11.jpg" alt="">
			<img src="" data-path="7.jpg" alt="">
			<img src="" data-path="8.jpg" alt="">
			<img src="" data-path="9.jpg" alt="">
			<img src="" data-path="10.jpg" alt="">
			<img src="" data-path="11.jpg" alt="">
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				arr: ['l.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '6.jpg', '8.jpg', '1.jpg', '10.jpg'],
        timers: null
			}
		},
		computed: {
      newTime () {
        return new Date('2017/09/10')
      }
		},
		methods: {
      getTime () {
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				let hour = date.getHours()
				let minute = date.getMinutes()
				let second = date.getSeconds()
				if (month < 10) {
					month = `0${month}`
				}
				if (day < 10) {
					day = `0${day}`
				}
				if (hour < 10) {
					hour = `0${hour}`
				}
				if (minute < 10) {
					minute = `0${minute}`
				}
				if (second < 10) {
					second = `0${second}`
				}
				let str = `${year}-${month}-${day} ${hour}:${minute}:${second}`
				return str
			},
			imgLoading () {
				let imgs = document.querySelectorAll('img')
				window.onscroll = function () {
					let client = document.documentElement.clientHeight
					let scrollHeight = document.documentElement.scrollTop
					for (let i = 0; i < imgs.length; i++) {
						if (imgs[i].getOffsetTop() < (client + scrollHeight)) {
							let path = imgs[i].dataset['path']
							imgs[i].src = `img/${path}`
						}
					}
				}
			}
		},
		created () {
			this.imgLoading()
		},
    mounted () {
      this.$nextTick(() => {
          setInterval(() => {
          this.timers = this.getTime()
        }, 1000)
      })
    }
	}
</script>
