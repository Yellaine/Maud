    function drawMap(){
        //drawBoolders (arrayMap=1)

        //drawWeapons (arrayMap=2)

        //draw perso1

        //draw perso2
        $("#perso2").animate({
            left: perso2.position[0],
            top: perso2.position[1]
        }, speed);    

    }

function emptyMap(tab, nbTile){
    tab = new Array(nbTile);     
    for (var i = 0; i < tab.length; i++) {
        tab[i] = new Array(nbTile+1).join('0').split('').map(parseFloat);
    }
    //drawMap();
}