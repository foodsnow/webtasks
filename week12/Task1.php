<?php
if (isset($_GET["name"])){
	setcookie("name",$_GET["name"]);
	?>
	<a href="Task1.php">Back</a>
	<?php
}
else if (!isset($_COOKIE["name"])){
?>
<form action="Task1.php">
Enter your name:<input type="text" name="name"/>
<input type="submit"/>
</form>
<?php
}
else{
	echo "Hello ".$_COOKIE["name"];
}
?>