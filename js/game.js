

function playTurn(){

    switch(turn){
        case 1:
            persoEnCours = perso1;
            break;
        case 2:
            persoEnCours = perso2;
            break;
        default:
            throw("Erreur de choix de personnage");
    }

    persoEnCours.move();
    persoEnCours.pick();
    fight();
    persoEnCours.writeStats();
    drawMap();
    changeTurn();


    switch(turn){
        case 1:
            turn = 2;
            break;
        case 2:
            turn = 1;
            break;
        default:
            throw("Erreur de choix de personnage");
    }

    if(false){
        gameOver();
        if(false){
            restart();
        }
    }
}




function gameOver(){
}

function restart(){       
}

function fight(){       
}
