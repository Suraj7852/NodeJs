const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Quadratic',function(){
    it('should be recieve 2 value',function(){
        let val = util.QuadraticEquation(5,2,1);
        assert.equal(val.root1,0.20);
        assert.equal(val.root2,-0.60);
    });
});