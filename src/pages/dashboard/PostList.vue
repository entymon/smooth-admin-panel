<template>
	<div class="container-fluid">
		<h3 class="header">List of posts</h3>
		<list-row :key="post.uuid" v-for="post in posts" :post="post" @editPost="updatePost"/>
	</div>
</template>

<script>
  import PostListRow from '../../components/blog/PostListRow'

  export default {
    name: 'ListPage',
    components: {
      'list-row': PostListRow
    },
    data: () => ({
      posts: [
        {
          uuid: '1',
          title: 'Test11 Title',
          description: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
          imageUrl: 'obrazek'
        },
        {
          uuid: '2',
          title: 'Test22 Title',
          description: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
          imageUrl: 'obrazek'
        },
        {
          uuid: '3',
          title: 'Test33 Title',
          description: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
          imageUrl: 'obrazek'
        }
      ]
    }),
		methods: {
      updatePost(postUuid) {
				this.$router.push({ name: 'post', params: { uuid: postUuid } })
			}
		}
  }
</script>

<style scoped lang="scss">
</style>