const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Prime',function(){
    it('should return prime or not',function(){
        let val = util.isPrime(5);
        assert.isBoolean(val,true);
    })

    it('should return prime or not',function(){
        let val = util.isPrime(9);
        assert.isBoolean(val,false);
    })
})