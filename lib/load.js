var markerIcon = L.icon({
	iconUrl: "assets/marker.png",
	iconSize: [20, 20],
})

// Loading the background map
function loadMap() {
	map = L.map('map', {
		zoomControl: false, // Turns off zoom buttons at the top
		attributionControl: false // Turns off copyright info at the bottom of a page
	})

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		minZoom: 15,
	  maxZoom: 18
	}).addTo(map)
}

// Loading all the markers on to the map
function loadMarkers() {
	console.log("Loading markers...")
	for (let i = 0; i < postIndex.length; i++) {
		L.marker([postIndex[i][4], postIndex[i][5]], {icon: markerIcon}).addTo(map).on("click", function(){uiOpenPost(postIndex[i][0], postIndex[i][1], postIndex[i][2], postIndex[i][3])})
	}
}

// Loading the UI elements overtop of everything
function loadUI() {
	// Creating the custom button for adding posts
	L.Control.Button = L.Control.extend({
		options: {position: "bottomright"},
		onAdd: function(map) {
			// Main div
			var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control')

			// Button function
      var button = L.DomUtil.create('a', 'leaflet-control-button', container)
      L.DomEvent.disableClickPropagation(button)
      L.DomEvent.on(button, 'click', function(){
        uiCreatePost()
      });

      // Button icon
      var icon = L.DomUtil.create('img', 'leaflet-control-add-icon', button)
      icon.src = "assets/new-post-icon.png"
      icon.style.width = "20px"
      icon.style.display = "inline-block"
      icon.style.margin = "5px"

      container.title = "Title"
      return container
		},
		onRemove: function(map) {}
	})

	var ad = new L.Control.Button().addTo(map)

	// Creating the custom button for settings
	L.Control.Button = L.Control.extend({
		options: {position: "topright"},
		onAdd: function(map) {
			// Main div
			var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control')

			// Button function
      var button = L.DomUtil.create('a', 'leaflet-control-button', container)
      L.DomEvent.disableClickPropagation(button)
      L.DomEvent.on(button, 'click', function(){
        uiSettings()
      });

      // Button icon
      var icon = L.DomUtil.create('img', 'leaflet-control-add-icon', button)
      icon.src = "assets/settings-icon.png"
      icon.style.width = "20px"
      icon.style.display = "inline-block"
      icon.style.margin = "5px"

      container.title = "Title"
      return container
		},
		onRemove: function(map) {}
	})

	var st = new L.Control.Button().addTo(map)

	// Loading the locate button
	var lc = L.control.locate({
		position: "bottomright",
		showPopup: false
	}).addTo(map)

	// Starting the location and getting the user spot
	lc.start()

	map.on('locationfound', function(e) {
		userLat = lc._circle._latlng.lat
		userLng = lc._circle._latlng.lng
  })
}

// Handles the users name with cookies
function loadUsername() {
	let userName = document.getElementById("settingsUsername").value
	Cookies.set("username", userName)
	document.getElementById("settingConfirmation").innerHTML = "<p style='text-align: center; float: none;'>Settings Updated!</p>"

	setTimeout(() => {
		document.getElementById("settingConfirmation").innerHTML = ""
	}, 1000)
}