<template>
	<div class="row my-2">
		<div class="col-md-1">{{ post.uuid }}</div>
		<div class="col-md-2">{{ post.title }}</div>
		<div class="col-md-5">{{ post.description }}</div>
		<div class="col-md-2">{{ post.imageUrl }}</div>
		<div class="col-md-2">
			<b-button class="mr-md-2">edit</b-button>
			<b-button variant="danger">remove</b-button>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'PostListRow',
		props: {
      post: Object
    }
  }
</script>

<style scoped>

</style>