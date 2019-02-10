<template>
	<div>
		<h3 class="header">List of posts</h3>
		<list-row/>
	</div>
</template>

<script>
	import PostListRow from './PostListRow'

  export default {
    name: 'PostList',
		components: {
      'list-row': PostListRow
		}
  }
</script>

<style scoped lang="scss">
	.header {
		padding: 15px 0;
	}
</style>