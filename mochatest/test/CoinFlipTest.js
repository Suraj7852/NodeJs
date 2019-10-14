const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Coin Flip',function(){
    it('percentage should be above o',function(){
        let val = util.CoinFlip(5);
        assert.isAbove(val.headper,-1);
        assert.isAbove(val.tailper,-1);
    });
});