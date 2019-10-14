const assert = require('chai').assert;
const util = require('../../Utility/Deque');

describe('Deque',function(){
    it('adding element front',function(){
        let val = util.addFront(10);
        assert.equal(val,1);
    })
    it('adding element rear',function(){
        let val = util.addRear(5);
        assert.equal(val,2);
    })
    it('adding element front',function(){
        let val = util.addFront(9);
        assert.equal(val,3);
    })
    it('adding element rear',function(){
        let val = util.addRear(6);
        assert.equal(val,4);
    })
    it('removing element front',function(){
        let val = util.removeFront();
        assert.equal(val,9);
    })
    it('removing element end',function(){
        let val = util.removeRear();
        assert.equal(val,6);
    })
    it('element front',function(){
        let val = util.removeFront();
        assert.equal(val,10);
    })
    it('empty element',function(){
        let val = util.isEmpty();
        assert.equal(val,false);
    })
})