const assert = require('chai').assert;
const util = require('../../Utility/LinkedList');

describe('Linked List',function(){
    it('adding element',function(){
        let val = util.add(10);
        assert.equal(val,'10');
    })
    it('adding element',function(){
        let val = util.add(5);
        assert.equal(val,'5');
    })
    it('adding element',function(){
        let val = util.add(9);
        assert.equal(val,'9');
    })
    it('adding element',function(){
        let val = util.add(6);
        assert.equal(val,'6');
    })
    it('adding element in specific position',function(){
        let val = util.insertAt(13,2);
        assert.isUndefined(val,'undefined');
    })
    it('removing element from position',function(){
        let val = util.removeFrom(1);
        assert.equal(val,5);
    })
    it('removing front element',function(){
        let val = util.removeElement(9);
        assert.equal(val,9);
    })
    it('adding element',function(){
        let val = util.indexOf(13)
        assert.equal(val,1);
    })
    it('empty element',function(){
        let val = util.isEmpty();
        assert.equal(val,false);
    })
})