const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Anagram',function(){
    it('it should return boolean ',function(){
        let val = util.isAnagram("heart","earth");
        assert.isBoolean(val,true);
    });
    it('it should return boolean ',function(){
        let val = util.isAnagram("hear","earth");
        assert.isBoolean(val,false);
    });
});