<?php
	session_start();
 	if(!isset($_SESSION['id'])){
 		header("location:index.php");
 	}

?>
<html>
<head>
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
    /*-webkit-filter: blur(5px);*/
	z-index: 0;
     
 }
        .title{
            position: absolute;
            left: 22%;
            /*top: 12%;*/
        }
        .play{
           
            position: absolute;
            left: 45%;
            top: 55%;
            width:15%;
            height:auto;
        }
        
        .play:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 44%;
            top: 55%;
            width:20%;
            height:auto;
        }
         .signout:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 42.3%;
            top: 85%;
            width:23%;
            height:auto;
        }
         .ranking:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 44%;
            top: 75%;
            width:18%;
            height:auto;
        }
         .howtoplay:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 41%;
            top: 65%;
            width:30%;
            height:auto;
        }
        .signout{
            position: absolute;
            width:18%;
            left: 43.3%;
            top: 85%;
        }
        .ranking{
            position: absolute;
            width:13%;
            left: 45%;
            top: 75%;
        }
         .howtoplay{
            position: absolute;
            width:25%;
            left: 42%;
            top: 65%;
        }
        html { overflow-y: hidden; overflow-x: hidden; }
    </style>
	<link rel = 'stylesheet' href ='css/bootstrap.min.css'>
</head>
<body>
    <div class='bg'></div>
    <div class='title'><img src='assets/menu/test_logo.png'></div>
    <div class="play"><a href="selectSPClass.php"><img src='assets/menu/Play_small.png' style="width:48%;"></a></div>
    <div class="signout"><a href="logout.php"><img src='assets/menu/Log_Out_small.png'style="width:58%;"></a></div>
    <div class="ranking"><a href="ranking.php"><img src='assets/menu/Rank_small.png'style="width:58%;"></a></div>
    <div class="howtoplay"><a href="selectGamemode.php"><img src='assets/menu/How_to_Play_small.png'style="width:58%;"></a></div>
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