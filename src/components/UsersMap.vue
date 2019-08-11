<template>
	<div>
		<l-map :zoom="zoom" :center="center" style="height: 750px; width: 900px">
			<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
			<l-marker :lat-lng="marker"></l-marker>
		</l-map>
	</div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'UsersMap',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data: function(){
		return {
			zoom:13,
			center: L.latLng(47.218349,  -1.539886),
			url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
			attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			marker: L.latLng(47.218349,  -1.539886),
		}
	}
}
</script>

<style>
html, body, #app {
	height: 100%;
	margin: 0;
}
</style>