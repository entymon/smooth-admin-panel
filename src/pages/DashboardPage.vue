<template>
	<div class="container smooth-page page-dashboard">
		<smooth-header/>
			<router-view></router-view>
		<smooth-footer/>
	</div>
</template>

<script>
	import Header from '../components/Header';
	import Footer from '../components/Footer';

	export default {
		name: 'HomePage',
		components: {
			'smooth-header': Header,
			'smooth-footer': Footer
		}
	}
</script>

<style lang="scss">
	h3.header {
		padding: 15px 0;
	}
</style>