const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('BinaryNibbs',function(){
    it('it should convert decimal to binary and swap the nibbs and again change to decimal',function(){
        let val = util.BinaryNibble(100)
        assert.equal(val,70);
    });
    it('it should convert decimal to binary and swap the nibbs and again change to decimal',function(){
        let val = util.BinaryNibble(120)
        assert.equal(val,135);
    });
});