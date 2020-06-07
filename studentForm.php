<?php
	include("connector.php");
?>

<html>
<head>
		<link rel='stylesheet' href = 'css/bootstrap.min.css'>
	</head>
    <style>
         @font-face{
			font-family: mana;
			src: url(fonts/ManaspaceReg.woff);
		}
        body{
            padding: 10%;
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
           /*-webkit-filter: blur(5px);*/
	       z-index: 0;
        }
        .Title{
           
            position: absolute;
            bottom: 20px;
            left:30%;
        }
        html { overflow-y: hidden; overflow-x: hidden; }
    </style>
	<body>
        <div class ="bg"></div>
        <div class = "Title">
        <img style='width:600px;' src="assets/menu/test_logo.png">
        </div>
        <div class = 'col-sm-4 col-sm-offset-4'>
        <div class ='panel panel-success'style='border: 0px;'>
        <div class = 'panel-heading'style='border: 0px; background: #428eb0; color:white;'>
		<h2 class='panel-title'style="font-family:mana;">Register</h2>
        </div>
        <div class = 'panel-body' style='border: 0px; background: #425b79;'>
		      <form action = 'insertStudent.php' method ='POST' autocomplete = "off">
			     <input style="background: #91b09a;border-color:#91b09a;color: #425b79;" type ='text'name ='username' placeholder='Username' class ='form-control'>
			     <br>
			     <input style="background: #91b09a;border-color:#91b09a;color: #425b79;" type ='password'name ='passWord' placeholder='Password' class ='form-control'>
			     <br>
			     <button style='border: 0px; color: #425b79; background:#91b09a;font-family:mana;' class = 'btn btn-success pull-right' style="margin-top:15px;">Submit</button>
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
setInterval(update,100);
</script>