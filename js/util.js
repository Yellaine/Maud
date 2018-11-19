


function randomBoulders() {
    var choix;

    for(var i = 0; i < nbTile; i++){
        for(var j = 0; j < nbTile; j++){ 

            choix = (Math.random() * ratioBoolder) > 0.5? true : false;
            if(choix === true){
                mapArray[i][j] = 1;
            }

        }
    }
}


function randomTurn(){
    return (1+ Math.round(Math.random() * 1));
}


function randomPosition(){
    var newPosition = [0,0];
    var i, j;
    do{
        i = 1+ Math.round(Math.random() * (nbTile-1));
        j = 1+ Math.round(Math.random() * (nbTile-1));

    }while(mapArray[i][j] !== 0);
    return [i, j];    
}      


function randomWeapons(){
    var nbWeapon = randomNbWeapons();
    for (var k = 0; k < nbWeapon; k++) {
        var i, j;
        do{
            i = (1+ Math.round(Math.random() * 9));
            j = (1+ Math.round(Math.random() * 9));

        }while(mapArray[i][j] !== 0);
        mapArray[i][j] = 2;
    }
}


function randomNbWeapons() {
    return (1+ Math.round(Math.random() * 3));
}
