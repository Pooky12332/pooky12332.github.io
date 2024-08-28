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

  // SQL Query
  $sql = "SELECT username, timePosted, comment, trackId, lat, lng FROM posts";

  // Running the query and returning the JSON
  $data = $conn -> query($sql);
  $rows = mysqli_fetch_all($data);
  echo json_encode($rows);

  // Closing connection
  $conn -> close();
?>