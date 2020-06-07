function addWeapon(){
    sword = game.add.group();
    sword.enableBody = true;
    sword.physicsBodyType = Phaser.Physics.ARCADE;
	
    var anchorX = 0.5;
    var anchorY = 0.6;
    
    sword.createMultiple(500, 'slash');
    sword.setAll('anchor.x', anchorX);
    sword.setAll('anchor.y', anchorY);
	sword.setAll('checkWorldBounds', true);
    sword.setAll('outOfBoundsKill', true);
	sword.forEach(swordHitbox);
    
    sword2 = game.add.group();
    sword2.enableBody = true;
    sword2.physicsBodyType = Phaser.Physics.ARCADE;
	
    var anchorX = 0.5;
    var anchorY = 0.6;
    
    sword2.createMultiple(500, 'slash2');
    sword2.setAll('anchor.x', anchorX);
    sword2.setAll('anchor.y', anchorY);
	sword2.setAll('checkWorldBounds', true);
    sword2.setAll('outOfBoundsKill', true);
	sword2.forEach(swordHitbox);
}

function attack(player){
    var projectileLifespan = 200;
    var projectileSpeed = 200;
    var projectileScale = [1.5, 2];
    
    
    switch(playerOneClass){
        case 0: projectileLifespan = 200; projectileSpeed = 200; rotation = [110, 6, 11, 20]; break;
        case 1: projectileLifespan = 400; projectileSpeed = 500; rotation = [0, 0, 11, 11]; break;
        case 2: projectileLifespan = 390; projectileSpeed = 300; rotation = [0, 0, 11, 11]; break;
        default: console.log("PEW PEWP PEW ELMIMINATED!");
    }
    
    if (game.time.now > nextAttack && sword.countDead() > 0){
        nextAttack = game.time.now + attackSpeed; 
		attackSound.play();
        var swordo = sword.getFirstDead();
        //swordo.endPointX = game.input.x;
       //	 swordo.endPointY = game.input.y; 
        swordo.reset(player.x, player.y);
        swordo.lifespan = projectileLifespan;
		
        switch(playerOneClass){
            case 2: projectileScale = [1, 1];        
        }
        
        swordo.scale.setTo(projectileScale[0], projectileScale[1]);
        
        //game.physics.arcade.moveToPointer(swordo, 200);
        switch(facing1){
            //left
            case 1: player.play('attackleft'); swordo.body.velocity.x = -projectileSpeed;  swordo.rotation = rotation[0];swordo.body.setSize(11, 16, 7, 13); break;
            //right
            case 2:  player.play('attackright');swordo.body.velocity.x = projectileSpeed; swordo.rotation =  rotation[1]; 
			swordo.body.setSize(9, 17, 14, 9); break;
            //up
            case 3:   player.play('attackup');swordo.body.velocity.y = -projectileSpeed; swordo.rotation =  rotation[2]; 
			swordo.body.setSize(20, 9, 5, 13); break; 
            //down
            case 4:  player.play('attackdown'); swordo.body.velocity.y = projectileSpeed; swordo.rotation =  rotation[3]; swordo.body.setSize(20, 8, 7, 16); break; 
        }
   }
}

function playerTwoAttack(player){
    var projectileLifespan = 200;
    var projectileSpeed = 200;
    var projectileScale = [1.5, 2];
    
    
    switch(playerTwoClass){
        case 0: projectileLifespan = 200; projectileSpeed = 200; rotation = [110, 6, 11, 20]; break;
        case 1: projectileLifespan = 400; projectileSpeed = 500; rotation = [0, 0, 11, 11]; break;
        case 2: projectileLifespan = 390; projectileSpeed = 300; rotation = [0, 0, 11, 11]; break;
        default: console.log("PEW PEWP PEW ELMIMINATED!");
    }
    
    if (game.time.now > nextAttack2 && sword.countDead() > 0){
        nextAttack2 = game.time.now + attackSpeed2; 
		attackSound2.play();
        var swordo = sword2.getFirstDead();
        //swordo.endPointX = game.input.x;
       //	 swordo.endPointY = game.input.y; 
        swordo.reset(player2.x, player2.y);
        swordo.lifespan = projectileLifespan;
		
        switch(playerTwoClass){
            case 2: projectileScale = [1, 1];        
        }
        
        swordo.scale.setTo(projectileScale[0], projectileScale[1]);
        
        //game.physics.arcade.moveToPointer(swordo, 200);
        switch(facing2){
            //left
            case 1: player.play('attackleft'); swordo.body.velocity.x = -projectileSpeed;  swordo.rotation = rotation[0];swordo.body.setSize(11, 16, 7, 13); break;
            //right
            case 2:  player.play('attackright'); swordo.body.velocity.x = projectileSpeed; swordo.rotation =  rotation[1]; 
			swordo.body.setSize(9, 17, 14, 9); break;
            //up
            case 3:   player.play('attackup'); swordo.body.velocity.y = -projectileSpeed; swordo.rotation =  rotation[2]; 
			swordo.body.setSize(20, 9, 5, 13); break; 
            //down
            case 4:  player.play('attackdown'); swordo.body.velocity.y = projectileSpeed; swordo.rotation =  rotation[3]; swordo.body.setSize(20, 8, 7, 16); break; 
        }
   }
}