import RootPage from './pages/RootPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/dashboard/PostList'
import PostForm from './pages/dashboard/PostForm'

export default [
	{ path: '/', name: 'root', component: RootPage},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: DashboardPage,
		children: [
			{
				name: 'post-list',
				path: '',
				component: ListPage
			},
      {
				name: 'post',
        path: 'post/:uuid?',
        component: PostForm
      }
		],
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage
	},
  {
    path: '*',
    redirect: 'dashboard'
  },
]