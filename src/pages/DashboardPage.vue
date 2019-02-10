<template>
	<div class="container smooth-page page-dashboard">
		<smooth-header/>
		<div class="smooth-content">
			<router-view/>
		</div>
		<smooth-footer/>
	</div>
</template>

<script>
	import Header from '../components/Header';
	import Footer from '../components/Footer';
  import LoginService from '../services/LoginService'

	export default {
		name: 'HomePage',
		components: {
			'smooth-header': Header,
			'smooth-footer': Footer
		},
		beforeUpdate() {
      if (!LoginService.isLogged()) {
        this.$router.push('login')
      }
		}
	}
</script>

<style lang="scss">
	h3.header {
		padding: 15px 0;
	}
	.smooth-content {
		margin-bottom: 60px;
	}
</style>