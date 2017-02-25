# HW4 - {RPG Game}
Homework week 4 for UCLA Coding BootCamp. 
This assignment is a Role-Playing Game (RPG).

## Game Description and Requirements
-Game is triggered when user <CLICKS> 1 of 4 characters
-The Selected character becomes your character 
-The 3 Remaining characters remain enemies
-<CLICK> on enemy to select it for attack. This moves it to the DEFENDER section.
-<CLICK> ATTACK to play game to defeat enemies & reduce HP to zero or below zero.
	-Remove defeated enemy from the `defender area`. 
	-The player character can now choose a new opponent.
-Each <CLICK> applies HIT POWER (hp) to points. Your Points are reduced by the DEFENDER hp; DEFENDER points are reduced by your hp.
-Continue through the game until game alerts whether you win or lose.
-Click RESTART to reset the game.
 

## Technologies Used
-HTML
-CSS
-BOOTSTRAP
-JAVASCRIPT
-jQUERY

-------------

## CODE EXPLANATION
### OBJECTS

-Objects were created for each character, with properties including:
  -Points
  -Hit Power (hp)
  -Enemy (all characters begin with enemy status unless selected as YOUR character)
  -Whether they are YOUR character (myChar)
  -Whether they are a Defender (defender)

-THIS was used to carry the selected object through the appropriate functions.

```
var mothra = document.getElementById("mothra");
mothra.points = 190;
mothra.hp = 6;
mothra.enemy = true;
mothra.myChar = false;
mothra.defender = false;

```


### FUNCTIONS

-I created a CLICK FUNCTION on each enemy character to place in Game Section as your character, or in Game Enemies section as defender.

-I created a CLICK FUNCTION on the ATTACK button that reduced character points and increased your character’s hit power. 

## MATH.FLOOR and MATH.RANDOM
This method was used to increase your character’s hit power by a random number between 1 and 10.

Example:

```

var gameOn = function(){
  	console.log("Your Hit Power " + yourHitPower);
  	console.log("Enemy Hit Power " + oppHitPower);
  	$( "#attackButton" ).click(function() {
  		$("#gameAlerts").empty();
  		yourPoints = (yourPoints - oppHitPower);
  		oppPoints = (oppPoints - yourHitPower);
  		yourHitPower = (yourHitPower + (Math.floor((Math.random() * 10) + 1)));

```
