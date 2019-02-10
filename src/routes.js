import RootPage from './components/RootPage'
import DashboardPage from './components/DashboardPage'
import LoginPage from './components/LoginPage'

export default [
	{ path: '/', name: 'root', component: RootPage},
	{ path: '/dashboard', name: 'dashboard', component: DashboardPage},
	{ path: '/login', name: 'login', component: LoginPage}
]