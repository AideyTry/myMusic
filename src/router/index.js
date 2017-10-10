import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/DashBoardPage/rank/Rank'
import Recommend from 'components/DashBoardPage/recommend/Recommend'
import Search from 'components/DashBoardPage/search/Search'
import Singer from 'components/DashBoardPage/singer/Singer'
import DashBoardPage from 'components/DashBoardPage/DashBoardPage'
import SingerDetail from 'components/DashBoardPage/singerDetail/singerDetail'
import Login from 'components/FullPage/Login'
import auth from './router-hooks/before/auth.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
  	{
  		path: '/login',
  		name: 'login',
  		component: Login
  	},
  	{
  		path: '/',
  		component: DashBoardPage,
  		redirect: {name: 'recommend'},
  		meta: { requiresAuth: true },
  		children: [
			{
				path: 'rank',
				name: 'rank',
				component: Rank
			},
			{
				path: 'recommend',
				name: 'recommend',
				component: Recommend
			},
			{
				path: 'search',
				name: 'search',
				component: Search
			},
			{
				path: 'singer',
				name: 'singer',
				component: Singer,
        meta: { requiresAuth: true },
        children: [
          {
            path: ':id',
            component: SingerDetail
          }
        ]
			}
  		]
  	}
  ]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		auth.loggedIn().then(resolve => {
			if (!resolve) {
				next({
					path: '/login',
					query: {redirect: to.fullPath}
				})
			} else {
				next()
			}
		})
	} else {
		next()
	}
})
export default router
