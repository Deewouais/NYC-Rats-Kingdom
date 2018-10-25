'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVld291YWlzIiwiYSI6ImNqbmV0MHJzbTEzZHEzcXBsNnZxOWVkZWcifQ.-wRmzpdODmgv_hlFfwn6zQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/deewouais/cjnow52am1nmj2rqkz1xf9btl',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})