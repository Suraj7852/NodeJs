const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Vending Machine ',function(){
    it('should show how much note',function(){
        let val = util.VendingMachine(2013);
        assert.equal(val,'Total number of notes: 5')
    })
})