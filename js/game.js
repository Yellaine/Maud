const sizeTile = 50;
const nbTile = 10;
let persoEnCours;
let turn = 2;
const ratioBoolder = 0.1;
let monPlateau;
const cstUp = "up";
const cstDown = "down";
const cstLeft = "left";
const cstRight = "right";
const cstNone = "none";
const speed = 500;
let direction = cstNone;

window.onload = function () {
    init();
}


function init() {

    monPlateau = new Plateau(speed, nbTile, sizeTile);
    monPlateau.hidePersos();
    //randomBoulders();
    //randomWeapons();

    //turn = randomTurn();
    monPlateau.emptyMap();
    monPlateau.initPersonnages();
    monPlateau.drawMapInit();

}


function playTurn(direction) {



    switch (turn) {
        case 1:

            if (!isAuthorizedMove(monPlateau.mapArray, monPlateau.nbTiles,
                    monPlateau.perso1.position[0], monPlateau.perso1.position[1], direction)) {

                return;
            }
            monPlateau.perso1.move(direction);
            monPlateau.drawPersos();


            //persoEnCours.pick();
            //fight();
            //persoEnCours.writeStats();

            turn = 2;

            break;
        case 2:
            if (!isAuthorizedMove(monPlateau.mapArray, monPlateau.nbTiles,
                    monPlateau.perso2.position[0], monPlateau.perso2.position[1], direction)) {

                return;
            }
            monPlateau.perso2.move(direction);
            monPlateau.drawPersos();


            turn = 1;
            break;
        default:
            throw ("Erreur de choix de personnage");
    }

    if (false) {
        gameOver();
        if (false) {
            restart();
        }
    }
}


document.onkeydown = function handleKeyDown(e) {

    let key = e.keyCode;
    if (turn === 1) {
        switch (key) {
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
            default:
                return;
        }
    }
    if (turn === 2) {
        switch (key) {
            case 81:
                direction = cstLeft;
                break;
            case 90:
                direction = cstUp;
                break;
            case 68:
                direction = cstRight;
                break;
            case 83:
                direction = cstDown;
                break;
            default:
                return;
        }
    }
    playTurn(direction);
}


function gameOver() {}

function restart() {}

function fight() {}