<template>
	<div class="container-fluid">
		<div class="row my-3">
			<div class="col">
				<h3>List of posts</h3>
			</div>
			<div class="col text-right">
				<b-button v-on:click="createPost()" size="sm" variant="primary" class="mr-2 my-sm-0">
					Add new post
				</b-button>
			</div>
		</div>
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
      createPost() {
        this.$router.push({ name: 'post' })
      },
      updatePost(postUuid) {
				this.$router.push({ name: 'post', params: { uuid: postUuid } })
			}
		}
  }
</script>

<style scoped lang="scss">
</style>