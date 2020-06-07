<?php
	

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
            left: 40%;
            /*top: 12%;*/
        }
        .play{
           
            position: absolute;
            left: 44%;
            top: 30%;
            width:40%;
            height:auto;
        }
        
        
      
        .signout{
            position: absolute;
            width:18%;
            left: 70%;
            top: 50%;
        }
        .ranking{
            position: absolute;
            width:20%;
            left: 10%;
            top: 40%;
        }
         .howtoplay{
            position: absolute;
            width:20%;
            left: 33%;
            top: 29%;
        }
        .back{
            position: absolute;
            left: 2%;
            top: 4%;
           
        }
        .movement{
            position: absolute;
            font-family: mana;
            font-size: 30px;
            color: royalblue;
            margin-top: 37%
        }
         html { overflow-y: hidden; overflow-x: hidden; }
    </style>
	<link rel = 'stylesheet' href ='css/bootstrap.min.css'>
</head>
<body>
    <div class='bg'></div>
    <div class="back"><a href="Howtomenu.php"><img src='assets/menu/blue-35803_960_720.png' style="width:16%;"></a></div>

    <div class='title'><img src='assets/otherimages/test2.png'></div>
  
    <div class="play"><img src='assets/menu/How_to_Play_small.png' style="width:48%;"></div>
    
    <div class="howtoplay"><img src='assets/menu/controllerP2.png'style="width:200%;"></div>
    
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