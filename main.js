var map;
var userLat 
var userLng

var markerIcon = L.icon({
	iconUrl: "assets/marker.png",
	iconSize: [18, 18],
})

function onLoad() {
	loadMap()
	loadUI()
	loadMarkers()
}

function loadMap() {
	map = L.map('map', {
		zoomControl: false, // Turns off zoom buttons at the top
		attributionControl: false // Turns off copyright info at the bottom of a page
	})

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		minZoom: 16,
	  maxZoom: 16
	}).addTo(map)
}

function loadMarkers() {
	L.marker([54.016, -6.409], {icon: markerIcon}).addTo(map).on("click", function(){markerClicked()})
	L.marker([54.016, -6.390], {icon: markerIcon}).addTo(map).on("click", function(){markerClicked()})
}

function loadUI() {
	var lc = L.control.locate({
		position: "bottomright",
	}).addTo(map)

	lc.start()

	map.on('locationfound', function(e) {
		console.log("User latlng updated")
		userLat = lc._circle._latlng.lat
		userLng = lc._circle._latlng.lng
  })
}

function markerClicked() {
	document.getElementById('menu').innerHTML = `
	<div>
		<h3 id="username">Pooky</h3>
		<h3 id="timestamp">6:55 PM</h3>
	</div>
	<p id="comment">This is a test line to test the marker propities, lets see if it wraps</p>
	<iframe id="content" style="border-radius:0px; padding:2%; bottom:0;" src="https://open.spotify.com/embed/track/1I3XuGIh2qluBSUknDyA62?utm_source=generator" width="96%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
	`
}