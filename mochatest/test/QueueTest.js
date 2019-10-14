const assert = require('chai').assert;
const util = require('../../Utility/Queue');

describe('Queue',function(){
    it('adding element',function(){
        let val = util.enqueue(10);
        assert.equal(val,1);
    })
    it('adding element',function(){
        let val = util.enqueue(5);
        assert.equal(val,2);
    })
    it('removing element',function(){
        let val = util.dequeue();
        assert.equal(val,10);
    })
    it('front element',function(){
        let val = util.front();
        assert.equal(val,5);
    })
    it('empty element',function(){
        let val = util.isEmpty();
        assert.equal(val,false);
    })
})