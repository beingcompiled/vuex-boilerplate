<template>
	<header class='header'>
		<h1>{{ copy.title }}</h1>
		<ul>
			<li v-for='(item, index) in nav'>
				<router-link v-if='item.name !== "home"' :to="{ name: item.name, params: { param: 'param ' + index }}">
					{{ item.link }}
				</router-link>
				<router-link v-else :to="item.path">{{ item.link }}</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		'copy': {
			type: Object,
			required: true
		},
		'nav': {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang='styl' scoped>
		@import '~styl/component/Header.styl'
</style>