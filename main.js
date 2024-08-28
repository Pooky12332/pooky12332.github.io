var postIndex
var userLat 
var userLng
var newHTML
var map

function onLoad() {
	sqlGetPosts()
	loadMap()
	loadUI()

	// Server needs time to connect to the HTTP server so this time out is for that
	setTimeout(() => {
		sqlGetPosts()
		loadMarkers()
	}, 500)
}