<?php
	$db_host = "18p.h.filess.io";
  $db_pass = "11c2aaa8b0e7d20d45b1e14f221f9511bb26a039";
  $db_name = "MusicMaps_ledrecord";
  $db_port = "3307";

  $conn = new mysqli($db_host, $db_name, $db_pass, $db_name, $db_port);

  // Check connection
  if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
  };

  // Gather all fields from POST request
  $postName = $_POST['postName'];
  $postTime = $_POST['postTime'];
  $postComment = $_POST['postComment'];
  $postId = $_POST['postId'];
  $postLat = $_POST['postLat'];
  $postLng = $_POST['postLng'];

  // Creating the SQL query
  $sql = 'INSERT INTO posts (username, timePosted, comment, trackId, lat, lng) VALUES ("' . $postName . '", "'. $postTime . '", "' . $postComment . '", "' . $postId . '", ' . $postLat . ', ' . $postLng . ')';

  // Posting the query to the server and returning errors if nessary
  if ($conn -> query($sql) === TRUE) {
  	echo "Posted to the server!";
  } else {
  	echo "Error: " . $sql . " - " . $conn -> error;
  }

  // Closing the connection
  $conn -> close();
?>