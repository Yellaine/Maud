var sizeTile = 50;
var nbTile = 10;
var perso1, perso2, persoEnCours;
var turn = 1;
var ratioBoolder = 0.1;
var mapArray = new Array(nbTile);
var cstUp = "up";
var cstDown = "down";
var cstLeft = "left";
var cstRight = "right";
var speed = 500;


function init(){
    emptyMap(mapArray, nbTile);
    //randomBoulders();
    //randomWeapons();

    //turn = randomTurn();
    turn = 1;
    var position = randomPosition();        
    perso1 = new Personnage(position);

    //position = randomPosition();
    //perso2 = new Personnage(position);

    //playTurn();
}

window.onload = function(){
    init();
}



function setDirection(direction){

}


document.onkeydown = function handleKeyDown(e){

    var key = e.keyCode;
    var direction;

    switch(key) {
        case 37:
            direction = cstLeft;
            break;
        case 38:
            direction = cstUp;
            break;
        case 39:
            direction = cstRight;
            break;
        case 40:
            direction = cstDown;
            break;
        case 32:
            //spacebar
            restart();
            return;
        default:
            return;
    }
    perso1.move(direction);

}






function Personnage(position) {
    this.position = position;
    this.health = 100;

    this.move = function(direction) {
        var authorizedMove;
        switch(position){
            case cstDown:
                authorizedMove = position[1] < nbTile - 1; 
                break;
            case cstUp:                    
                authorizedMove = position[1] > 1; 
                break;
            case cstLeft:
                authorizedMove = position[0] > 1;                     
                break;
            case cstRight:
                authorizedMove = position[0] < nbTile - 1;                     
                break;
            default:
                throw("Bad Direction");
        }
        if (!authorizedMove){
            return authorizedMove;
        }

        switch(position){
            case cstDown:
                position[1]++;
                break;
            case cstUp:                    
                position[1]--;
                break;
            case cstLeft:
                position[0]--;                     
                break;
            case cstRight:
                position[0]++;                     
                break;
            default:
                throw("Bad Direction");
        }

    }
    this.pick = function() {                     
    }     
    this.writeStats = function() {            
    }     
}