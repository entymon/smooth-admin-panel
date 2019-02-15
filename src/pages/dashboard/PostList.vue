<template>
	<div>

		<b-modal
				v-model="deleteModalShow"
				centered

		>
			Do you want delete post {{ post.title }}
		</b-modal>

		<div class="container-fluid">

			<div class="row my-3">
				<div class="col">
					<h3>List of posts</h3>
				</div>
				<div class="col text-right">
					<b-button @click="createPost" size="sm" variant="primary" class="mr-2 my-sm-0">
						Add new post
					</b-button>
				</div>
			</div>
			<list-row
					:key="index"
					:index="index"
					:post="post"
					v-for="(post, index) in posts"
					@editPost="updatePost"
					@deletePost="deleteAlert"
			/>
		</div>
	</div>
</template>

<script>
  import PostListRow from '../../components/blog/PostListRow';

  export default {
    name: 'ListPage',
		data: () => ({
      deleteModalShow: false,
      post: ''
		}),
    components: {
      'list-row': PostListRow,
    },
		computed: {
      posts() {
        return this.$store.state.posts
			},
			postByUuid() {
        return this.$store.getters.getByUuid(this.postUuid)
			}
		},
		methods: {
      createPost() {
        this.$router.push({ name: 'post' })
      },
      updatePost(postUuid) {
				this.$router.push({ name: 'post', params: { uuid: postUuid } })
			},
      deleteAlert(postUuid) {
        const values = this.$store.getters.getByUuid(postUuid);
        if (values.length !== 0) {
          this.post = values[0]
				} else {
          throw new Error(`Post for UUID: ${postUuid} does not exist`)
				}
        this.deleteModalShow = !this.deleteModalShow;
			}
		}
  }
</script>

<style scoped lang="scss">
</style>