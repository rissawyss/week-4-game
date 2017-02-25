$( document ).ready(function() {
  // Handler for .ready() called.

  //VARIABLES ==================================

  //Objects created for each character. Properties include:
  //Points
  //Hit Power (hp)
  //Enemy (all characters begin with enemy status unless selected as YOUR character)
  //Whether they are YOUR character (myChar)
  //Whether they are a Defender (defender)


var godzilla = document.getElementById("godzilla");
godzilla.points = 200;
godzilla.hp = 8;
godzilla.enemy = true;
godzilla.myChar = false;
godzilla.defender = false;

var caesar = document.getElementById("caesar");
caesar.points = 175;
caesar.hp = 6;
caesar.enemy = true;
caesar.myChar = false;
caesar.defender = false;

var mothra = document.getElementById("mothra");
mothra.points = 190;
mothra.hp = 6;
mothra.enemy = true;
mothra.myChar = false;
mothra.defender = false;

var ghidorah = document.getElementById("ghidorah");
ghidorah.points = 180;
ghidorah.hp = 8;
ghidorah.enemy = true;
ghidorah.myChar = false;
mothra.defender = false;

//In play and attackOn status control whether game is in play or not and how characters are selected for battle

inPlay = false;
attackOn = false;
roundComplete = false;

//Variables to store your points and opponent's points

var yourHitPower = "";
var yourPoints = "";

var oppHitPower = "";
var oppPoints = "";

var counter = 0;


//FUNCTIONS ==================================

//Click function on each enemy character to place in Game Section as your character or
//in Game Enemies section as defender
//if first round of game is complete, all subsequent characters are placed in Game Enemies section

//GODZILLA


  $("#godzilla").click(function() {
  	if (!inPlay && !attackOn) {
	$(this).appendTo("#gameSection");
	$(this).css({"background-color": "#ead340", "width": "200px", "padding": "0"});
	this.enemy = false;
	this.myChar = true;
	inPlay = true;
	yourHitPower = this.hp;
	yourPoints = this.points;
	} else if (inPlay && !attackOn) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		attackOn = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn(); 
	} else if (roundComplete && (this.enemy === true)) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn(); 
	}


});


//MOTHRA


  $("#mothra").click(function() {
  	if (!inPlay && !attackOn) {
	$(this).appendTo("#gameSection");
	$(this).css({"background-color": "#ead340", "width": "200px", "padding": "0"});
	this.enemy = false;
	this.myChar = true;
	inPlay = true;
	yourHitPower = this.hp;
	yourPoints = this.points;
	} else if (inPlay && !attackOn) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		attackOn = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn();
		} else if (roundComplete && (this.enemy === true)) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn(); 
	} 


});


//CAESAR

$("#caesar").click(function() {
  	if (!inPlay && !attackOn) {
	$(this).appendTo("#gameSection");
	$(this).css({"background-color": "#ead340", "width": "200px", "padding": "0"});
	this.enemy = false;
	this.myChar = true;
	inPlay = true;
	yourHitPower = this.hp;
	yourPoints = this.points;
	} else if (inPlay && !attackOn) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		attackOn = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn();
		} else if (roundComplete && (this.enemy === true)) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn(); 
	} 


});


//GHIDORAH

$("#ghidorah").click(function() {
  	if (!inPlay && !attackOn) {
	$(this).appendTo("#gameSection");
	$(this).css({"background-color": "#ead340", "width": "200px", "padding": "0"});
	this.enemy = false;
	this.myChar = true;
	inPlay = true;
	yourHitPower = this.hp;
	yourPoints = this.points;
	} else if (inPlay && !attackOn) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		attackOn = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn();
		} else if (roundComplete && (this.enemy === true)) {
		$(this).appendTo("#gameEnemies");
		$(this).css({"background-color": "#b20000", "width": "200px", "padding": "0"});
		this.defender = true;
		oppHitPower = this.hp;
		oppPoints = this.points;
		gameOn();  
	}


});

//gameOn FUNCTION controls game using Click event on Attack button 
//Each click negates enemy hit power from your points; and your hit power from enemy points
//Each click increases both yours and enemy hit power by random number from 1-10 using Math.Floor and Math.Random
//Your points and enemy points are displayed in Game Section using .append


  var gameOn = function(){
  	console.log("Your Hit Power " + yourHitPower);
  	console.log("Enemy Hit Power " + oppHitPower);
  	$( "#attackButton" ).click(function() {
  		$("#gameAlerts").empty();
  		yourPoints = (yourPoints - oppHitPower);
  		oppPoints = (oppPoints - yourHitPower);
  		yourHitPower = (yourHitPower + (Math.floor((Math.random() * 10) + 1)));


			if ("id" === "#gameSection") {
	  			$(".gamePoints").empty();
	  			$(".gamePoints").append("<h5>" + "POINTS " + oppPoints + "</h5>");
				console.log("myChar" + yourPoints);
				console.log("yep");
//	  		} else if (defender = true) {
			} else if ("id" === "#gameEnemies") {
	  			console.log("defender" + oppPoints);
	  			$(".gamePoints").empty();
	  			$(".gamePoints").append("<h5>" + "POINTS " + yourPoints + "</h5>");
			}
//  			
  		console.log("Opponent Points: " + oppPoints);
  		console.log("Your Points: " + yourPoints);


  		$("#gameAlerts").append("<hr>"+ "<p>" + "Your attack leaves Defender with " + oppPoints + " Points" + "</p>");
  		$("#gameAlerts").append("<hr>"+ "<p>" + "Defender attack leaves You with " + yourPoints + " Points" + "</p>");
  			if (oppPoints <= 0) {
  				if (yourPoints >  oppPoints) {
  					//alert("You Win");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "YOU WIN" + "</p>");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "Select Another Enemy Above" + "</p>");
  					nextRound();
  					counter++;
  				} else {
  					//alert("You Lose");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "YOU LOSE" + "</p>");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "Click RESTART to play again" + "</p>");
  				}
  			} else if (yourPoints <= 0) {
  				if (oppPoints >  yourPoints) {
  					//alert("You Lose");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "YOU LOSE" + "</p>");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "Click RESTART to play again" + "</p>");
  				} else {
  					//alert("You Win");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "YOU WIN" + "</p>");
  					$("#gameAlerts").append("<hr>"+ "<p>" + "Select Another Enemy Above" + "</p>");
  					nextRound();
  					counter++;
  				}
  			}



		});
  }

//nextRound FUNCTION for next round of play occurs if you win. Clears the game defender section using .empty


  var nextRound = function(){
  	$("#gameAlerts").empty();
  	$("#gameEnemies").empty();
  	roundComplete = true;
  	charSelect();
  }

//charSelect FUNCTION alerts user of win and resets your points and hit power
//Points resets to random number between 170 and 200 using Math.Floor and Math.Random
//Hit power resets to random number between 5 and 10 Math.Floor and Math.Random


  var charSelect = function(){
  	if (counter < 3) {
  		alert("YOU WIN! Ready for next round");
  		yourPoints = (Math.floor(Math.random() * 31) + 170);
  		yourHitPower = (Math.floor((Math.random() * 6) + 5));
  		console.log("Next round starting hit power" + yourHitPower);
  		console.log("Next round starting points" + yourPoints);
  	} else {
  		alert("YOU WIN! Game Over");
  		console.log("Game Over");

  }
}


//RESTART button has id of "refreshButton" that is a click event to reload the page to restart the game


$("#restartButton").click(function(e){
      e.preventDefault();
      window.location.reload();
    });

});



