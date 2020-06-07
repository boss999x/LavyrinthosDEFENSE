<?php
require("connector.php");
if(isset($_POST['username']) && isset($_POST['password'])){
	
	$username = $_POST['username'];
	$password = md5($_POST['password']);

	
	$qry = mysqli_query($sql,
	"SELECT * FROM player_info WHERE username = '".$username."'AND 
	password = '".$password."'");
    
    $user = mysqli_fetch_row($qry);

	if($qry){
		$x = mysqli_num_rows($qry);
		if($x == 1){
			session_start();
			$_SESSION['user'] = $user[1];
            $_SESSION['id'] = $user[0];
			header("location:home.php");
		}else{
			$login = false;
		}
	}


}
?>
<html>
<head>
	<link rel = 'stylesheet' href ='css/bootstrap.min.css'>
</head>
<style>
    @font-face{
			font-family: mana;
			src: url(fonts/ManaspaceReg.woff);
		}
 .bg{
 	position: absolute;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
    background-image: url("assets/otherimages/Shovel_Knight_Background_Moonlit_Journey.jpg");
    background-size: cover;
    /**-webkit-filter: blur(5px);*/
	z-index: 0;
     
 }
 .Title{
     position: absolute;
     top: 30px;
     margin-left:27%
 }
    .back{
            position: absolute;
            left: 2%;
            top: 4%;
           
        }
html { overflow-y: hidden; overflow-x: hidden; }
</style>
<body style="padding:10%;">
    <div class="bg">
    </div>
     <div class="back"><a href="index.php"><img src='assets/menu/blue-35803_960_720.png' style="width:16%;"></a></div>
    <div class = "Title">
        <img src="assets/otherimages/test2.png">
    </div>
	<div class = 'col-sm-4 col-sm-offset-4' style="margin-top:10%;">
		<?php
			if(isset($login) && $login == false){
		?>
		<div class = 'alert alert-danger'>
			<span class = "glyphicon glyphicon-exclamation-sign"></span>
			Login Failed!
		</div>
		<?php
			}
		?>
       
			
		<div class ='panel panel-success'style='border: 0px;'>
			<div class = 'panel-heading' style='border: 0px; background: #428eb0; color:white;'>
				<h2 class='panel-title' style="font-family:mana;">Log in</h2>
			</div>
			<div class = 'panel-body' style='border: 0px; background: #425b79;'>
			<form method ='POST' action='login.php' autocomplete ='OFF'>
				<input name='username' style="background: #91b09a;border-color:#91b09a;color: #425b79;" type ='text' placeholder='Username' class ='form-control' method ='post' action='test.html'>
				<br>
				<input style="background: #91b09a;border-color:#91b09a;" name='password'type ='password' placeholder='Password' class = 'form-control'>
				<br>

				<button style= 'border: 0px; color: #425b79; background:#91b09a; border-color:#91b09a; margin-top:15px;font-family:mana;' class = 'btn btn-success pull-right  '>LOG IN</button>
                
			
			</form>
            <form method ='POST' action='studentForm.php' autocomplete ='OFF'>
                <button style='border: 0px; color: #425b79; background:#91b09a;font-family:mana;' class = 'btn btn-success pull-left' method ='POST' action='studentForm.php' autocomplete ='OFF'>REGISTER</button>
            </form>    
			</div>
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