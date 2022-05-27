class Thermostat {
    constructor() {
        this.temp = 20
        this.powersaver = true
    }

    up() {
        if(this.powersaver = true && this.temp < 25){
            this.temp += 1}
        else if(this.powersaver = false && this.temp < 32){
            this.temp += 1}
    }
    // why does the if statement work but the else if not work?
    // switching them round makes no difference, so it's not the syntax...
    down() {
        if(this.temp > 10) {
            this.temp -= 1
        } 
    }

    switch_off_powersaver() {
        this.powersaver = false
    }

    switch_on_powersaver() {
        this.powersaver = true
    }

    reset() {
        this.temp = 20
    }

    usage() {
        if(this.temp < 18){
            return 'low'
        }
        else if(this.temp >= 18 && this.temp <= 25){
            return 'medium'
        }
        else if(this.temp > 25){
            return 'high'
        }
    }



}

module.exports = Thermostat