<?php
   	session_start();
 	if(!isset($_SESSION['teamname'])){
 		header("location:index.php");
 	}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<script src="js/phaser.min.js"></script>
<script src='js/WeaponPlugin.js'></script>
<script src='js/Bullet.js'></script>
<style>
	.bg{
 	/*position: absolute;*/
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
	body{
		padding: 0px;
		margin-left: 25%;
		margin-top: 5%;
		background-image: url("assets/otherimages/Shovel_Knight_Background_Moonlit_Journey.jpg");
    background-size: cover;
	}
    canvas{
        padding:1%;
        position: absolute;
    }
</style>
</head>
<body>
    <div class="bg">
    </div>
<img style="position:absolute; width:934px; height:515px; margin-left:-6.6%; margin-top:-0.8%;" src="assets/menu/gameboy_player_border_by_daneebound-d9varor.png">
<div class="game">
<script src='js/jquery.min.js'></script>
<script src='js/bootstrap.min.js'></script>
<script src='js/functions/preloadAssets.js'></script>
<script src='js/functions/generateMap.js'></script>
<script src='js/functions/addPlayer.js'></script>
<script src='js/functions/spawnEnemies.js'></script>
<script src='js/functions/addWeapon.js'></script>
<script src='js/functions/generateUI.js'></script>
<script src='js/functions/addAudio.js'></script>
<script src='js/functions/healthMeter.js'></script>
<script src='js/functions/enablePhysicsCollision.js'></script>
<script src='js/functions/movementHandler.js'></script>
<script>
	
var game = new Phaser.Game(700, 460, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
var map, layer, cursors, player, backgroundo, foregroundo, sword, facing1, facing2, slime;	

var type ,type2;
var nextAttack = 0;
var nextAttack2 = 0;
var ctr = 0;
var lavosctr = 0;
var bossthemeCtr = 0;
var UIplayerHP;
var UIplayerEXP;
var UIScore;
var UIGameOver;
var UIlavosName;
var gameover;
var score = 0;
var teamname ='<?php echo $_SESSION['teamname'] ?>';
var music;
var nextEnemyBullet = 0;
var attackSound, attackSound2;
var batSound ;
var fireballSound;
var dragonSound;
var ghostSound;
var goldSound;
var levelSound;
var GameOverTheme;
var bossTheme;
var End;
var playerOneClass = <?php echo $_POST['classType1']; ?>, playerTwoClass = <?php echo $_POST['classType2']; ?>;
var player1, player2;
var attackSpeed, attackSpeed2;
var UIteamname;
    

function getClass(classType){
    switch(classType){
        case 0: return 0;   // Swordsman
        case 1: return 1;   // Gunner
        case 2: return 2;   // Healer
        default: return 0;  // Failsafe
    }
}

switch(playerOneClass){
    case 0: attackSpeed = 400; break;
    case 1: attackSpeed = 600; break;
    case 2: attackSpeed = 810; break;
}
    
switch(playerTwoClass){
    case 0: attackSpeed2 = 400; break;
    case 1: attackSpeed2 = 600; break;
    case 2: attackSpeed2 = 810; break;
}
    
    function preload() {
    // CHARACTER
    preloadPlayerOneClass(playerOneClass);
    preloadPlayerTwoClass(playerTwoClass);
    console.log(type2 + "ako nakuha");
    
    preloadAssets();
    console.log("test"+type);
    console.log("test"+type2);
        
    game.load.audio('bossroar', 'audio/bossroar.mp3');
    game.load.audio('energyball', 'audio/energyball.mp3');
    game.load.audio('energyballHit', 'audio/energyballHit.mp3');
    game.load.audio('ogredeath', 'audio/ogredeath.mp3');
    game.load.audio('mummydeath', 'audio/mummydeath.wav');
    game.load.audio('batdeath', 'audio/batdeath.mp3');
    game.load.audio('pickupsound', 'audio/pickup.mp3');
    game.load.audio('levelupsound', 'audio/levelup.mp3');
    game.load.image('potion', 'assets/menu/potion_small.png');
    game.load.image('lavosbullet', 'assets/spritesheets/lavosbullet.png');
    
}

function create() {
    game.input.gamepad.start();
     pad1 = game.input.gamepad.pad1;

    game.input.onDown.add(dump, this);
    map = game.add.tilemap('map', 16, 16);

    //Fullscreen
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.onDown.add(gofull, this);
    
    map.addTilesetImage('dungeon_sheet', 'tiles');   

    layer = map.createLayer(0);
	layer.setScale(4.5);
    layer.resizeWorld();
    
    //map.setCollisionBetween(1, 2000, true, 'layer');
    
	generateBackground();
    
	spawnPotion();
	
	notification = '';
    lavosnamenotif = '';
    
    //player from addPlayer.js
    player1 = game.add.sprite(700, game.world.height -100, 'player1', 1);
    player2 = game.add.sprite(700, game.world.height -80, 'player2', 1);
    
    addPlayer(player1, playerOneClass);
    addPlayer(player2, playerTwoClass);
    playerHealthMeter = game.add.plugin(Phaser.Plugin.HealthMeter);
            playerHealthMeter.bar(
        player1,
        {x: 120, y: 36, width: 100, height: 12, background: "black"}
            );
    
    playerHealthMeter2 = game.add.plugin(Phaser.Plugin.HealthMeter);
            playerHealthMeter2.bar(
        player2,
        {x: 120, y: 86, width: 100, height: 12, background: "black"}
            );
    
    // The name has to be added here because the function is only Javascript
    // The game goes black screen when there's no name (LOGIN FIRST).
    // In the meantime, uncomment this below and comment out the original one.
    //player1.name = "Player";
    //player2.name = "Player2";
    player1.name = "<?php echo $_SESSION['player2']?>";
    player2.name = "<?php echo $_SESSION['player1']?>";
    
    //audio from addAudio.js
    addAudio();
    hitSound = game.add.audio('hitSound');
    hurtSound = game.add.audio('hurtSound');
    
    hitSound2 = game.add.audio('hitSound2');
    hurtSound2 = game.add.audio('hurtSound2');
    
    bossroar = game.add.audio('bossroar');
    energyball = game.add.audio('energyball');
    energyballHit = game.add.audio('energyballHit');
    ogredeath = game.add.audio('ogredeath'); 
    mummydeath = game.add.audio('mummydeath');
    batdeath = game.add.audio('batdeath');
    pickupsound = game.add.audio('pickupsound');
    levelupsound = game.add.audio('levelupsound');
	GameOverTheme.volume = 0.6;
    bossroar.volume = 0.8;
    energyball.volume = 0.8;
    energyballHit.volume = 0.4;
    End.volume = 0.3;
    hitSound.volume = 0.8;
    hurtSound.volume = 0.6;
    bossTheme.volume = 0.7;
    attackSound.volume = 0.5;
    attackSound2.volume = 0.5;
    deathsound.volume = 0.7;
    potionsound.volume = 0.5;
    ogredeath.volume = 0.6;
    mummydeath.volume = 0.7;
    batdeath.volume = 0.8;
    pickupsound.volume = 0.5;
    levelupsound.volume = 0.8;
    
	game.camera.follow(player1, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
	
    //enemies from spawnEnemies.js
    spawnEnemies();
	
	deadGroup = game.add.group();

    //weapon from addWeapon.js
    addWeapon();
    
    cursors = game.input.keyboard.createCursorKeys();
	
    //heal
	healthPotionCtr = 3;
	healing(player1);
    healing2(player2);
	
    //foreground from generateMap.js
	generateForeground();
	
    //spawn boss :3
    spawnBoss();
    addLavosBullet();
    lavosHealthMeter = game.add.plugin(Phaser.Plugin.HealthMeter);
    
    //ui from generateUI.js
    generateUI();
    UIlavosName = game.add.text(230, 28, '', { font: '19px Adobe Caslon Pro', fill: '#ff035b' });
    UIlavosName.stroke = '#333';
    UIlavosName.strokeThickness = 3;
    var potion = game.add.sprite(590, 0, 'potion');
    potion.fixedToCamera = true;
    UIlavosName.fixedToCamera = true;
}
function dump() {

    console.log(pad1._axes[0]);
    //console.log(pad1._rawPad.axes[0]);

}
function update() {
	
    //enemy velocity from spawnEnemies.js
    initEnemyMotion();
    
	//player.body.velocity.set(0);
	
    playerOneHandler(playerOneClass);
    playerTwoHandler(playerTwoClass);
    
    if(playerEXP >= playerEXPNext){
        levelUp();
    }
    
	orcHandler(player1);
    reptiteHandler(player1);
    goblinHandler(player1);
    
    orcHandler(player2);
    reptiteHandler(player2);
    goblinHandler(player2);
    
    lavosHandler(player1, lavos);
    lavosHandler(player2, lavos);
    
    // Every collision including enemy and player hit are here (enablePhysicsCollision.js)
    enablePhysicsCollision();
	
	//update UI from generateUI.js
    UIHandler();
    UIlavosName.text = lavosnamenotif;
}

function render() {

    //game.debug.spriteCoords(player);
	//game.debug.body(lavos);
    //game.debug.body(layer);
	//game.debug.body(slime);
	//game.debug.body(player);
	//game.debug.body(sword);
	//orcGroup.forEachAlive(renderOrc, this);
	//reptiteGroup.forEachAlive(renderReptite, this);
	//goblinGroup.forEachAlive(renderGoblin, this);
	//sword.forEachAlive(renderSword, this);
    //lavosbullets.forEachAlive(renderLavosBullet, this);
}

// Render functions
function renderOrc(orc){game.debug.body(orc);}
function renderReptite(reptite){game.debug.body(reptite);}
function renderGoblin(goblin){game.debug.body(goblin);}
function renderSword(swordo){game.debug.body(swordo);}
function swordHitbox(swordo){swordo.body.setSize(15, 30, 13, 2);}   
function lavosBulletHitbox(lavosbullet){lavosbullet.body.setSize(100, 100, 14, 14);} 
function renderLavosBullet(lavosbullet){game.debug.body(lavosbullet);}
    
function tweenTint(object, startColor, endColor, time){
	var colorBlend = {step: 0}; 
	var colorTween = game.add.tween(colorBlend).to({step: 50}, time); 
	colorTween.onUpdateCallback(function() {      
	object.tint = Phaser.Color.interpolateColor(startColor, endColor, 50, colorBlend.step); 
	}); 
	object.tint = startColor;  
	colorTween.start();
}

//function descend(){orc.animations.play('orcrightleft'); };    

function deathHandler(target){
	var dead = deadGroup.create(target.x+13, target.y, 'corpse');
	dead.animations.add('idle', [0,1,2,3,4,5], 5);
        if(target == lavos){
            dead.scale.setTo(25);
        }else{
            dead.scale.setTo(1.5);
        }
        dead.animations.play('idle');
        dead.lifespan = 1000;
        target.destroy();

		notification = target.name + ' died.';
    
}
    
function lavosHandler(player, lavos){
    if(Phaser.Math.distance(player.x, player.y, lavos.x + 500, lavos.y + 450) <= 700){
        if(bossthemeCtr == 0){
        music.pause();
        bossroar.play();
        bossTheme.play();
        bossTheme.loop = true;
        lavosHealthMeter.bar(
        lavos,
        {x: 250, y: 55, width: 200, height: 15, foreground: "#ff035b", background: "black"}
            );
        bossthemeCtr++;
        }
        lavosFires(player);
        lavosnamenotif = lavos.name;
    }
    
    if(!lavos.alive && lavosctr == 0){
        playerEXP+= game.rnd.integerInRange(200, 230);
        score+= 100;
        deathHandler(lavos);
        bossroar.play();
        bossTheme.pause();
        End.play();
        youWin();
        lavosctr++;
    }
    
    if(!player.alive && lavosctr == 0){
        deathHandler(player);
        bossTheme.pause();
        GameOverTheme.play();
        lavosctr++;
    }
}
    
function orcHandler(player, orc){
	orcGroup.forEachAlive(function(orc) {
		
		//makes enemy follow player
	   if(Phaser.Math.distance(player.x, player.y, orc.x, orc.y) <= 250){
           game.physics.arcade.moveToObject(orc, player, 100);
	   }
        if (orc.body.velocity.x < 0 && orc.body.velocity.x <= -Math.abs(orc.body.velocity.y)) {
             orc.animations.play('orcleft');

        // Right
        } else if (orc.body.velocity.x > 0 && orc.body.velocity.x >= Math.abs(orc.body.velocity.y)) {
             orc.animations.play('orcright');

        // Up
        } else if (orc.body.velocity.y < 0 && orc.body.velocity.y <= -Math.abs(orc.body.velocity.x)) {
            orc.animations.play('orcup');

        // Down
        } else if (orc.body.velocity.y > 0){
            orc.animations.play('orcdown');
        }
	});
	
	orcGroup.forEachDead(function(orc){
	console.log('hi');
	//enemy gives x amount of exp
    score+= 20;
	playerEXP+= game.rnd.integerInRange(33, 38);
    ogredeath.play();
	deathHandler(orc);
	});	
}

//insert more monsters


function reptiteHandler(player, reptite){
	reptiteGroup.forEachAlive(function(reptite) {
	
	   if(Phaser.Math.distance(player.x, player.y, reptite.x, reptite.y) <= 250){
           game.physics.arcade.moveToObject(reptite, player, 130);
	   }
        if (reptite.body.velocity.x < 0 && reptite.body.velocity.x <= -Math.abs(reptite.body.velocity.y)) {
             reptite.animations.play('reptiteleft');

        // Right
        } else if (reptite.body.velocity.x > 0 && reptite.body.velocity.x >= Math.abs(reptite.body.velocity.y)) {
             reptite.animations.play('reptiteright');

        // Up
        } else if (reptite.body.velocity.y < 0 && reptite.body.velocity.y <= -Math.abs(reptite.body.velocity.x)) {
            reptite.animations.play('reptiteup');

        // Down
        } else if (reptite.body.velocity.y > 0){
            reptite.animations.play('reptitedown');
        }
	});
	
	reptiteGroup.forEachDead(function(reptite){
	console.log('hi');
	//enemy gives x amount of exp
    score+= 15;
	playerEXP+= game.rnd.integerInRange(22, 27);
    mummydeath.play();
	deathHandler(reptite);
	});	
}



function goblinHandler(player, goblin){
	goblinGroup.forEachAlive(function(goblin) {
	
	   if(Phaser.Math.distance(player.x, player.y, goblin.x, goblin.y) <= 250){
           game.physics.arcade.moveToObject(goblin, player, 155);
	   }
        if (goblin.body.velocity.x < 0 && goblin.body.velocity.x <= -Math.abs(goblin.body.velocity.y)) {
             goblin.animations.play('goblinleft');

        // Right
        } else if (goblin.body.velocity.x > 0 && goblin.body.velocity.x >= Math.abs(goblin.body.velocity.y)) {
             goblin.animations.play('goblinright');

        // Up
        } else if (goblin.body.velocity.y < 0 && goblin.body.velocity.y <= -Math.abs(goblin.body.velocity.x)) {
            goblin.animations.play('goblinup');

        // Down
        } else if (goblin.body.velocity.y > 0){
            goblin.animations.play('goblindown');
        }
	});
	
	goblinGroup.forEachDead(function(goblin){
	console.log('hi');
	//enemy gives x amount of exp
	playerEXP+= game.rnd.integerInRange(13, 18);
    //score for each enemy killed
    score+=12;
    batdeath.play();
	deathHandler(goblin);
	});	
}

    
function addLavosBullet(){
    lavosbullets = game.add.group();
    lavosbullets.enableBody = true;
    lavosbullets.physicsBodyType = Phaser.Physics.ARCADE;
	
    lavosbullets.createMultiple(100, 'lavosbullet');
    lavosbullets.setAll('anchor.x', 0.5);
    lavosbullets.setAll('anchor.y', 0.6);
	lavosbullets.setAll('checkWorldBounds', true);
    lavosbullets.setAll('outOfBoundsKill', true);
	lavosbullets.forEach(lavosBulletHitbox);
}

function lavosFires(player){
    
   if(lavos.alive){
        if(game.time.now > nextEnemyBullet && lavosbullets.countDead() > 0){
            nextEnemyBullet = game.time.now + 2000;
            lavosbullet = lavosbullets.getFirstDead();
            lavosbullet.reset(lavos.x + 500, lavos.y + 450); 
            lavosbullet.lifespan = 5000;
            game.physics.arcade.moveToObject(lavosbullet, player, 125);  
            energyball.play();
        }
   }
}

function youWin(){
    SaveScore();
    var winnie = game.add.sprite(90, 120, 'Win');
    
    winnie.fixedToCamera = true;
    setTimeout(function(){
         window.location.replace("multiranking.php");
        game.destroy();
    }, 10000);
}
//Ajax request
function SaveScore (){
    $.ajax({
            type: "post",
            url: "multisavescore.php",
            data: ({score: score,
                   teamname: teamname, type: type, type2: type2
                   }), 
            success: function(response){ 
                console.log("The value was passed!");
            }
        });
}
    function gofull(){
		if(game.scale.isFullScreen){
			game.stop.stopFullScreen();
		}else{
			game.scale.startFullScreen(false);
		}
	}    
</script>
    </div>
</body>
</html>




