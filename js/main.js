//GLOBAL VARS
//Declares the global variables to be used in any of the games functions.
var res;
var enemyDmg;
var playerDmg;
var enemyHp;
var playerHp;
var level;
var newEnemyHp;
var newPlayerHp;

//MOB/CHAMP OBJECTS
function Mob(mname, mhp, mdmg){
	this.mobName = mname;
	this.mobHp = mhp;
	this.mobDmg = mdmg;
	this.makeMob = function(){
		return this.mobName;
		return this.mobHp;
		return this.mobDmg;
	}
}

var mob1 = new Mob('Fetidling', 10, [0, 1, 2, 3]);
var mob2 = new Mob('Smokeling', 20, [0, 3, 4, 5]);
var mob3 = new Mob('Toxincat', 30, [0, 5, 6, 7]);
var mob4 = new Mob('Cinderman', 40, [0, 7, 8, 9]);
var mob5 = new Mob('Cavetooth', 50, [0, 9, 10, 11]);
var mob6 = new Mob('Vexbrute', 60, [0, 11, 12, 13]);
var mob7 = new Mob('Plaguebrood', 70, [0, 13, 14, 15]);
var mob8 = new Mob('Warpscreamer', 80, [0, 15, 16, 17]);
var mob9 = new Mob('Manticore', 90, [0, 17, 18, 19]);
var mob10 = new Mob('Argoth', 100, [0, 19, 20, 21]);

var champ1 = new Mob('', 10, [0, 1, 2, 3]);
var champ2 = new Mob('', 20, [0, 3, 4, 5]);
var champ3 = new Mob('', 30, [0, 5, 6, 7]);
var champ4 = new Mob('', 40, [0, 7, 8, 9]);
var champ5 = new Mob('', 50, [0, 9, 10, 11]);
var champ6 = new Mob('', 60, [0, 11, 12, 13]);
var champ7 = new Mob('', 70, [0, 13, 14, 15]);
var champ8 = new Mob('', 80, [0, 15, 16, 17]);
var champ9 = new Mob('', 90, [0, 17, 18, 19]);
var champ10 = new Mob('', 100, [0, 19, 20, 21]);

//GAME START
//go() sets the value of variable 'level' to 0, then executes addLevel() to change the value of variable 'level' from 0 to 1, declaring the enemy and player attributes for the player/enemy attack functions.
//go() is both the initializer and reset function of the game.
function go(){
	if (level = 0);
	addLevel();
}

//GAME ENGINE
//playerAttack() determines the value array for player damage and executes the random value against the variable enemyHp based on the declared level.
//It displays the 'combat text' indicating to the user the amount of damage that had been done.
//It executes the enemyDead() function to check if the value of variable enemyHp is above zero.
//It executes the enemyAttack() function.
function playerAttack(){
	if (level = 1){
		var enemyHp = mob1.mobHp;
		var playerDmg = champ1.mobDmg[Math.floor(Math.random() * champ1.mobDmg.length)];
		var newEnemyHp = enemyHp - playerDmg;
		res = 'You hit ' + mob1.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 2){
		var enemyHp = mob2.mobHp;
		var playerDmg = champ2.mobDmg[Math.floor(Math.random() * champ2.mobDmg.length)];
		var enemyHp = mob2.mobHp - playerDmg;
		res += 'You hit ' + mob2.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 3){
		var enemyHp = mob3.mobHp;
		var playerDmg = champ3.mobDmg[Math.floor(Math.random() * champ3.mobDmg.length)];
		var enemyHp = mob3.mobHp - playerDmg;
		res = 'You hit ' + mob3.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 4){
		var enemyHp = mob4.mobHp;
		var playerDmg = champ4.mobDmg[Math.floor(Math.random() * champ4.mobDmg.length)];
		var enemyHp = mob4.mobHp - playerDmg;
		res = 'You hit ' + mob4.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 5){
		var enemyHp = mob5.mobHp;
		var playerDmg = champ5.mobDmg[Math.floor(Math.random() * champ5.mobDmg.length)];
		var enemyHp = mob5.mobHp - playerDmg;
		res = 'You hit ' + mob5.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 6){
		var enemyHp = mob6.mobHp;
		var playerDmg = champ6.mobDmg[Math.floor(Math.random() * champ6.mobDmg.length)];
		var enemyHp = mob6.mobHp - playerDmg;
		res = 'You hit ' + mob6.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 7){
		var enemyHp = mob7.mobHp;
		var playerDmg = champ7.mobDmg[Math.floor(Math.random() * champ7.mobDmg.length)];
		var enemyHp = mob7.mobHp - playerDmg;
		res = 'You hit ' + mob7.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 8){
		var enemyHp = mob8.mobHp;
		var playerDmg = champ8.mobDmg[Math.floor(Math.random() * champ8.mobDmg.length)];
		var enemyHp = mob8.mobHp - playerDmg;
		res = 'You hit ' + mob8.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 9){
		var enemyHp = mob9.mobHp;
		var playerDmg = champ9.mobDmg[Math.floor(Math.random() * champ9.mobDmg.length)];
		var enemyHp = mob9.mobHp - playerDmg;
		res = 'You hit ' + mob9.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	} else if (level = 10){
		var enemyHp = mob10.mobHp;
		var playerDmg = champ10.mobDmg[Math.floor(Math.random() * champ10.mobDmg.length)];
		var enemyHp = mob10.mobHp - playerDmg;
		res = 'You hit ' + mob10.mobName + ' for ' + playerDmg + ' damage.';
		enemyDead();
		enemyAttack();
		hpPools();
	}
}

