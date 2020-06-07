function addPlayer(){
    
    
	player.anchor.setTo(0.5, 0.5);
	player.scale.setTo(1.5);
	player.alive = true;
    
	player.level = 1;
	player.exp = 0;
	expSet = [100, 200, 300, 400, 500];
	
    switch(getClass()){
        case 0:
            player.health = 150;
            player.maxHealth = 150;
            player.statAttack = 27; //attack damage range from 25 to 30
            player.statDefense = 5;
            break;
        case 1:
            player.health = 95;
            player.maxHealth = 95;
            player.statAttack = 20; //attack damage range from 18 to 22
            player.statDefense = 3;
            break;
        case 2:
            // PARAMETERS NOT FINAL
            player.health = 70;
            player.maxHealth = 70;
            player.statAttack = 11;
            player.statHealing = 8;
            player.statDefense = 1;
            break;
        default: console.log("I somehow got here");
            
    }
    
	//playerHP = 100;
	//playerHPMax = [100, 110, 115, 120, 125];
	
	playerEXP = 0;
	playerEXPNext = 100;
	//player.dmg = player.statAttack;
	player.invincibilityFrames = 300;
    player.invincibilityTime = 0;
	game.physics.enable(player, Phaser.Physics.ARCADE);
	//player.body.setSize(25, 25, 3.8, 4);
	player.body.setSize(24, 28, 4, 3);
}

function playerHandler(){
	var movementSpeed;
    switch(getClass()){
        case 0: movementSpeed = 215; break;
        case 1: movementSpeed = 175; break;
        case 2: movementSpeed = 160; break;
        default: console.log("What am I doing here?");
    }
    
    if(player.alive){
		if (cursors.left.isDown)
		{
			player.body.velocity.x = -movementSpeed;
			//player.body.velocity.y = 0;
			player.play('left');
			facing = 1;
		}
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = movementSpeed;
			//player.body.velocity.y = 0;
			player.play('right');
			facing = 2;
		}else{
			player.body.velocity.x = 0;
		}
		 if (cursors.up.isDown)
		{
			player.body.velocity.y = -movementSpeed;
		//	player.body.velocity.x = 0;
			player.play('up');
			facing = 3;
		}
		else  if (cursors.down.isDown)
		{
			player.body.velocity.y = movementSpeed;
			//player.body.velocity.x = 0;
			player.play('down');
			facing = 4;	
		}else{
			player.body.velocity.y = 0;
		}
		
		if(game.input.keyboard.addKey(Phaser.Keyboard.Z).isDown){
            if (cursors.left.isDown){ 
				player.animations.play('attackleft');
				player.body.velocity.set(0);
				attack();
			}else if(cursors.right.isDown){
				player.animations.play('attackright');
				player.body.velocity.set(0);
				attack();
			}else if(cursors.up.isDown){
				player.animations.play('attackup');
				player.body.velocity.set(0);
				attack();
			}else if(cursors.down.isDown){
				player.animations.play('attackdown');
				player.body.velocity.set(0);
				attack();
			}else{
				player.body.velocity.set(0);
                attack();
			}
		}
      
		
		if(playerEXP >= playerEXPNext){
			levelUp();
		}
   }

   if(!player.alive && ctr == 0){
    
       deathHandler(player);
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
	player.level++;
	player.maxHealth+=5;
	player.heal(10);
	player.statAttack+=2;
	player.statDefense+=1;
	playerEXP = 0;
	playerEXPNext += 12;
    levelupsound.play();
    
    if(getClass() == 2){
        player.statHealing += 5;   
    }
    if(getClass()==2){
        notification = player.name + ' leveled up! Stats: Atk: '+player.statAttack+', Healing: '+player.statHealing+' Def: '+player.statDefense;
    }else{
        notification = player.name + ' has leveled up! Current Stats: Atck: '+player.statAttack+', Def: '+player.statDefense;   
    }
   
	var emitter = game.add.emitter(player.x, player.y, 30);
        emitter.makeParticles('levelParticle');
        emitter.minParticleSpeed.setTo(-100, -100);
        emitter.maxParticleSpeed.setTo(100, 100);
        emitter.gravity = 0;
        emitter.start(true, 800, null, 150);
}

function healing(){
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
