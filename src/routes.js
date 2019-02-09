import HelloWorld from './components/HelloWorld'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

export default [
	{ path: '/', component: HelloWorld},
	{ path: '/home', component: HomePage},
	{ path: '/login', component: LoginPage}
]