<template>
	<div id='app'>
		<app-header :copy='header.copy' :nav='nav'></app-header>
		<span class="spacer"></span>
		<app-counter></app-counter>
		<transition name='fade' mode='out-in' v-on:after-enter='afterEnter' appear>
			<!--  
				Vue Router does not register any routing change if the same component is being used. 
				Using key, any change to the path will trigger a reload of the component with the new data.
			-->
			<router-view :key='$route.fullPath'/>
		</transition>
		<app-footer v-bind:links='links'></app-footer>
	</div>
</template>

<script>
	import { Events, EventBus } from '@/event-bus'
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import Counter from './components/Counter.vue'

	export default {
		name: 'app',
		props: {
			'pages': {
				type: Array,
				required: true
			},
			'footer': {
				type: Array,
				required: true
			},
			'header': {
				type: Object,
				required: true
			}
		},
		components: {
			'app-header': Header,
			'app-footer': Footer,
			'app-counter': Counter
		},
		data () {
			return {
				'nav': this.pages,
				'links': this.footer
			}
		},
		created: function () {
			console.log('App created!')
		},
		mounted () {
			EventBus.$on(Events.EVENT_NAME, function (e) {
				console.log('App.vue on EVENT_NAME', e)
				alert('App.vue on EVENT_NAME', e)
			})

			// this.$store.dispatch('increment')
		},
		methods: {
			afterEnter: function (el) {
				console.log('App route entered:', this.$route.name)
			}
		}
	}
</script>

<style lang='styl'>
	@import '~styl/global.styl'
</style>