function generateUI(){
    UIplayerName = game.add.text(25, 8, 'Name: '+player.name, { font: '19px Adobe Caslon Pro', fill: 'white' });
	UIplayerLevel = game.add.text(25, 31, 'Level: '+player.level, { font: '19px Adobe Caslon Pro', fill: 'white', fontWeight: 'bold'});
    UIplayerHP = game.add.text(25, 61, 'HP: '+player.health+'/'+player.maxHealth, { font: '14px Adobe Caslon Pro', fill: 'Limegreen', fontWeight: 'bold'});
    UIplayerEXP = game.add.text(570, 425, 'EXP: '+playerEXP+'/'+playerEXPNext, { font: '19px Adobe Caslon Pro', fill: 'yellow' });
    UIplayerPotions = game.add.text(680, 60, healthPotionCtr, {font: '19px Adobe Caslon Pro', fill: 'red'});
    UIScore = game.add.text(460, 425, 'SCORE: '+score, {font: '19px Adobe Caslon Pro', fill: 'white'});
    UIplayerNotif = game.add.text(16, 425, 'aaaa', { font: '17px Adobe Caslon Pro', fill: 'red' });
   
    
    UIplayerName.stroke = '#333';
    UIplayerName.strokeThickness = 3;
    UIplayerLevel.stroke = '#333';
    UIplayerLevel.strokeThickness = 3;
    UIplayerHP.stroke = '#333';
    UIplayerHP.strokeThickness = 3;
    UIplayerEXP.stroke = '#333';
    UIplayerEXP.strokeThickness = 3;
    UIplayerPotions.stroke = '#333';
    UIplayerPotions.strokeThickness = 3;
    UIplayerNotif.stroke = '#333';
    UIplayerNotif.strokeThickness = 3;
    UIScore.stroke = '#333';
    UIScore.strokeThickness = 3;
	UIplayerName.fixedToCamera = true;
	UIplayerLevel.fixedToCamera = true;
    UIplayerHP.fixedToCamera = true;
	UIplayerEXP.fixedToCamera = true;
	UIplayerPotions.fixedToCamera = true;
    
	//UIplayerAttack.fixedtoCamera = true;
	UIplayerNotif.fixedToCamera = true;
    UIScore.fixedToCamera = true;
}

function UIHandler(){
    UIplayerHP.text = 'HP:'+player.health+'/'+player.maxHealth;
	UIplayerEXP.text = 'EXP:'+playerEXP+'/'+playerEXPNext;
	UIplayerLevel.text = 'Level: '+player.level;
	UIplayerPotions.text = healthPotionCtr;
    UIScore.text = 'SCORE: '+score;
	//UIplayerAttack.text = 'Strength: '+player.statAttack;
	UIplayerNotif.text = notification;
}