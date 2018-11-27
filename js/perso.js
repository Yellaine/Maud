function Personnage(position) {
    this.position = position;
    this.health = 100;
        
    this.pick = function () {}

    this.writeStats = function () {}
    
    this.isCloseTo = function (autrePerso) {
        let isClose = false;
        if (this.position[0] === autrePerso.position[0]) {
            if (this.position[1] === autrePerso.position[1] ||
                this.position[1] === (autrePerso.position[1] + 1) ||
                this.position[1] === (autrePerso.position[1] - 1)) {
                isClose = true;
            }
        }
        if (this.position[1] === autrePerso.position[1]) {
            if (this.position[0] === autrePerso.position[0] ||
                this.position[0] === (autrePerso.position[0] + 1) ||
                this.position[0] === (autrePerso.position[0] - 1)) {
                isClose = true;
            }
        }
        return isClose;
    }
    this.move = function (direction) {
        switch (direction) {
            case cstDown:
                this.position[1]++;
                break;
            case cstUp:
                this.position[1]--;
                break;
            case cstLeft:
                this.position[0]--;
                break;
            case cstRight:
                this.position[0]++;
                break;
            default:
                throw ("Bad Direction");
        }
    }
}
