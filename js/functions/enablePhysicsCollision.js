function enablePhysicsCollision(){
    // PLAYER 1
    game.physics.arcade.collide(player1, orcGroup, hit);
	game.physics.arcade.collide(orcGroup, sword, hit2);
	game.physics.arcade.collide(player1, layer);
	game.physics.arcade.collide(orcGroup, layer);
	game.physics.arcade.collide(orcGroup);
	
	game.physics.arcade.collide(player1, reptiteGroup, hit);
	game.physics.arcade.collide(reptiteGroup, sword, hit2);
	game.physics.arcade.collide(reptiteGroup, layer);
	game.physics.arcade.collide(reptiteGroup);
	
	game.physics.arcade.collide(player1, goblinGroup, hit);
	game.physics.arcade.collide(goblinGroup, sword, hit2);
	game.physics.arcade.collide(goblinGroup, layer);
	game.physics.arcade.collide(goblinGroup);
    
    // PLAYER 2
    game.physics.arcade.collide(player2, orcGroup, playerTwoHit);
	game.physics.arcade.collide(orcGroup, sword2, playerTwoHit2);
	game.physics.arcade.collide(player2, layer);
	game.physics.arcade.collide(orcGroup, layer);
	game.physics.arcade.collide(orcGroup);
	
	game.physics.arcade.collide(player2, reptiteGroup, playerTwoHit);
	game.physics.arcade.collide(reptiteGroup, sword2, playerTwoHit2);
	game.physics.arcade.collide(reptiteGroup, layer);
	game.physics.arcade.collide(reptiteGroup);
	
	game.physics.arcade.collide(player2, goblinGroup, playerTwoHit);
	game.physics.arcade.collide(goblinGroup, sword2, playerTwoHit2);
	game.physics.arcade.collide(goblinGroup, layer);
	game.physics.arcade.collide(goblinGroup);
    
    if(playerOneClass == 2){
        game.physics.arcade.collide(player2, sword, healHit);
    }
    
    if(playerTwoClass == 2){
        game.physics.arcade.collide(player1, sword2, playerTwoHealHit);
    }
    
    game.physics.arcade.collide(player1, lavos, hit);
    game.physics.arcade.collide(player2, lavos, hit);
    
    game.physics.arcade.collide(lavos, sword, hitBoss);
    game.physics.arcade.collide(lavos, sword2, hitBoss);
    
    game.physics.arcade.collide(player1, lavosbullets, hitLavosBullet);
    game.physics.arcade.collide(player2, lavosbullets, hitLavosBullet);
    
    game.physics.arcade.collide(layer, lavos);
    
	
	game.physics.arcade.collide(orcGroup, goblinGroup);
	game.physics.arcade.collide(orcGroup, reptiteGroup);
	game.physics.arcade.collide(reptiteGroup, goblinGroup);
    
    game.physics.arcade.overlap(player1, objectPotions, collectPots);
    game.physics.arcade.overlap(player2, objectPotions, collectPots);
	//game.physics.arcade.overlap(player, door, enterDoor);
}

function healHit(target, healer){
    
    if (game.time.now > target.invincibilityTime) {
        target.invincibilityTime = game.time.now + target.invincibilityFrames;
        target.heal(player1.statHealing);
        tweenTint(target, 0x00FF00, 0xFFFFFF, 500);
        tweenTint(player1, 0x00FF00, 0xFFFFFF, 500);
        healer.kill();
        target.body.velocity.set(0);
            //this.playSound(target.name);
            notification = player1.name + ' healed herself and ' + target.name + ' for ' + player1.statHealing + ' HP!';
    }
}

function playerTwoHealHit(target, healer){
    
    if (game.time.now > target.invincibilityTime) {
        target.invincibilityTime = game.time.now + target.invincibilityFrames;
        target.heal(player2.statHealing);
        tweenTint(target, 0x00FF00, 0xFFFFFF, 500);
        tweenTint(player2, 0x00FF00, 0xFFFFFF, 500);
        target.body.velocity.set(0);
        healer.kill();
        player2.heal(player2.statHealing);
            //this.playSound(target.name);
            notification = player2.name + ' healed herself and ' + player1.name + ' for ' + player2.statHealing + ' HP!';
    }
}

