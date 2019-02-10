import RootPage from './pages/RootPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/dashboard/ListPage'

export default [
	{ path: '/', name: 'root', component: RootPage},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardPage,
		children: [
			{
				path: '',
				component: ListPage
			}
		]
	},
	{ path: '/login', name: 'login', component: LoginPage}
]