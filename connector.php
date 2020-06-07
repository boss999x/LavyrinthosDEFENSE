<?php
	$sql = mysqli_connect("localhost","root","","playerinfo");

	/* check connection */
	//mysqli function that displays any error#:
	//mysqli_connect_errno()
	
	if(!$sql){
		echo "Error: connecting to db!";
		exit();
	}

?>