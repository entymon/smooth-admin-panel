import RootPage from './components/RootPage'
import DashboardPage from './components/DashboardPage'
import LoginPage from './components/LoginPage'
import ListPage from './components/pages/ListPage'

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