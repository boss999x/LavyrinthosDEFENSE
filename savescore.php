<?php
    require("sql_connect.php");
   // require("connector.php");

    $value = $_POST['score'];
    $id = $_POST['id'];
    $class = $_POST['type'];
    
    $qry = mysqli_query($mysqli,
                       "SELECT * FROM player_info WHERE Player_ID=".$id);
    
    $user = mysqli_fetch_row($qry);
    if($value > $user[3]){
         $res = mysqli_query($mysqli, 
                 "UPDATE player_info SET
                 Player_score=".$value.", Class = '{$class}'
                 WHERE Player_ID=".$id);
    
        if(!$res){
            echo "FAILED  ";
            echo mysqli_error($mysqli);
        }
        
    
    }
        
        
   
?>