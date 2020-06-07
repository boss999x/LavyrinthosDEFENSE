function preloadAssets(){    
    // TILEMAP
    game.load.tilemap('map', 'lavy-tilemap/lavyrinthos_Collision.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tiles', 'assets/tilesheets/dungeon_sheet.png');
	/*
    game.load.image('topground', 'lavy-tilemap/topground.png');
	game.load.image('highground', 'lavy-tilemap/highground.png');
	game.load.image('midground', 'lavy-tilemap/midground.png');
	game.load.image('lowerground', 'lavy-tilemap/lowerground.png');
	game.load.image('lowestground', 'lavy-tilemap/lowestground.png');
    */
    
    game.load.image('background', 'lavy-tilemap/background.png');
    game.load.image('foreground', 'lavy-tilemap/foreground.png');
    //game.load.spritesheet('player', 'assets/spritesheets/chara5.png', 32, 32);
   // game.load.image('slash', 'assets/spritesheets/sword.png');
	
    // ENEMIES
    game.load.spritesheet('slime', 'img/orc32.png', 32, 32);
	game.load.spritesheet('enemy', 'assets/spritesheets/enemySpritesheet.png', 32, 32);
	game.load.spritesheet('goblin', 'assets/spritesheets/bat.png', 32, 32);
    game.load.spritesheet('lavos', 'assets/spritesheets/Lavos.png', 974, 444);
	game.load.spritesheet('corpse', 'img/bloodsplatter1.png', 32, 32);
    
	// MISC
    game.load.image('levelParticle', 'img/levelParticle1.png');
	game.load.image('firstaid', 'img/assets/firstaid.png');
	game.load.image('door', 'img/assets/browndoor.png');
    // UI
    game.load.image('button1', 'img/GUI Button PSD RETURN.png');
    game.load.image('button2', 'img/GUI Button PSD SignOut.png');
    game.load.image('gameover','assets/menu/Gameover.png');
    game.load.image('Win','assets/menu/win.png');
    // AUDIO
    game.load.audio('OST', 'audio/tamtarahard.mp3');
    
    preloadAttackSoundAudio();
    
    game.load.audio('GameOverTheme', 'audio/Final Fantasy IX - Game Over.mp3');
    game.load.audio('End', 'audio/ff7victory.mp3');
    game.load.audio('bosstheme', 'audio/bosstheme.mp3');
    game.load.audio('potionsound', 'audio/potionsound.mp3');
	switch(getClass()){
        case 0:
        case 1:
            game.load.audio('deathsound', 'audio/foxdeath.wav'); break;
        case 2:
            game.load.audio('deathsound', 'audio/shiekdeath.mp3');
    }
}

function preloadAttackSoundAudio(){
    switch(playerOneClass){
        case 0: game.load.audio('attackSound', 'audio/sword_swing.mp3'); game.load.audio('deathsound', 'audio/foxdeath.wav'); break;
        case 1: game.load.audio('attackSound', 'audio/falcolaser.mp3'); game.load.audio('deathsound', 'audio/foxdeath.wav'); break;
        case 2: game.load.audio('attackSound', 'audio/Zelda66.mp3');  game.load.audio('deathsound', 'audio/shiekdeath.mp3'); break;
             break;
     }
    
    switch(playerTwoClass){
        case 0: game.load.audio('attackSound2', 'audio/sword_swing.mp3'); game.load.audio('deathsound2', 'audio/foxdeath.wav'); break;
        case 1: game.load.audio('attackSound2', 'audio/falcolaser.mp3'); game.load.audio('deathsound2', 'audio/foxdeath.wav'); break;
        case 2: game.load.audio('attackSound2', 'audio/Zelda66.mp3'); game.load.audio('deathsound2', 'audio/shiekdeath.mp3');break;
            
     }
}

function preloadPlayerOneClass(playerClass){
    switch(playerClass){
        case 0:
            game.load.spritesheet('player1', 'assets/spritesheets/chara5.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/sword.png');
            game.load.audio('hitSound', 'audio/contactHit.mp3');
            game.load.audio('hurtSound', 'audio/boyHurt.mp3');
            console.log("I got Knight");
            type = "Knight";
            console.log(type);
            break;
        case 1:
            game.load.spritesheet('player1', 'assets/spritesheets/gunnerSprite.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/laser.png');
            game.load.audio('hitSound', 'audio/contactHitLaser.mp3');
            game.load.audio('hurtSound', 'audio/boyHurt.mp3');
            console.log("I got Gunner");
            type = "Gunner";
            break;
        case 2:
            game.load.spritesheet('player1', 'assets/spritesheets/healer.png', 32, 32);
            game.load.image('slash', 'assets/spritesheets/shine.png');
            game.load.audio('hitSound', 'audio/contactHitSwoosh.mp3');
            game.load.audio('hurtSound', 'audio/girlHurt.mp3');
            console.log("i n3ed h3AlInG");
            type = "Scholar";
    }
}

function preloadPlayerTwoClass(playerClass){
    switch(playerClass){
        case 0:
            game.load.spritesheet('player2', 'assets/spritesheets/chara5.png', 32, 32);
            game.load.image('slash2', 'assets/spritesheets/sword.png');
            game.load.audio('hitSound2', 'audio/contactHit.mp3');
            game.load.audio('hurtSound2', 'audio/boyHurt.mp3');
            console.log("I got Knight");
            type2 = "Knight";
            console.log(type);
            break;
        case 1:
            game.load.spritesheet('player2', 'assets/spritesheets/gunnerSprite.png', 32, 32);
            game.load.image('slash2', 'assets/spritesheets/laser.png');
            game.load.audio('hitSound2', 'audio/contactHitLaser.mp3');
            game.load.audio('hurtSound2', 'audio/boyHurt.mp3');
            console.log("I got Gunner");
            type2 = "Gunner";
            break;
        case 2:
            game.load.spritesheet('player2', 'assets/spritesheets/healer.png', 32, 32);
            game.load.image('slash2', 'assets/spritesheets/shine.png');
            game.load.audio('hitSound2', 'audio/contactHitSwoosh.mp3');
            game.load.audio('hurtSound2', 'audio/girlHurt.mp3');
            console.log("i n3ed h3AlInG");
            type2 = "Scholar";
    }
}