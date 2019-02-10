<template>
	<div class="navigation">
		<b-navbar toggleable="md" type="dark" variant="info">

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<router-link class="navbar-brand" :to="{ path: '/dashboard' }">Dashboard</router-link>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<router-link class="nav-link" :to="{ path: '/dashboard' }">List</router-link>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>

					<b-nav-item-dropdown right>
						<!-- Using button-content slot -->
						<template slot="button-content">
							<em>User</em>
						</template>
						<b-dropdown-item @click="userLogout">Signout</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

			</b-collapse>
		</b-navbar>

	</div>
</template>

<script>
  import LoginService from '../services/LoginService'

	export default {
		name: 'Navigation',
		data: () => ({
			postCreate: true,
		}),
		methods: {
			userLogout() {
        LoginService.logout();
        this.$router.push({ name: 'dashboard' })
			}
		}
	}
</script>

<style scoped>

</style>