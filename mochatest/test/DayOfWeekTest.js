const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Day of week ',function(){
    it('it should return day ',function(){
        let val = util.DayOfWeek(10,9,2019);
        assert.equal(val.dayStr,'Tuesday');
    });
    it('it should return day of number ',function(){
        let val = util.DayOfWeek(10,9,2019);
        assert.equal(val.dayNum,2);
    });
});