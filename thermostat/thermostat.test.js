const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('starts out with a default setting of 20', () => {
        let thermostat = new Thermostat();
        expect(thermostat.temp).toEqual(20)
    })

    it('temp can be increased with an up method', () => {
        let thermostat = new Thermostat();
        thermostat.up()
        expect(thermostat.temp).toEqual(21)
    })

    it('temp can be decreased with a down method', () => {
        let thermostat = new Thermostat();
        thermostat.down()
        expect(thermostat.temp).toEqual(19)
    })

    it('minimum possible temp is 10', () => {
        let thermostat = new Thermostat();
        for (let i = 0; i < 11; i++) {
        thermostat.down()
        }
        // (repeat 11 times)
        expect(thermostat.temp).toEqual(10)
    })

    it('The Power saving mode is on by default', () => {
        let thermostat = new Thermostat();
        expect(thermostat.powersaver).toEqual(true)
    })

    it('Powersaver can be turned off', () => {
        let thermostat = new Thermostat();
        thermostat.switch_off_powersaver()
        expect(thermostat.powersaver).toEqual(false)
    })

    it('Powersaver can also be turned on', () => {
        let thermostat = new Thermostat();
        thermostat.switch_off_powersaver()
        thermostat.switch_on_powersaver()
        expect(thermostat.powersaver).toEqual(true)
    })

    it('If power saving mode is on, the maximum temperature is 25 degrees', () => {
        let thermostat = new Thermostat();
        for(let i = 0; i < 6; i++) {
            thermostat.up()           
        }
        expect(thermostat.temp).toEqual(25)
    })

    it('If power saving mode is off, the maximum temperature is 32 degrees', () => {
        let thermostat = new Thermostat();
        thermostat.switch_off_powersaver
        for(let i = 0; i < 20; i++) {
            thermostat.up()           
        }
        expect(thermostat.temp).toEqual(32)
    })

    it('can reset the temperature to 20 with a reset method', () => {
        let thermostat = new Thermostat();
        thermostat.up()
        thermostat.reset()
        expect(thermostat.temp).toEqual(20)
    })

    it("details its current energy usage", () => {
        let thermostat = new Thermostat();
        thermostat.switch_on_powersaver
        thermostat.down()
        thermostat.down()
        thermostat.down()
        expect(thermostat.usage()).toEqual('low')
        thermostat.up()
        expect(thermostat.usage()).toEqual('medium')
        for(i = 0; i < 10; i++)
        thermostat.up()
        expect(thermostat.usage()).toEqual('high')
        // this won't work until you get it to go past 
        // 25 when powersaver is off. You could stub it for now?
    })
        


})