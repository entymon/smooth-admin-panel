import RootPage from './pages/RootPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/dashboard/PostList'
import PostCreate from './pages/dashboard/PostCreate'
import PostView from './pages/dashboard/PostView'
import PostEdit from './pages/dashboard/PostEdit'

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
				name: 'post-create',
        path: 'post/create',
        component: PostCreate
      },
      {
				name: 'post-edit',
        path: 'post/edit/:uuid',
        component: PostEdit
      },
      {
				name: 'post-view',
        path: 'post/view',
        component: PostView
      },
		]
	},
	{ path: '/login', name: 'login', component: LoginPage}
]