function enablePhysicsCollision(){
    game.physics.arcade.collide(player, orcGroup, hit);
	game.physics.arcade.collide(orcGroup, sword, hit2);
	game.physics.arcade.collide(player, layer);
	game.physics.arcade.collide(orcGroup, layer);
	game.physics.arcade.collide(orcGroup);
	
	game.physics.arcade.collide(player, reptiteGroup, hit);
	game.physics.arcade.collide(reptiteGroup, sword, hit2);
	game.physics.arcade.collide(reptiteGroup, layer);
	game.physics.arcade.collide(reptiteGroup);
	
	game.physics.arcade.collide(player, goblinGroup, hit);
	game.physics.arcade.collide(goblinGroup, sword, hit2);
	game.physics.arcade.collide(goblinGroup, layer);
	game.physics.arcade.collide(goblinGroup);
    
    if(getClass() == 2){
        game.physics.arcade.collide(player, sword, healHit);
    }
    
    game.physics.arcade.collide(player, lavos, hit);
    game.physics.arcade.collide(lavos, sword, hitBoss);
    game.physics.arcade.collide(player, lavosbullets, hitLavosBullet);
    game.physics.arcade.collide(layer, lavos);
    
	
	game.physics.arcade.collide(orcGroup, goblinGroup);
	game.physics.arcade.collide(orcGroup, reptiteGroup);
	game.physics.arcade.collide(reptiteGroup, goblinGroup);
    
    game.physics.arcade.overlap(player, objectPotions, collectPots);
	//game.physics.arcade.overlap(player, door, enterDoor);
}

function healHit(target, healer){
    
    if (game.time.now > target.invincibilityTime) {
        target.invincibilityTime = game.time.now + target.invincibilityFrames;
        target.heal(player.statHealing);
        tweenTint(target, 0x00FF00, 0xFFFFFF, 500);
        
            //this.playSound(target.name);
            notification = player.name + ' healed herself for ' + player.statHealing + ' HP!';
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

function hitBoss(target, attacker){
	var damageDealt;
    
    target.body.velocity.set(0);
    if (game.time.now > target.invincibilityTime) {
            target.invincibilityTime = game.time.now + target.invincibilityFrames;
            damageDealt = game.rnd.integerInRange(player.statAttack, player.statAttack + 5);
            target.damage(damageDealt);
            hitSound.play();
			tweenTint(target, 0xff0000, 0xFFFFFF, 500);
			//target.animations.stop();
            switch(getClass()){
                case 0:
                case 1: attacker.kill(); break;
             }
            if (target.health < 0) {
                target.health = 0;
				target.alive = false;
            }else{
            //this.playSound(target.name);
            notification = player.name + ' caused ' + damageDealt + ' damage to ' + target.name + '!';
            
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
