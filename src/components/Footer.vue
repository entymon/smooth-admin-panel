<template>
	<div class="footer container">
		<div class="copyright">
			Copyright Smooth Code Line Ltd. 2019
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		data: () => ({
			year: (new Date()).getFullYear()
		})
	}
</script>

<style scoped lang="scss">
	.footer {
		position: fixed;
		bottom: 0;

		.copyright {
			padding: 10px;
			background-color: $black;
			color: $white;
			text-align: center;
		}
	}
</style>