function Plateau(speed, nbTiles, sizeTile) {
    this.mapArray;
    this.perso1;
    this.perso2;
    this.speed = speed;
    this.nbTiles = nbTiles;
    this.sizeTile = sizeTile;

    this.drawMapInit = function () {
        this.drawBoolders();
        this.drawBoolders();
        //drawWeapons (arrayMap=2)

        //draw persos
        this.drawPersos(true);

    }

    this.emptyMap = function () {
        this.mapArray = new Array(this.sizeTile);
        for (var i = 0; i < this.mapArray.length; i++) {
            this.mapArray[i] = new Array(this.sizeTile + 1).join('0').split('').map(parseFloat);
        }
    }

    this.initPersonnages = function () {
        let position = randomPosition(this.mapArray);
        this.perso1 = new Personnage(position);

        do {
            position = randomPosition(this.mapArray);
            this.perso2 = new Personnage(position);
        } while (this.perso1.isCloseTo(this.perso2));

    }

    this.drawPersos = function (init = false) {
        let speed = 0;
        if (init === false) {
            init = this.speed;
        }
        //draw perso1
        $("#pion1").animate({
            left: this.perso1.position[0] * this.sizeTile + 'px',
            top: this.perso1.position[1] * this.sizeTile + 'px'
        }, speed);

        //draw perso2
        $("#pion2").animate({
            left: this.perso2.position[0] * this.sizeTile + 'px',
            top: this.perso2.position[1] * this.sizeTile + 'px'
        }, speed);

        if (init === true) {
            $("#pion1").show();
            $("#pion2").show();
        }
    }

    this.drawBoolders = function () {
        for (var i = 0; i < this.mapArray.length; i++) {
            for (var j = 0; j < this.mapArray.length; j++) {
                //Boolders = 1, empty = 0; 2 = arms
                if(this.mapArray[i][j] === 1){
                    $('tr#1 td#2').css('background','url(../images/rock.png) 50px 50px no-repeat');
                }
            }
        }
    }

    this.hidePersos = function () {
        $("#pion1").css("display", "none");
        $("#pion2").css("display", "none");

    }

    
}