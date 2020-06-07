function addAudio(){
    attackSound = game.add.audio('attackSound');
    attackSound2 = game.add.audio('attackSound2');
    GameOverTheme = game.add.audio('GameOverTheme');
	deathsound = game.add.audio('deathsound');
    bossTheme = game.add.audio('bosstheme');
    End = game.add.audio('End');
    potionsound = game.add.audio('potionsound');
    //BGM
    music = game.add.audio('OST');
    music.loop = true;
    music.volume = 0.8;
    music.play();
}