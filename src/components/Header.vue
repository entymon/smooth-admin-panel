<template>
	<div class="container">
		<div class="menu-navigation">
			<smooth-navigation/>
		</div>
	</div>
</template>

<script>
  import Navigation from './Navigation'

  export default {
    name: 'Header',
    components: {
      'smooth-navigation': Navigation
    }
  }
</script>

<style scoped>

</style>