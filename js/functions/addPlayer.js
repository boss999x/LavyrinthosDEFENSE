function addPlayer(player, playerClass){
    
    
	player.anchor.setTo(0.5, 0.5);
	player.scale.setTo(1.5);
	player.alive = true;
    
	player.level = 1;
	player.exp = 0;
	expSet = [100, 200, 300, 400, 500];
	
    switch(playerClass){
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
    
    switch(playerClass){
        case 0:
            player.health = 150;
            player.maxHealth = 150;
            player.statAttack = 27; //attack damage range from 25 to 30
            player.statDefense = 5;
            player.invincibilityFrames = 300;
            player.invincibilityTime = 0;
            break;
        case 1:
            player.health = 95;
            player.maxHealth = 95;
            player.statAttack = 20; //attack damage range from 18 to 22
            player.statDefense = 3;
            player.invincibilityFrames = 300;
            player.invincibilityTime = 0;
            break;
        case 2:
            // PARAMETERS NOT FINAL
            player.health = 70;
            player.maxHealth = 70;
            player.statAttack = 11;
            player.statHealing = 8;
            player.statDefense = 1;
            player.invincibilityFrames = 300;
            player.invincibilityTime = 0;
            break;
        default: console.log("I somehow got here");
            
    }
    
	//playerHP = 100;
	//playerHPMax = [100, 110, 115, 120, 125];
	
	playerEXP = 0;
	playerEXPNext = 100;
	//player.dmg = player.statAttack;
    
	game.physics.enable(player, Phaser.Physics.ARCADE);
	//player.body.setSize(25, 25, 3.8, 4);
	player.body.setSize(24, 28, 4, 3);
}

function playerOneHandler(playerClass){
	var movementSpeed;
    switch(playerClass){
        case 0: movementSpeed = 215; break;
        case 1: movementSpeed = 175; break;
        case 2: movementSpeed = 160; break;
        default: console.log("What am I doing here?");
    }
    
    if(player1.alive){
		if (cursors.left.isDown)
		{
			player1.body.velocity.x = -movementSpeed;
			//player.body.velocity.y = 0;
			player1.play('left');
			facing1 = 1;
		}
		else if (cursors.right.isDown)
		{
			player1.body.velocity.x = movementSpeed;
			//player.body.velocity.y = 0;
			player1.play('right');
			facing1 = 2;
		}else{
			player1.body.velocity.x = 0;
		}
		 if (cursors.up.isDown)
		{
			player1.body.velocity.y = -movementSpeed;
		//	player.body.velocity.x = 0;
			player1.play('up');
			facing1 = 3;
		}
		else  if (cursors.down.isDown)
		{
			player1.body.velocity.y = movementSpeed;
			//player.body.velocity.x = 0;
			player1.play('down');
			facing1 = 4;	
		}else{
			player1.body.velocity.y = 0;
		}
		
		if(game.input.keyboard.addKey(Phaser.Keyboard.Z).isDown){
            if (cursors.left.isDown){ 
				player1.animations.play('attackleft');
				player1.body.velocity.set(0);
				attack(player1);
			}else if(cursors.right.isDown){
				player1.animations.play('attackright');
				player1.body.velocity.set(0);
				attack(player1);
			}else if(cursors.up.isDown){
				player1.animations.play('attackup');
				player1.body.velocity.set(0);
				attack(player1);
			}else if(cursors.down.isDown){
				player1.animations.play('attackdown');
				player1.body.velocity.set(0);
				attack(player1);
			}else{
				player1.body.velocity.set(0);
                attack(player1);
			}
		}
   }

   if(!player1.alive && ctr == 0){
    
       player2.alive = false;
       deathHandler(player1);
       deathHandler(player2);
       music.pause();
	   deathsound.play();
       GameOverTheme.play();
   
    var button = game.add.button(180, 240, 'button1', function(){
           window.location.replace("loginteam.php");
       });
    var button1 = game.add.button(360, 240, 'button2', function(){
           window.location.replace("logout.php");
       });
       var overgame = game.add.sprite(90, 120, 'gameover');
       
      // button.scale.setTo(0.5, 0.5);
      button.scale.setTo(0.5, 0.5);
        button1.scale.setTo(0.5, 0.5);
      button.fixedToCamera = true;
       button1.fixedToCamera = true;
       overgame.fixedToCamera = true;
    
       //call game over screen
		ctr++;
       // alert('game over lol');
		//add game over thing here
   }
};

function playerTwoHandler(playerClass){
	var movementSpeed;
    switch(playerClass){
        case 0: movementSpeed = 215; break;
        case 1: movementSpeed = 175; break;
        case 2: movementSpeed = 160; break;
        default: console.log("What am I doing here?");
    }
    
    if(player2.alive){
		if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
		{
			player2.body.velocity.x = -movementSpeed;
			//player.body.velocity.y = 0;
			player2.play('left');
			facing2 = 1;
		}
		else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
		{
			player2.body.velocity.x = movementSpeed;
			//player.body.velocity.y = 0;
			player2.play('right');
			facing2 = 2;
		}else{
			player2.body.velocity.x = 0;
		}
		 if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
		{
			player2.body.velocity.y = -movementSpeed;
		//	player.body.velocity.x = 0;
			player2.play('up');
			facing2 = 3;
		}
		else  if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
		{
			player2.body.velocity.y = movementSpeed;
			//player.body.velocity.x = 0;
			player2.play('down');
			facing2 = 4;	
		}else{
			player2.body.velocity.y = 0;
		}
		
		if(pad1.isDown(Phaser.Gamepad.XBOX360_A)){
            if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT)|| pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){ 
				player2.animations.play('attackleft');
				player2.body.velocity.set(0);
				playerTwoAttack(player2);
			}else if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
				player2.animations.play('attackright');
				player2.body.velocity.set(0);
				playerTwoAttack(player2);
			}else if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1){
				player2.animations.play('attackup');
				player2.body.velocity.set(0);
				playerTwoAttack(player2);
			}else if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1){
				player2.animations.play('attackdown');
				player2.body.velocity.set(0);
				playerTwoAttack(player2);
			}else{
				player2.body.velocity.set(0);
                playerTwoAttack(player2);
			}
		}
   }

   if(!player2.alive && ctr == 0){
    
       player1.alive = false;
       deathHandler(player1);
       deathHandler(player2);
       music.pause();
	   deathsound.play();
       GameOverTheme.play();
   
    var button = game.add.button(180, 240, 'button1', function(){
           window.location.replace("home.php");
       });
    var button1 = game.add.button(360, 240, 'button2', function(){
           window.location.replace("logout.php");
       });
       var overgame = game.add.sprite(90, 120, 'gameover');
       
      // button.scale.setTo(0.5, 0.5);
      button.scale.setTo(0.5, 0.5);
        button1.scale.setTo(0.5, 0.5);
      button.fixedToCamera = true;
       button1.fixedToCamera = true;
       overgame.fixedToCamera = true;
    
       //call game over screen
		ctr++;
       // alert('game over lol');
		//add game over thing here
   }
};

