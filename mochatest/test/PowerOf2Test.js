const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Power of 2 ',function(){
    it('should be table of power of 2',function(){
        let val = util.PowOf2(2);
        assert.isArray(val,[2,4]);
    })
})