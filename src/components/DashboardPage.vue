<template>
	<div class="container smooth-page page-dashboard">
		<smooth-header/>
		<smooth-footer/>
	</div>
</template>

<script>
	import Header from './Header';
	import Footer from './Footer';

	export default {
		name: 'HomePage',
		components: {
			'smooth-header': Header,
			'smooth-footer': Footer
		}
	}
</script>

<style scoped lang="scss">
	.page-dashboard {}
</style>