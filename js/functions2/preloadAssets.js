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
    
    switch(getClass()){
        case 0: game.load.audio('attackSound', 'audio/sword_swing.mp3'); break;
        case 1: game.load.audio('attackSound', 'audio/falcolaser.mp3'); break;
        case 2: game.load.audio('attackSound', 'audio/Zelda66.mp3'); break;
     }
    
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