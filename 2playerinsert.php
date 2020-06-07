<?php
if(!isset($_POST['player1'])  ||
	!isset($_POST['player2'])){
	echo "Incomplete POST data!";
	exit();

}

$register = true;


$player1 = $_POST['player1'];
//$last_name = $_POST['lastName'];
$player2 = $_POST['player2'];
$teamname = $_POST['teamname'];

include("sql_connect.php");
$variababble = mysqli_query($mysqli,
                           "SELECT * FROM team_scores");
while($row = mysqli_fetch_array($variababble)){
    if($row[1] == $teamname){
    
      $register = false;
        /*echo"<div class = 'alert alert-danger text-center'>
			     <span class = 'glyphicon glyphicon-exclamation-sign'></span>
                  Username already used!!
                </div>";
          */     
        //console.log('hi');
        //echo mysqli_error($mysqli);
    }
}

if($register == true){
    $sql = mysqli_query($mysqli,
	       "INSERT INTO team_scores (team_id, team_name, player1, player2 , score) 
	       VALUES (NULL,'".$teamname."', '".$player1."', '".$player2."', NULL)");
    
  
	       if($sql){
               
               //echo "<a href ='index.php'>";
               //echo "<button class = 'btn btn-success'>View Data</button></a>";
                echo "<div class = 'alert alert-success'>
			          <span class = 'glyphicon glyphicon-exclamation-sign'></span>
                        Success, You are now ready to play! 
                      </div>";

                 header("refresh:3; url = loginteam.php");

           }else{
               //echo"<div class = 'alert alert-danger'>
			     //<span class = 'glyphicon glyphicon-exclamation-sign'></span>
                  //Username already used!!
                //</div>";
               
           }
        
}
    
    

?>

<script src="js/jquery.min.js"></script>
<link rel='stylesheet' href='css/bootstrap.min.css'>

<html>
<head>
    <style>
         @font-face{
			font-family: mana;
			src: url(fonts/ManaspaceReg.woff);
		}
    body{
 	position: absolute;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
    background-image: url("assets/otherimages/Shovel_Knight_Background_Moonlit_Journey.jpg");
    background-size: cover;
	z-index: 0;
    }
        .title{
            position: absolute;
            left: 30%;
            top: 22%;
        }
        .greet{
            position: absolute;
            left: 30%;
            top: 22%;
            
        }
        img{
            position: absolute;
            left: 34%;
            top: 22%;
            width:30%;
        }
        .alert{
            width:500px;
            height:auto;
            margin-top: 20%;
            margin-left: 34%;
            font-size:20px;
        }
        .btn{
            width:500px;
            height:100px;
            margin-top: 8%;
            margin-left: 34%;
            font-size:40px;
            font-family: mana;
        }
        html { overflow-y: hidden; overflow-x: hidden; }
    </style>
    </head>
    <body>
    <div class="bg">>
       <div>
        <?php if(isset($register) && $register == false){ header("refresh:3; url = index.php"); ?>
           <div class = 'alert alert-danger'>
			<span class = "glyphicon glyphicon-exclamation-sign"></span>
               Username already used!!
           </div>
        <?php } ?>
       </div>
    </div>
         <audio controls autoplay style=" width:200px; opacity:0; background-color: white;">
 			 <source src="audio/titletheme.mp3" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>
</body>
</html>
<script>

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        played = true;
        }
        else {
                song.play();
                played = true;
        }
    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update,50);
</script>