<?php
$db1 = mysqli_connect("localhost", "root", "", "week12");
if (!$db1) {
	die("could not connect");
}

if (isset($_GET["id"])) {
	$id = $_GET["id"];
	$admin = $_COOKIE["admin"];
	if ($admin == 1) {
		$sql = "DELETE FROM `cars` WHERE id = $id";
		mysqli_query($db1, $sql);
		echo "Car with id ".$id." is deleted <br>";
	}
	else{
		echo "You don't have permission";
	}
	?>
		<a href="Task3.php">Back</a>
	<?php
}
?>
