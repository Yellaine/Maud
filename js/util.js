
function randomBoulders(map, mapsize) {
    let choix;

    for(let i = 0; i < mapsize; i++){
        for(let j = 0; j < mapsize; j++){ 

            choix = (Math.random() * ratioBoolder) > 0.5? true : false;
            if(choix === true){
                map[i][j] = 1;
            }

        }
    }
    return map;
}

function randomTurn(){
    return (1+ Math.round(Math.random() * 1));
}

function randomPosition(tab){
    let newPosition = [0,0];
    let i, j;
    do{
        i = Math.round(Math.random() * (nbTile-1));
        j = Math.round(Math.random() * (nbTile-1)); 
    }while(tab[i][j] !== 0);

    return [i, j];    
}      

function randomWeapons(){
    let nbWeapon = randomNbWeapons();
    for (let k = 0; k < nbWeapon; k++) {
        let i, j;
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

function isAuthorizedMove(map, mapsize, x, y, newDirection) {
    let authorizedMove;
    switch (newDirection) {
        case cstDown:
            authorizedMove = y < mapsize - 1 ;
            if (authorizedMove) {
                authorizedMove = (map[x][y + 1] != 1)
            }
            break;
        case cstUp:
            authorizedMove = y > 0;
            if (authorizedMove) {
                authorizedMove = (map[x][y - 1] != 1)
            }
            break;
        case cstLeft:
            authorizedMove = x > 0;
            if (authorizedMove) {
                authorizedMove = (map[x - 1][y] != 1)
            }
            break;
        case cstRight:
            authorizedMove = x < mapsize - 1;
            if (authorizedMove) {
                authorizedMove = (map[x + 1][y] != 1)
            }
            break;
        case cstNone:
            authorizedMove = false;
            break;
        default:
            authorizedMove = false;
            throw ("Bad Direction");
    }
    return authorizedMove;
}