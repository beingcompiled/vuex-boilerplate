<template>
	<div class='page'>
		<div class='content'>
			<h1>{{ copy.title }}</h1>
			<p>{{ copy.body }}</p>
			<p>{{ $route.params.param }}</p>
			<img :src="'./src/assets/image/' + images.hero"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: {
		'copy': {
			type: Object,
			required: true
		},
		'images': {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang='styl' scoped>
	@import '~styl/component/Page.styl'
</style>
