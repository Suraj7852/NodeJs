const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('UserName',function(){
    it('should return your name: ',function(){
        let val = util.Username("Suraj");
        assert.equal(val,'Hello Suraj, How are you?');
    });
});