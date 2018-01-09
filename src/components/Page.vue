<template>
	<div class='page'>
		<h1>{{ copy.title }}</h1>
		<p>{{ copy.body }}</p>
		<p>{{ $route.params.param }}</p>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: {
		'copy': {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang='styl' scoped>
	@import '~styl/component/Page.styl'
</style>
