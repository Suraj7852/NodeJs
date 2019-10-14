const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Harmonic',function(){
    it('should be sum of the resiprocal',function(){
        let val = util.HarmonicNumber(10);
        assert.isAtMost(val,3);
    });
});