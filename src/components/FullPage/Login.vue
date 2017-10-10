<style lang="scss" scoped>
	
</style>
<template>
	<div class="login">
		<div class="login-wrapper">
			<form class="form" id="loginForm">
				<div class="userName">
					<span>用户名：</span><input type="text" v-model="userName">
				</div>
				<div class="passWord">
					<span>密&nbsp&nbsp&nbsp&nbsp码：</span><input type="text" v-model="passWord">
				</div>
				<div class="submit" @click="login">
					<input type="button" value="登录">
				</div>
			</form>
		</div>
	</div>
</template>
<script type='ecmascript-6'>
	import axios from 'axios'
	export default {
		data () {
			return {
				userName: '',
				passWord: '',
				userInfo: null
			}
		},
		methods: {
			login() {
				let data = {
					userName: this.userName,
					passWord: this.passWord
				};
				axios.get('/api/login', {params: data}).then(response => {
					let data = JSON.stringify(response)
					this.userInfo = JSON.parse(data)
					if(this.userInfo.data.code === 0){
						this.$router.push({path: '/'})
					}
				})
			}
		},
		created() {
			this.login();
		}
	}
</script>