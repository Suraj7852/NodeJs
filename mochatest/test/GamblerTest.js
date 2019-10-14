const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Gambler',function(){
    it('should be',function(){
        let val = util.Gambler(5,6,5);
        assert.isAbove(val.win,0);
        assert.isAbove(val.perWin,-1);
        assert.isAbove(val.perLoos,-1);
    })
})