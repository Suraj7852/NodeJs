const assert = require('chai').assert;
const util = require('../../Utility/utility');

describe('Binary Search',function(){
    it('if element found ',function(){
        let val = util.BinarySearch(["suraj","kumar","rahul","rakhi"],"rakhi")
        assert.equal(val,'Element found: ');
    });
    it('it should return boolean ',function(){
        let val = util.BinarySearch(["suraj","kumar","rahul","rakhi"],"mayank")
        assert.equal(val,'Element not found: ');
    });
});