<template>
	<div class="container smooth-page page-dashboard">
		<smooth-header/>
		<smooth-list class="container-fluid"/>
		<smooth-footer/>
	</div>
</template>

<script>
	import Header from './Header';
	import Footer from './Footer';
	import PostList from './blog/PostList';

	export default {
		name: 'HomePage',
		components: {
			'smooth-header': Header,
			'smooth-footer': Footer,
			'smooth-list': PostList
		}
	}
</script>

<style scoped lang="scss">
	.page-dashboard {}
</style>