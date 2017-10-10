<style lang="scss" scoped>

</style>
<template>
	<div>
	    <m-header></m-header>
      <navs></navs>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
	</div>
</template>
<script type='ecmascript-6'>
	import MHeader from 'components/DashBoardPage/m-header/Mheader'
	import Navs from 'components/DashBoardPage/nav/Nav'
	export default {
	  components: {
	    MHeader,
	    Navs
	  }
	}
</script>
