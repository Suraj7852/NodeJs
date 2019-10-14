const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Binary',function(){
    it('if Binary ',function(){
        let val = util.toBinary(8);
        assert.equal(val,1000);
    });
    it('it should return boolean ',function(){
        let val = util.toBinary(19)
        assert.equal(val,10011);
    });
});