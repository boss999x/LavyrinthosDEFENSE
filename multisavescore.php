<?php
    require("sql_connect.php");
   // require("connector.php");

    $value = $_POST['score'];
    $teamname =$_POST['teamname'];
    $class1 = $_POST['type'];
    $class2 = $_POST['type2'];

    
    $qry = mysqli_query($mysqli,
                       "SELECT * FROM team_scores WHERE team_name ='".$teamname."'");
    
    $user = mysqli_fetch_row($qry);
    if($value > $user[4]){
         $res = mysqli_query($mysqli, 
                 "UPDATE team_scores SET
                 score=".$value.", player1Class = '{$class1}',player2Class = '{$class2}' 
                 WHERE team_name ='".$teamname."'");
    
        if(!$res){
            echo "FAILED  ";
            echo mysqli_error($mysqli);
        }
        
    
    }
        
        
   
?>