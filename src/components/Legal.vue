<template>
	<div class='legal'>
		<h1>{{ copy.title }}</h1>
		<p>{{ copy.body }}</p>
	</div>
</template>

<script>
export default {
	name: 'Legal',
	props: {
		'copy': {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang='styl' scoped>
	@import '~styl/component/Legal.styl'
</style>