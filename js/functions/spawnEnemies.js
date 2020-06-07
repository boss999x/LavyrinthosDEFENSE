

// The mother of all spawners
function spawnEnemies(){
    orcGroup = game.add.group();
	orcGroup.enableBody = true;
	orcGroup.physicsBodyType = Phaser.Physics.ARCADE;
	orcGroup.setAll('outOfBoundsKill', true);
    orcGroup.setAll('checkWorldBounds', true);
	spawnOrc();
    
    reptiteGroup = game.add.group();
	reptiteGroup.enableBody = true;
	reptiteGroup.physicsBodyType = Phaser.Physics.ARCADE;
	reptiteGroup.setAll('outOfBoundsKill', true);
    reptiteGroup.setAll('checkWorldBounds', true);
	spawnReptite();
    
    goblinGroup = game.add.group();
	goblinGroup.enableBody = true;
	goblinGroup.physicsBodyType = Phaser.Physics.ARCADE;
	goblinGroup.setAll('outOfBoundsKill', true);
    goblinGroup.setAll('checkWorldBounds', true);
	spawnGoblin();
}

function initEnemyMotion(){
    orcGroup.forEachAlive(function(orc){
		orc.body.velocity.set(0);
	});
	reptiteGroup.forEachAlive(function(reptite){
		reptite.body.velocity.set(0);
	});
	goblinGroup.forEachAlive(function(goblin){
		goblin.body.velocity.set(0);
	});
}

function spawnBoss(){
    lavos = game.add.sprite(1762, 110, 'lavos');
    lavos.enableBody = true;
    game.physics.enable(lavos, Phaser.Physics.ARCADE);
    lavos.body.setSize(820, 400, 77, 22);
    lavos.body.moves = false;
    
    lavos.name = 'Lavos, The Devourer of Dreams';
	lavos.dmg = 45; //make the damage range 43 to 48
	lavos.health = 2000;
	lavos.maxHealth = 2000;
	lavos.alive = true;
	lavos.invincibilityFrames = 200;
	lavos.invincibilityTime = 0;
    
    lavos.animations.add('bossIdle', [0, 1, 2, 3], 5, true);
    lavos.animations.play('bossIdle');
}

function spawnOrc(){
	// Variables
    var size = 2.1;
    var hitboxX = 19;
    var hitboxY = 25;
    var hitboxOffsetX = 6.5;
    var hitboxOffsetY = 8;   
    
    orc = orcGroup.create(1786, 5533, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(2914, 5533, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(3384, 4970, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(2925, 4250, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(3250, 4130, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(5434, 3872, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(4548, 4150, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(4890, 2692, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(3845, 2568, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(4755, 1135, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(3150, 3000, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(3150, 1425, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(1060, 5034, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(988, 3880, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(546, 3355, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(1600, 2392, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(1078, 2860, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    orc = orcGroup.create(1100, 1130, 'enemy'); 
    orc.scale.set(size); 
    orc.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
	
	
	orcGroup.forEachAlive(function(orc){
        orc.name = 'Ogre';
        orc.dmg = 35; //make the damage range 33 to 38
        orc.health = 165;
        orc.maxHealth = 165;
        orc.alive = true;
        orc.invincibilityFrames = 200;
        orc.invincibilityTime = 0;
        orc.animations.add('orcleft', [63,64,65], 6);
        orc.animations.add('orcright', [75,76,77], 6);
        orc.animations.add('orcup', [87,88,89], 6);
        orc.animations.add('orcdown', [51,52,53], 6);
        orc.animations.add('orcrightleft', [75,76,77,63,64,65], 4, true);
        orc.animations.play('orcrightleft');
        
        
	});
	//var tween = game.add.tween(orcGroup).to({x: 20}, 1000, Phaser.Easing.Linear.None, true, 0, 100, true);
	//tween.onLoop.add(descend, tween);
}

function spawnReptite(){
	// Variables
    var size = 1.8;
    var hitboxX = 23;
    var hitboxY = 26;
    var hitboxOffsetX = 2;
    var hitboxOffsetY = 1;
    
    reptite = reptiteGroup.create(3853, 5300, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(5026, 5450, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(5242, 5574, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(4534, 5037, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(3122, 4711, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(5450, 4400, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(4366, 3100, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(4450, 2270, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(4507, 1060, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(4840, 1300, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(3550, 3625, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(2727, 3617, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(2340, 4880, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(2130, 5200, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(1410, 3780, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(2790, 2435, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(2285, 2980, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(1900, 1715, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(275, 2790, 'enemy');  
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(1548, 3225, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    reptite = reptiteGroup.create(1045, 1839, 'enemy'); 
    reptite.scale.set(size); 
    reptite.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
	
	reptiteGroup.forEachAlive(function(reptite){
	reptite.name = 'Mummy';
	reptite.dmg = 25; //make the damage range 23 to 28
	reptite.health = 125;
	reptite.maxHealth = 125;
	reptite.alive = true;
	reptite.invincibilityFrames = 150;
	reptite.invincibilityTime = 0;
	reptite.animations.add('reptiteleft', [66,67,68], 8);
    reptite.animations.add('reptiteright', [78,79,80], 8);
    reptite.animations.add('reptiteup', [90,91,92], 8);
    reptite.animations.add('reptitedown', [54,55,56], 8);
	reptite.animations.add('reptiterightleft', [78,79,80,66,67,68], 6, true);
	reptite.animations.play('reptiterightleft');
	});
	//var tween = game.add.tween(reptiteGroup).to({x: 60}, 1000, Phaser.Easing.Linear.None, true, 0, 100, true);
	//tween.onLoop.add(descend, tween);
}

function spawnGoblin(){
    // Variables
    var size = 1.7;
    var hitboxX = 19;
    var hitboxY = 21;
    var hitboxOffsetX = 4;
    var hitboxOffsetY = 4;
	
    goblin = goblinGroup.create(2625, 4507, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(3485, 4430, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2580, 4030, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(3700, 4130, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(4984, 3191, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(4484, 2650, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(3830, 3386, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(1929, 4115, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(1929, 3660, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(3150, 1905, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(1930, 5100, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2564, 5010, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(1454, 4219, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(971, 4525, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2700, 2750, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2594, 3114, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2355, 2130, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(2670, 1840, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(330, 3835, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(615, 2390, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(270, 1460, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
    goblin = goblinGroup.create(1094, 2315, 'goblin'); 
    goblin.scale.set(size); 
    goblin.body.setSize(hitboxX, hitboxY, hitboxOffsetX, hitboxOffsetY);
			
	
	
	goblinGroup.forEachAlive(function(goblin){
	goblin.name = 'Bat';
	goblin.dmg = 15; //make the damage range 13 to 18
	goblin.health = 90;
	goblin.maxHealth = 90;
	goblin.alive = true;
	goblin.invincibilityFrames = 100;
	goblin.invincibilityTime = 0;
	goblin.animations.add('goblinleft', [12,13,14,15], 10);
    goblin.animations.add('goblinright', [4,5,6,7], 10);
    goblin.animations.add('goblinup', [8,9,10,11], 10);
    goblin.animations.add('goblindown', [0,1,2,3], 10);
	goblin.animations.add('goblinupdown', [8,9,10,11,10,0,1,2,3], 4, true);
	goblin.animations.play('goblinupdown');
	});
	//var tween = game.add.tween(goblinGroup).to({y: 65}, 1000, Phaser.Easing.Linear.None, true, 0, 100, true);
	//tween.onLoop.add(descend, tween);
}
