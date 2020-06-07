<?php
include("connector.php");
?>
<html>
<head>
	<title>Game List</title>
	<link rel='stylesheet' href='css/bootstrap.min.css'>
</head>
    
<style>
    .navbar-inverse{
         background-color:#5cb85c;
    }
    .navbar-inverse .navbar-brand {
    color: white;
    }
    .navbar-inverse .navbar-brand:hover,
    .navbar-inverse .navbar-brand:focus {
        color:#dff0d8;
    }
    .navbar-inverse .navbar-nav > li > a {
    color: #dff0d8;
    }
    .navbar-inverse .navbar-nav > li > a:hover,
    .navbar-inverse .navbar-nav > li > a:focus {
    color: white;
    }
    .navbar-inverse .navbar-nav > .active > a, 
    .navbar-inverse .navbar-nav > .active > a:hover, 
    .navbar-inverse .navbar-nav > .active > a:focus {
        color: white;
        background-color:#dff0d8 ;
    }
    .navbar-inverse .navbar-nav > .open > a, 
    .navbar-inverse .navbar-nav > .open > a:hover, 
    .navbar-inverse .navbar-nav > .open > a:focus {
        color: white;
        background-color: #dff0d8;
    }
    .title{
        background-color: #428daf;
        border-radius:0px ;
        font-family: mana;
        color: white;
        
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
    .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
   border: 1px solid #428daf;
   
}
    .table{
      
        background-color: #91b09a;
        margin-top: 100px;
    }
    .highscore{
        color: #428daf;
        position: absolute;
        left:550px;
        
    }
     @font-face{
			font-family: mana;
			src: url(fonts/ManaspaceReg.woff);
		}
    .back{
            position: absolute;
            left: 2%;
            top: 4%;
           
        }
     html { overflow-y: hidden; overflow-x: hidden; }
</style>
<body>
    <div class='bg'></div>
    <div class="back"><a href="home.php"><img src='assets/menu/blue-35803_960_720.png' style="width:16%;"></a></div>
<!--<nav class="navbar navbar-inverse navbar-fixed-top "> 
	<div class="container-fluid">
		<div class="navbar-header"> 
		<button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false"> 
		<span class="sr-only">Toggle navigation</span> 
		<span class="icon-bar"></span> 
		<span class="icon-bar"></span> 
		<span class="icon-bar"></span> </button> 
		<a href="#" class="navbar-brand" style="font-family:'Adobe Caslon Pro'; font-size: 23px;;">Howling Meadows</a> </div> 
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"> 
			<ul class="nav navbar-nav"> 
				<li><a href="home.php">Home</a></li>
			</ul>
			
		</div> 
	</div> 
</nav>-->
<br><br><br>
<div class="highscore">
<h2 class = 'text-center' style="font-family:'mana';" style="position:absolute; top:30px;">High Score Ranking</h2>
    </div>
<div class='container'>    
    <div class = 'row'>
        <div class ='col-sm-10 col-sm-offset-1'>
            <table class = 'table table-bordered'>
                <th class="title">Rank</th>
                <th class="title">Name</th>
                <th class="title">Score</th>
                <th class="title">Class</th>


                <?php
                $result = mysqli_query($sql,
                    "SELECT * FROM player_info ORDER BY Player_score DESC LIMIT 10");
                $names = array();
                //$price = array();
                $score = array();

                if($result){
                    $index = 0;
                    $i = 1;
                    while($row = mysqli_fetch_array($result)){
                        $names[] = $row[1];
                        //$price[] = $row[2];
                        $score[] = $row[3];
                        //$images[]= $row[4];
                        echo "<tr>";
                        echo "<td>".$i++."</td>";
                        echo "<td>".$row[1]."</td>";
                        //echo "<td>".$row[2]."</td>";
                        echo "<td>".$row[3]."</td>";
                        echo "<td>".$row[4]."</td>";
                        /*echo "<td>
                            <button class = 'btn btn-primary' alt='".$index++."'>
                            <span class = 'glyphicon glyphicon-eye-open'></span>
                            </button>&nbsp;";

                        echo "<a href='edit.php?pid=".$row[0]."'><button class= 'btn btn-warning'>
                        <span class = 'glyphicon glyphicon-pencil'></span></button></a>&nbsp;";

                        echo "<a href='delete.php?pid=".$row[0]."' class ='check'><button class= 'btn btn-danger'>
                        <span class = 'glyphicon glyphicon-remove'></span></button></a></td>";
                        echo "</tr>";*/

                    }
                }
                ?>
            </table>
        </div>
    </div>
</div>

<div class ='modal fade myModal' tab-index ='-1' role = 'dialog'
	aria -labelledby ='.myModal' >
	    <div class = 'modal-dialog modal-sm' role = 'document'>
	    	<div class ='modal-content'>
	    		<p class = 'text-center'><strong>Name: </strong><span class ='mod_name' ></span></p>
	    		<p class = 'text-center'><strong>Price: </strong><span class ='mod_price' ></span></p>
	    		<p class = 'text-center'><strong>Description: </strong><span class ='mod_desc' ></span></p>
	    		<p class = 'text-center'>
					<img src = '#'style = 'width: 40%;' class ='img-thumbnail'>
				</p>

	    	</div>
	    </div>
	</div>
  <audio controls autoplay style=" width:200px; opacity:0; background-color: white;">
 			 <source src="audio/titletheme.mp3" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>
</body>
</html>
<script src='js/jquery.min.js'></script>
<script src='js/bootstrap.min.js'></script>
<script>
var names = [<?php echo "'".join("','", $names)."'";?>];
var price = [<?php echo "'".join("','", $price)."'";?>];
var desc = [<?php echo "'".join("','", $score)."'";?>];
var images = [<?php echo "'".join("','", $images)."'";?>];
$(document).ready(function(){
	$(".check").on("click", function(){
		return confirm("Are you Sure?");

	});

	$(".btn-primary").on("click",function(){
		var i = $(this).attr("alt");
		var productName = names[i];
		var productPrice = price[i];
		var productDesc = desc[i];
		var productImage = images[i];
		$(".mod_name").text(productName);
		$(".mod_price").text(productPrice);
		$(".mod_desc").text(productDesc);
		$(".img-thumbnail").attr('src','images/'+productImage);
		$(".modal").modal("show");
	});

});
</script>
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