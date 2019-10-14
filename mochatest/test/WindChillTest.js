const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('WindChill',function(){
    it('should give wind speed:',function(){
        let val = util.WindChill(26,100);
        assert.isAtMost(val,0.44);
    });
    it('use formula correctly',function(){
        let val = util.WindChill(20,121);
        assert.equal(val,'Enter Valid input');
    });
});