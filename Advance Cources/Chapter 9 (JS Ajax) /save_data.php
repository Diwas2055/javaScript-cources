<?php
$con=mysqli_connect("localhost","admin","admin","js_ajax_example");

$qr=mysqli_query($con,"INSERT INTO `users`(`name`, `email`, `age`, `qualification`) VALUES ('".$_REQUEST['name']."','".$_REQUEST['email']."','".$_REQUEST['age']."','".$_REQUEST['qual']."')");
if($qr){
    echo "Inserted";
}
else{
    echo "Error in  Saving User";
}