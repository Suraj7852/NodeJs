const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Laep year',function(){
    it('should be true or false',function(){
        let val = util.LeapYear(2016);
        assert.isBoolean(val,true);
    })
})