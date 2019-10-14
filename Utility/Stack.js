
class Stack{
    constructor()
    {
        this.items = [];
    }
    push(ele)
    {
        return this.items.push(ele);
    }
    pop()
    {
        if(this.items.length==0)
            return "Underflow";
        return this.items.pop();
    }
    peek()
    {
        return this.items[this.items.length-1];
    }
    isEmpty()
    {
        if(this.items.length==0)
            return true;
        return false;
    }
    printStack()
    {
        var str = "";
        for(let i=0;i<this.items.length;i++)
        {
            str += this.items[i]+" ";
        }
        return str;
    }
}
var stack = new Stack();
module.exports = stack;

