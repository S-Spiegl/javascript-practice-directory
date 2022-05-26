const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('starts out with a default setting of 20', () => {
        let thermostat = new Thermostat();
        expect(thermostat.temp).toEqual(20)
    })

    it('temp can be increased with an up method', () => {
        let thermostat = new Thermostat();
        thermostat.up(2) 
        expect(thermostat.temp).toEqual(22)
    })

    it('temp can be decreased with a down method', () => {
        let thermostat = new Thermostat();
        thermostat.down(2)
        expect(thermostat.temp).toEqual(18)
    })

    
})