// Handles the UI for when a user presses on a marker
function uiOpenPost(username, timestamp, comment, trackId) {
	document.getElementById('menu').innerHTML = ""

	newHTML = `<div>
		<h3 id="username">${username}</h3>
		<h3 id="timestamp">${timestamp}</h3><br><br>
	</div>
	<p id="comment">${comment}</p>
	<iframe id="content" style="border-radius:0px; padding:2%; bottom:0;" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="96%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`

	document.getElementById('menu').innerHTML = newHTML
}

// Hnadles the UI for when the user wants to make a post
function uiCreatePost() {
	document.getElementById('menu').innerHTML = ""

	newHTML = `<textarea id="postComment" placeholder="Type your comment here..."></textarea>
	<input id="postLink" type="text" placeholder="Paste your song link here...">
	<input id="postButton" type="submit" value="Post!" onclick="sqlSendPost()">`
	
	document.getElementById('menu').innerHTML = newHTML
}

// Handles the UI when the user is in the settings
function uiSettings() {
	document.getElementById('menu').innerHTML = ""

	newHTML = `<div id="settingsSection">
			<label id="settingsUsernameLabel"for="settingsUsername">Username:</label>
			<input id="settingsUsername" type="text">
		</div>
		<div id="settingsSection">
			<input id="settingsSave" type="submit" value="Save" onclick="loadUsername()">
		</div>
		<div id="settingConfirmation"></div>`

	document.getElementById('menu').innerHTML = newHTML
}