//enemyAttack() determines the value array for enemy damage and executes the rando0m value against the variable playerHp based on the declared level.
//It displays the 'combat text' indicating to the user the amount of damage that had been done.
//It executes the playerDead() function to check if the value of variable enemyHp is above zero.
function enemyAttack(){
	var playerHp;
	if (level = 1){
		var playerHp = champ1.mobHp;
		var enemyDmg = mob1.mobDmg[Math.floor(Math.random() * mob1.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob1.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 2){
		var playerHp = champ2.mobHp;
		var enemyDmg = mob2.mobDmg[Math.floor(Math.random() * mob2.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob2.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 3){
		var playerHp = champ3.mobHp;
		var enemyDmg =  mob3.mobDmg[Math.floor(Math.random() * mob3.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob3.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 4){
		var playerHp = champ4.mobHp;
		var enemyDmg = mob4.mobDmg[Math.floor(Math.random() * mob4.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob4.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 5){
		var playerHp = champ5.mobHp;
		var enemyDmg = mob5.mobDmg[Math.floor(Math.random() * mob5.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob5.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 6){
		var playerHp = champ6.mobHp;
		var enemyDmg = mob6.mobDmg[Math.floor(Math.random() * mob6.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob6.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 7){
		var playerHp = champ7.mobHp;
		var enemyDmg = mob7.mobDmg[Math.floor(Math.random() * mob7.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob7.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 8){
		var playerHp = champ8.mobHp;
		var enemyDmg = mob8.mobDmg[Math.floor(Math.random() * mob8.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob8.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 9){
		var playerHp = champ9.mobHp;
		var enemyDmg = champ9.mobHp - mob9.mobDmg[Math.floor(Math.random() * mob9.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob9.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	} else if (level = 10){
		var playerHp = champ10.mobHp;
		var enemyDmg = mob10.mobDmg[Math.floor(Math.random() * mob10.mobDmg.length)];
		var newPlayerHp = playerHp - enemyDmg;
		res += '<br>' + mob10.mobName + ' hit you for ' + enemyDmg + ' damage.';
		playerDead();
		roundResults(res);
		hpPools();
	}
}

//playerDead() checks the value of playerHp. If the value reaches 0 it writes a death notification message to the DOM and resets the level to 0.
function playerDead(){
	if (playerHp === 0) {
		res = 'You died!';
		roundResults(res);
		level = 0;
	}
}

//enemyDead checks the value of enemyHp. If the value reaches 0 it writes a victory notification message to the DOM and executes the addLevel() function.
function enemyDead(){
	if (enemyHp === 0){
		res = 'You Win!';
		roundResults(res);
		addLevel();
	}
}

//addLevel() is called on by the enemyDead() and go() functions to add a value of '1' to the variable 'level'.
function addLevel(){
	level + 1;
	} 

//roundResults() pulls the appropriate value for variable 'res' from other functions and writes them to the DOM.
function roundResults(res){
	document.querySelector('.combat-log').innerHTML += res + "<br>";
}

function hpPools(){
	document.querySelector('.player-health').innerHTML = newPlayerHp;
	document.querySelector('.enemy-health').innerHTML = newEnemyHp;
}