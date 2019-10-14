const assert = require('chai').assert;
const util = require('../../Utility/Stack');

describe('Stack',function(){
    it('adding element',function(){
        let val = util.push(10);
        assert.equal(val,1);
    })
    it('adding element',function(){
        let val = util.push(5);
        assert.equal(val,2);
    })
    it('removing element',function(){
        let val = util.pop();
        assert.equal(val,5);
    })
    it('front element',function(){
        let val = util.peek();
        assert.equal(val,10);
    })
    it('empty element',function(){
        let val = util.isEmpty();
        assert.equal(val,false);
    })
})