function levelUp(){
    player1.level++;
    player2.level++;
	player1.maxHealth+=5;
    player2.maxHealth+=5;
	player1.heal(10);
    player2.heal(10);
	player1.statAttack+=2;
    player2.statAttack+=2;
	player1.statDefense+=1;
    player2.statDefense+=1;
	playerEXP = 0;
	playerEXPNext += 12;
    levelupsound.play();
    
    if(playerOneClass == 2){
        player1.statHealing += 5;   
    }else if(playerTwoClass == 2){
        player2.statHealing += 5;
    }
    
    notification = 'The team has leveled up! Increased: Atk + 2, Def + 1, Health + 10';   
    
   
	var emitter = game.add.emitter(player1.x, player1.y, 30);
        emitter.makeParticles('levelParticle');
        emitter.minParticleSpeed.setTo(-100, -100);
        emitter.maxParticleSpeed.setTo(100, 100);
        emitter.gravity = 0;
        emitter.start(true, 800, null, 150);
    
    var emitter = game.add.emitter(player2.x, player2.y, 30);
        emitter.makeParticles('levelParticle');
        emitter.minParticleSpeed.setTo(-100, -100);
        emitter.maxParticleSpeed.setTo(100, 100);
        emitter.gravity = 0;
        emitter.start(true, 800, null, 150);
}

function healing(player){
	game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(function(){
		if(healthPotionCtr == 0){
			notification = 'No more potions. Cannot heal.';
		}else if(healthPotionCtr > 0){
			player.heal(40);
            tweenTint(player, 0x00FF00, 0xFFFFFF, 500);
            potionsound.play();
			healthPotionCtr-= 1;
            score-=8;
			notification = player.name + ' consumed a potion and regained 40 health.';
		}
	});	
}
function healing2(player){
	game.input.keyboard.addKey(Phaser.Keyboard.V).onDown.add(function(){
		if(healthPotionCtr == 0){
			notification = 'No more potions. Cannot heal.';
		}else if(healthPotionCtr > 0){
			player.heal(40);
            tweenTint(player, 0x00FF00, 0xFFFFFF, 500);
            potionsound.play();
			healthPotionCtr-= 1;
            score-=8;
			notification = player.name + ' consumed a potion and regained 40 health.';
		}
	});	
}
