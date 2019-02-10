<template>
	<div class="row my-2">
		<div class="col-md-1">{{ post.uuid }}</div>
		<div class="col-md-2">{{ post.title }}</div>
		<div class="col-md-5">{{ post.body }}</div>
		<div class="col-md-2">{{ post.image }}</div>
		<div class="col-md-2">
			<b-button @click=editRow class="mr-md-2">edit</b-button>
			<b-button variant="danger">remove</b-button>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'PostListRow',
		props: ['post'],
		methods: {
      editRow() {
        this.$emit('editPost', this.post.uuid)
			}
		}
  }
</script>

<style scoped>

</style>