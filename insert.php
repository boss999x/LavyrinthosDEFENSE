<?php
 if(!isset($_POST['pname']) || !isset($_POST['price'])){
 	echo "No data passed";
 	exit();
 }

 $name = $_POST['pname'];
 $price = $_POST['price'];
 $desc = $_POST['desc'];

 if($_FILES['pphoto']['error'] == 0){
 	move_uploaded_file($_FILES['pphoto']['tmp_name'], 'images/'.$_FILES['pphoto']['name']);
 	$photo = $_FILES['pphoto']['name'];
 	require("sql_connect.php");
 	$sql = mysqli_query($mysqli,
 		"INSERT INTO products (Product_ID, Product_name, Product_Price ,Product_Description, Product_image)
 		VALUES (NULL,'".$name."','".$price."', '".$desc."','".$photo."')");
 	if($sql){
 		header("location:index.php");
 	}else{
 		echo "Error Inserting Data!";
 		exit();

 	}


 	}
 ?>