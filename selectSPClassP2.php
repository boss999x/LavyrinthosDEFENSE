<?php
	
	session_start();
 	if(!isset($_SESSION['teamname'])){
 		header("location:index.php");
 	}
 $classType1 = $_POST['class_type'];
 
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
            /*position: absolute;
            /*top: 12%;*/
        }
        .play{
           
            position: absolute;
            left: 24%;
            top: 45%;
            width:15%;
            height:auto;
        }
        
        .play:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 22%;
            top: 42%;
            width:18%;
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
             left: 43%;
            top: 42%;
            width:18%;
            height:auto;
        }
         .howtoplay:hover{
            /*background-image: url(assets/menu/How_to_Play_small.png);*/
             left: 63%;
            top: 42%;
            width:18%;
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
            width:15%;
            left: 44%;
            top: 45%;
        }
         .howtoplay{
            position: absolute;
            left: 64%;
            top: 45%;
            width:15%;
            height:auto;
        }
        .select{
            top:-10%;
             position: absolute;
            width:10%;
        }
        .button{
             border:none;
           
        }
        .back{
            position: absolute;
            left: 2%;
            top: 4%;
           
        }
        .P1{
            position: absolute;
            font-size: 37px;
            font-family: mana;
            color: limegreen;
            left: 45%;
            top: 25%;
            
        }
         html { overflow-y: hidden; overflow-x: hidden; }
    </style>
	<link rel = 'stylesheet' href ='css/bootstrap.min.css'>
</head>
<body>
    <div class='bg'></div>
    <div class='container'>
        <div class='title col-md-5 col-md-offset-4'>
            <img src='assets/otherimages/test2.png'>
        </div>
        <div class="container">
        <div class='select col-md-5 col-md-offset-3'>
            <img src='assets/menu/SELECT%20CLASS_small.png'>
        </div>
        </div>
        <div class="back"><a href="home.php"><img src='assets/menu/blue-35803_960_720.png' style="width:16%;"></a></div>
        <form method="POST" action="multiplayergame.php">
            <div class="play">
               <input name='classType1' type = 'hidden' value="<?php echo $classType1?>">
				<br>
				<input  name='classType2'type ='hidden' value = "0">
				<br>
                <button type='submit' name="class_type" value=0>

            <img src='assets/menu/Knight.png' style="width:100%;"></button></div>                    
        </form>
         <form method="POST" action="multiplayergame.php">
            <div class="ranking">
               <input name='classType1' type = 'hidden' value="<?php echo $classType1?>">
                <input name='playername1' type = 'hidden' value="<?php echo $player1 ?>">
                <input name='playername2' type = 'hidden' value="<?php echo $player2 ?>">
				<br>
				<input  name='classType2'type ='hidden' value = "1">
				<br>
                <button type='submit' name="class_type" value=0>

            <img src='assets/menu/Gunner.png' style="width:100%;"></button></div>                    
        </form>
        <form method="POST" action="multiplayergame.php">
            <div class="howtoplay">
               <input name='classType1' type = 'hidden' value="<?php echo $classType1?>">
				<br>
				<input  name='classType2'type ='hidden' value = "2">
				<br>
                <button type='submit' name="class_type" value=0>

        <img src='assets/menu/Scholar.png' style="width:100%;"></button></div>                    
        </form>
           <div class="P1">Player 2</div>
    </div>
    
    <!--<div class="howtoplay"><a href="howtoplay.php"><img src='assets/menu/How_to_Play_small.png'style="width:58%;"></a></div> -->
    <audio controls autoplay style=" width:200px; opacity:0; background-color: white;">
 			 <source src="audio/titletheme.mp3" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>
</body>
</html>
<script src='js/jquery.min.js'></script>
<script>
	$(document).ready(function(){
		$("body").hide().fadeIn(2000);
	});
</script>
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
<script>
    $(document).ready(function(){
    $(".play").click(function(){
       $.ajax({
            type: "POST",
            url: "game.php",
            data: ({classType1: 0, classType2: 2
                   }), 
            success: function(response){ 
                console.log("The value was passed!");
            },
           error: function () {
            alert("error");
        }
        });
    });
});
</script>