const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Distance',function(){
    it('should be sqrt of x and y',function(){
        let val = util.distance(4,3);
        assert.equal(val,5.00);
    });
});