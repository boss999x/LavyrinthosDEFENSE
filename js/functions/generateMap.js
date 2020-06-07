function generateBackground(){
    // background
    /*
    lowestground = game.add.sprite(0, 0, 'lowestground');
	lowerground = game.add.sprite(0, 0, 'lowerground');
	midground = game.add.sprite(0, 0, 'midground');
	
    lowestground.scale.setTo(1.5);
	lowerground.scale.setTo(1.5);
	midground.scale.setTo(1.5);
    */
    
    background = game.add.sprite(0, 0, 'background');
    background.scale.setTo(1.5);
}

function generateForeground(){
    // foreground
    /*
    highground = game.add.sprite(0, 0, 'highground');
	topground =  game.add.sprite(0, 0, 'topground');
	
    highground.scale.setTo(1.5);
	topground.scale.setTo(1.5);
    */
    
    foreground = game.add.sprite(0, 0, 'foreground');
    foreground.scale.setTo(1.5);
}


function spawnPotion(){
	objectPotions = game.add.group();
	objectPotions.enableBody = true;
	objectPotions.physicsBodyType = Phaser.Physics.ARCADE;
	
	for(var i = 0; i < 6; i++){
		if(i == 0){pots = objectPotions.create(5490, 5457, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)}
		else if(i == 1){pots = objectPotions.create(5016, 1077, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)}
        else if(i == 2){pots = objectPotions.create(3108, 1364, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)}
         else if(i == 3){pots = objectPotions.create(255, 1364, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)}
         else if(i == 4){pots = objectPotions.create(2120, 827, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)}
         else if(i == 5){pots = objectPotions.create(1900, 5200, 'firstaid'); pots.scale.set(1); pots.body.setSize(19, 19, 6.5, 8.5)};
	}
};

function collectPots(collector, pots){
	healthPotionCtr+=2;
    pickupsound.play();
	pots.destroy();
	notification = collector.name + ' picked up 2 potions.';
};