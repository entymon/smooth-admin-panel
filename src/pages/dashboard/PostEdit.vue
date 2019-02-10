<template>
	<div>
		<h3 class="header">Post Edit</h3>
	</div>
</template>

<script>
  import Wysiwyg from "vue-wysiwyg";

  export default {
    name: 'PostEdit',
		components: {
      'wysiwyg': Wysiwyg
		},
		data: () => {
      myHTML: ''
		}
  }
</script>

<style scoped>

</style>