<template>
	<div class="full-width center-content">
		<users-map></users-map>
	</div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import UsersMap from './components/UsersMap.vue'

export default {
	components: {
		HelloComponent,
		UsersMap
	}
}
</script>

<style>
/*body{background-color:red;}*/
</style>