function generateUI(){
    UIplayerName = game.add.text(25, 8, player1.name, { font: '17px Adobe Caslon Pro', fill: 'white' });
    UIplayerName2 = game.add.text(25, 58, player2.name, { font: '17px Adobe Caslon Pro', fill: 'white' });
	UIplayerLevel = game.add.text(25, 100, 'Level: '+player1.level, { font: '17px Adobe Caslon Pro', fill: 'white', fontWeight: 'bold'});
    UIplayerHP = game.add.text(25, 31, 'HP: '+player1.health+'/'+player1.maxHealth, { font: '14px Adobe Caslon Pro', fill: 'Limegreen', fontWeight: 'bold'});
    UIplayerHP2 = game.add.text(25, 81, 'HP: '+player2.health+'/'+player2.maxHealth, { font: '14px Adobe Caslon Pro', fill: 'Limegreen', fontWeight: 'bold'});
    UIplayerEXP = game.add.text(570, 425, 'EXP: '+playerEXP+'/'+playerEXPNext, { font: '19px Adobe Caslon Pro', fill: 'yellow' });
    UIplayerPotions = game.add.text(680, 60, healthPotionCtr, {font: '19px Adobe Caslon Pro', fill: 'red'});
    UIScore = game.add.text(570, 395, 'SCORE: '+score, {font: '19px Adobe Caslon Pro', fill: 'white'});
    UIplayerNotif = game.add.text(16, 425, 'aaaa', { font: '17px Adobe Caslon Pro', fill: 'red' });
    UIteamname = game.add.text(100,5 ,'Team ' +teamname, { font: '20px Adobe Caslon Pro', fill: 'royalblue', fontWeight:'bold' });
    
    UIplayerName.stroke = '#333';
    UIplayerName.strokeThickness = 3;
    UIplayerName2.stroke = '#333';
    UIplayerName2.strokeThickness = 3;
    UIplayerLevel.stroke = '#333';
    UIplayerLevel.strokeThickness = 3;
    UIplayerHP.stroke = '#333';
    UIplayerHP.strokeThickness = 3;
    UIplayerHP2.stroke = '#333';
    UIplayerHP2.strokeThickness = 3;
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
    UIplayerHP2.fixedToCamera = true;
	UIplayerEXP.fixedToCamera = true;
    UIplayerName2.fixedToCamera = true;
    UIteamname.stroke = 'white';
    UIteamname.strokeThickness = 3;
    UIteamname.fixedToCamera = true;
	UIplayerPotions.fixedToCamera = true;
    
	//UIplayerAttack.fixedtoCamera = true;
	UIplayerNotif.fixedToCamera = true;
    UIScore.fixedToCamera = true;
}

function UIHandler(){
    UIplayerHP.text = 'HP: '+player1.health+'/'+player1.maxHealth;
    UIplayerHP2.text = 'HP: '+player2.health+'/'+player2.maxHealth;
	UIplayerEXP.text = 'EXP: '+playerEXP+'/'+playerEXPNext;
	UIplayerLevel.text = 'Level: '+player1.level;
	UIplayerPotions.text = healthPotionCtr;
    UIScore.text = 'SCORE: '+score;
	//UIplayerAttack.text = 'Strength: '+player.statAttack;
	UIplayerNotif.text = notification;
}