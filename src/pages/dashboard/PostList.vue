<template>
	<div class="container-fluid">
		<h3 class="header">List of posts</h3>
		<list-row :key="post.uuid" v-for="post in posts" :post="post" @editPost="updatePost"/>
	</div>
</template>

<script>
  import PostListRow from '../../components/blog/PostListRow';

  export default {
    name: 'ListPage',
    components: {
      'list-row': PostListRow
    },
		computed: {
      posts() {
        return this.$store.state.posts
			}
		},
		methods: {
      updatePost(postUuid) {
				this.$router.push({ name: 'post', params: { uuid: postUuid } })
			}
		}
  }
</script>

<style scoped lang="scss">
</style>