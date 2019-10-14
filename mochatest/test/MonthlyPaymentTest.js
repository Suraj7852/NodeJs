const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Payment',function(){
    it('it should return how much u have to pay: ',function(){
        let val = util.Payment(10000,5,10);
        assert.isAbove(val,212.45);
    });
});