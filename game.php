<?php
	session_start();
 	if(!isset($_SESSION['id'])){
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
<script src='js/functions2/preloadAssets.js'></script>
<script src='js/functions2/generateMap.js'></script>
<script src='js/functions2/addPlayer.js'></script>
<script src='js/functions2/spawnEnemies.js'></script>
<script src='js/functions2/addWeapon.js'></script>
<script src='js/functions2/generateUI.js'></script>
<script src='js/functions2/addAudio.js'></script>
<script src='js/functions2/healthMeter.js'></script>
<script src='js/functions2/enablePhysicsCollision.js'></script>
<script src='js/functions2/movementHandler.js'></script>
<script>
	
var game = new Phaser.Game(700, 460, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
var map, layer, cursors, player, backgroundo, foregroundo, sword, facing, slime;	

var type;
var nextAttack = 0;
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
var id = <?php echo $_SESSION['id'] ?>;
var classType = <?php echo $_POST['class_type'] ?>;
var music;
var nextEnemyBullet = 0;
var attackSound;
var batSound ;
var fireballSound;
var dragonSound;
var ghostSound;
var goldSound;
var levelSound;
var GameOverTheme;
var bossTheme;
var End;
    

function getClass(){
    switch(classType){
        case 0: return 0;   // Swordsman
        case 1: return 1;   // Gunner
        case 2: return 2;   // Healer
        default: return 0;  // Failsafe
    }
}

switch(getClass()){
    case 0: attackSpeed = 400; break;
    case 1: attackSpeed = 600; break;
    case 2: attackSpeed = 810; break;
}
    
    function preload() {
    // CHARACTER
    switch(getClass()){
        case 0:
            game.load.spritesheet('player', 'assets/spritesheets/chara5.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/sword.png');
            game.load.audio('hitSound', 'audio/contactHit.mp3');
            game.load.audio('hurtSound', 'audio/boyHurt.mp3');
            console.log("I got Knight");
            type = "Knight";
            console.log(type);
            break;
        case 1:
            game.load.spritesheet('player', 'assets/spritesheets/gunnerSprite.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/laser.png');
            game.load.audio('hitSound', 'audio/contactHitLaser.mp3');
            game.load.audio('hurtSound', 'audio/boyHurt.mp3');
            console.log("I got Gunner");
            type = "Gunner";
            break;
        case 2:
            game.load.spritesheet('player', 'assets/spritesheets/healer.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/shine.png');
            game.load.audio('hitSound', 'audio/contactHitSwoosh.mp3');
            game.load.audio('hurtSound', 'audio/girlHurt.mp3');
            console.log("i n3ed h3AlInG");
            type = "Scholar";
    }
    
    preloadAssets();
        
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
    map = game.add.tilemap('map', 16, 16);

    //Fullscreen
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.onDown.add(gofull, this);
    
    map.addTilesetImage('dungeon_sheet', 'tiles');   

    layer = map.createLayer(0);
	layer.setScale(4.5);
    layer.resizeWorld();
    
    map.setCollisionBetween(1, 2000, true, 'layer');
    
	generateBackground();
    
	spawnPotion();
	
	notification = '';
    lavosnamenotif = '';
    
    //player from addPlayer.js
    player = game.add.sprite(700, game.world.height -100, 'player', 1);
    switch(getClass()){
        case 0:
            player.animations.add('left', [9,10,11], 10);
            player.animations.add('right', [18,19,20], 10);
            player.animations.add('up', [27,28,29], 10);
            player.animations.add('down', [0,1,2], 10);
            player.animations.add('attackleft',[15, 16, 17, 9], 10);
            player.animations.add('attackright', [26, 25, 24, 18], 10);
            player.animations.add('attackup', [33, 34, 35, 27], 10);
            player.animations.add('attackdown', [6, 7, 8, 0], 10);
            console.log("Swordsman loaded.");
            break;
        case 1:
            player.animations.add('left', [13, 14, 15, 16], 10);
            player.animations.add('right', [19, 20, 21, 22, 23, 24], 10);
            player.animations.add('up', [7, 8, 9, 10], 10);
            player.animations.add('down', [0, 1, 2, 3, 4], 10);
            player.animations.add('attackleft',[13, 14, 15, 16], 10);
            player.animations.add('attackright', [19, 20, 21, 22, 23, 24], 10);
            player.animations.add('attackup', [7, 8, 9, 10], 10);
            player.animations.add('attackdown', [0, 1, 2, 3, 4], 10);
            console.log("Gunner loaded.");
            break;
        case 2:
            player.animations.add('left', [9, 10, 11], 10);
            player.animations.add('right', [3, 4, 5], 10);
            player.animations.add('up', [0, 1, 2], 10);
            player.animations.add('down', [6, 7, 8], 10);
            player.animations.add('attackleft', [9, 10, 11], 10);
            player.animations.add('attackright', [3, 4, 5], 10);
            player.animations.add('attackup', [0, 1, 2], 10);
            player.animations.add('attackdown', [6, 7, 8], 10);
            break;
        default: console.log("Failed to load animation.");
            
    }
    addPlayer();
    playerHealthMeter = game.add.plugin(Phaser.Plugin.HealthMeter);
            playerHealthMeter.bar(
        player,
        {x: 25, y: 80, width: 100, height: 15, background: "black"}
            );
    
    // The name has to be added here because the function is only Javascript
    // The game goes black screen when there's no name (LOGIN FIRST).
    // In the meantime, uncomment this below and comment out the original one.
   // player.name = "Player";
    player.name = "<?php echo $_SESSION['user'];?>";
    
    //audio from addAudio.js
    addAudio();
    hitSound = game.add.audio('hitSound');
    hurtSound = game.add.audio('hurtSound');
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
    deathsound.volume = 0.7;
    potionsound.volume = 0.5;
    ogredeath.volume = 0.6;
    mummydeath.volume = 0.7;
    batdeath.volume = 0.8;
    pickupsound.volume = 0.5;
    levelupsound.volume = 0.8;
    
	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
	
    //enemies from spawnEnemies.js
    spawnEnemies();
	
	deadGroup = game.add.group();

    //weapon from addWeapon.js
    addWeapon();
    
    cursors = game.input.keyboard.createCursorKeys();
	
    //heal
	healthPotionCtr = 3;
	healing();
	
    //foreground from generateMap.js
	generateForeground();
	
    //spawn boss :3
    spawnBoss();
    addLavosBullet();
    lavosHealthMeter = game.add.plugin(Phaser.Plugin.HealthMeter);
    
    //ui from generateUI.js
    generateUI();
    UIlavosName = game.add.text(230, 15, '', { font: '19px Adobe Caslon Pro', fill: '#ff035b' });
    UIlavosName.stroke = '#333';
    UIlavosName.strokeThickness = 3;
    var potion = game.add.sprite(590, 0, 'potion');
    potion.fixedToCamera = true;
    UIlavosName.fixedToCamera = true;
}

function update() {
	
    //enemy velocity from spawnEnemies.js
    initEnemyMotion();
    
	//player.body.velocity.set(0);
	
    playerHandler();
	orcHandler();
    reptiteHandler();
    goblinHandler();
    if(Phaser.Math.distance(player.x, player.y, lavos.x + 500, lavos.y + 450) <= 700){
        if(bossthemeCtr == 0){
        music.pause();
        bossroar.play();
        bossTheme.play();
        bossTheme.loop = true;
        lavosHealthMeter.bar(
        lavos,
        {x: 250, y: 40, width: 200, height: 15, foreground: "#ff035b", background: "black"}
            );
        bossthemeCtr++;
        }
        lavosFires();
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
    
function orcHandler(orc){
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


function reptiteHandler(reptite){
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



function goblinHandler(goblin){
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
    
function hit2(target, attacker){
	var knockback = 0;
    var damageDealt;
    
    switch(getClass()){
        case 0: knockback = 1500; break;
        case 1: knockback = 800; break;
        case 2: knockback = 450; break;
    }
    target.body.velocity.set(0);
	if(attacker.body.touching.left == true){
		target.body.velocity.x = -knockback;  hitSound.play();
	}else if(attacker.body.touching.right == true){
		target.body.velocity.x = knockback;  hitSound.play();
	}else if(attacker.body.touching.up == true){
		target.body.velocity.y = -knockback;  hitSound.play();
	}else if(attacker.body.touching.down == true){
		target.body.velocity.y = knockback;  hitSound.play();
	}
    
	//attacker.kill();
	 if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(player.statAttack - 2, player.statAttack + 3);
            target.damage(damageDealt);
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
			switch(getClass()){
                case 1: 
                case 2:    
                    attacker.kill(); break;
             }
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }
			
            //this.playSound(target.name);
         notification = player.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            
			//UIplayerHP.text = 'HP:'+player.health+'/'+player.maxHealth;
      }
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

function lavosFires(){
    
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
         window.location.replace("ranking.php");
        game.destroy();
    }, 10000);
}
//Ajax request
function SaveScore (){
    $.ajax({
            type: "post",
            url: "savescore.php",
            data: ({score: score,
                   id: id, type: type
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




