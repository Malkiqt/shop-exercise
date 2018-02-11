<?php 

	include('connect.php');

	$query = '';
	for($i = 0;$i<16;$i++){
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('cool shirt','100','tshirt.jpg','men','shirt');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('fresh shirt','100','tshirt_w.jpg','women','shirt');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('cool sweatshirt','100','sweatshirt.jpg','men','sweatshirt');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('fresh sweatshirt','100','sweatshirt_w.jpg','women','sweatshirt');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('cool hoodie','100','hoodie.jpg','men','hoodie');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('fresh hoodie','100','hoodie_w.jpg','women','hoodie');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('van Gogh','100','art.jpg','art','');";
		$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('Nietzsche','100','book.jpg','book','');";
	}
	$query .= "INSERT INTO items(name,price,image,type,subtype) VALUES('Nietzsche','100','book.jpg','book','')";
	$result = $conn->multi_query($query);
	if($result){
		echo 'success';
	}else{
		echo 'failure';
		echo $conn->connect_error;
	}


		
?>