function hit(target, attacker){
	var damageDealt;
    
    target.body.velocity.set(0);
    attacker.body.velocity.set(0);
	if(attacker.body.touching.left == true){
		target.body.velocity.x = -1500; hurtSound.play();
	}else if(attacker.body.touching.right == true){
		target.body.velocity.x = 1500; hurtSound.play();
	}else if(attacker.body.touching.up == true){
		target.body.velocity.y = -1500; hurtSound.play();
	}else if(attacker.body.touching.down == true){
		target.body.velocity.y = 1500; hurtSound.play();
	}
	if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(attacker.dmg, attacker.dmg + 5);
            target.damage(damageDealt - target.statDefense);
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			target.animations.stop();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }else{
            //this.playSound(target.name);
            notification = attacker.name + ' caused ' + (damageDealt - target.statDefense)+ ' damage to ' + target.name + '!';
            
            }
        }
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
            damageDealt = game.rnd.integerInRange(player1.statAttack - 2, player1.statAttack + 3);
            target.damage(damageDealt);
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
			attacker.kill();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }
			
            //this.playSound(target.name);
         notification = player1.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            
			//UIplayerHP.text = 'HP:'+player.health+'/'+player.maxHealth;
      }
}

function playerTwoHit(target, attacker){
	var damageDealt;
    
    target.body.velocity.set(0);
    attacker.body.velocity.set(0);
	if(attacker.body.touching.left == true){
		target.body.velocity.x = -1500; hurtSound2.play();
	}else if(attacker.body.touching.right == true){
		target.body.velocity.x = 1500; hurtSound2.play();
	}else if(attacker.body.touching.up == true){
		target.body.velocity.y = -1500; hurtSound2.play();
	}else if(attacker.body.touching.down == true){
		target.body.velocity.y = 1500; hurtSound2.play();
	}
	if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(attacker.dmg, attacker.dmg + 5);
            target.damage(damageDealt - target.statDefense);
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			target.animations.stop();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }else{
            //this.playSound(target.name);
            notification = attacker.name + ' caused ' + (damageDealt - target.statDefense)+ ' damage to ' + target.name + '!';
            
            }
        }
}

function playerTwoHit2(target, attacker, player){
	var knockback = 0;
    var damageDealt;
    
    switch(getClass()){
        case 0: knockback = 1500; break;
        case 1: knockback = 800; break;
        case 2: knockback = 450; break;
    }
    target.body.velocity.set(0);
	if(attacker.body.touching.left == true){
		target.body.velocity.x = -knockback;  hitSound2.play();
	}else if(attacker.body.touching.right == true){
		target.body.velocity.x = knockback;  hitSound2.play();
	}else if(attacker.body.touching.up == true){
		target.body.velocity.y = -knockback;  hitSound2.play();
	}else if(attacker.body.touching.down == true){
		target.body.velocity.y = knockback;  hitSound2.play();
	}
    
	//attacker.kill();
	 if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(player2.statAttack - 2, player2.statAttack + 3);
            target.damage(damageDealt);
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
			attacker.kill();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }
			
            //this.playSound(target.name);
         notification = player2.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            
			//UIplayerHP.text = 'HP:'+player.health+'/'+player.maxHealth;
      }
}

function hitBoss(target, attacker){
	var damageDealt;
    
    target.body.velocity.set(0);
    if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(player1.statAttack, player1.statAttack + 5);
            target.damage(damageDealt);
            hitSound.play();
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
            attacker.kill();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }else{
            //this.playSound(target.name);
            notification = target.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            
            }
        }
}

function playerTwoHitBoss(target, attacker){
	var damageDealt;
    
    target.body.velocity.set(0);
    if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(player2.statAttack, player2.statAttack + 5);
            target.damage(damageDealt);
            hitSound.play();
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
            attacker.kill();
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }else{
                //this.playSound(target.name);
                notification = player2.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            }
        }
}

function hitLavosBullet(target, attacker){
    var damageDealt;
    
    target.body.velocity.set(0);
    attacker.kill();
	if(attacker.body.touching.left == true){
		target.body.velocity.x = -1500; energyballHit.play(); hurtSound.play();
	}else if(attacker.body.touching.right == true){
		target.body.velocity.x = 1500; energyballHit.play(); hurtSound.play();
	}else if(attacker.body.touching.up == true){
		target.body.velocity.y = -1500; energyballHit.play(); hurtSound.play();
	}else if(attacker.body.touching.down == true){
		target.body.velocity.y = 1500; energyballHit.play(); hurtSound.play();
	}
	if (game.time.now > target.invincibilityTime) {
        target.invincibilityTime = game.time.now + target.invincibilityFrames;
        damageDealt = game.rnd.integerInRange(lavos.dmg, lavos.dmg + 10);
        target.damage(damageDealt - target.statDefense);
        tweenTint(target, 0xff0000, 0xFFFFFF, 500);
        target.animations.stop();
        if (target.health < 0) {
            target.health = 0;
            target.alive = false;
        }else{
            //this.playSound(target.name);
            notification = attacker.name + ' caused ' + (damageDealt - target.statDefense)+ ' damage to ' + target.name + '!';        
        }
    }
}
