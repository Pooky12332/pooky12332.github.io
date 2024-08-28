// Handles grabbing the posts off the server
function sqlGetPosts() {
	var xhttp = new XMLHttpRequest() // Making the request object

	xhttp.onreadystatechange = function() { // What to do with the data
		if (this.readyState == 4 && this.status == 200) {
      postIndex = JSON.parse(this.responseText)
      console.log(postIndex)
    }
	}
	xhttp.open("GET", "server/get.php", true) // The actual request
	xhttp.send() // Sending the request
}

// Handles the sending of data to the server
function sqlSendPost() {
	var xhttp = new XMLHttpRequest()

	// Checking username
	if (Cookies.get("username") == undefined) {
		alert("Please enter a username in the settings!")
		return
	} else {
		postName = Cookies.get("username")
	}

	// Formatting date
	if (Date().toString().substring(16, 18) > 12) {
		postTime = Date().toString().substring(16, 18) - 12 + Date().toString().substring(18, 21) + " PM"
	} else {
		postTime = Date().toString().substring(16, 21) + " AM"
	}

	// Checking that a link is provided is correct
	if (document.getElementById("postLink").value.includes("spotify") != true) {
		alert("Please provide a Spotify song link")
		return
	} else {
		postId = document.getElementById("postLink").value.substring(31, 53)
	}

	// Getting variables
	postComment = document.getElementById("postComment").value
	postLat = userLat
	postLng = userLng

	// Posting to the server
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			sqlGetPosts()
			setTimeout(() => {
				loadMarkers()
			}, 500)
		}
	}
	xhttp.open("POST", "server/send.php", true)
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	xhttp.send("postName=" + postName + "&postTime=" + postTime + "&postComment=" + postComment + "&postId=" + postId + "&postLat=" + postLat + "&postLng=" + postLng)

	//sqlGetPosts()
	//loadMarkers()
}