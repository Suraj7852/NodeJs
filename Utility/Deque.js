var len = 0;
class Deque{
    constructor(){
        this.items = [];
    }

    addFront(ele)
    {
        len++;
        return this.items.unshift(ele);
    }

    addRear(ele)
    {
        len++;
        return this.items.push(ele);
    }

    removeFront()
    {
        len--;
        return this.items.shift();
    }

    removeRear()
    {
        len--;
        return this.items.pop();
    }

    front()
    {
        if(this.isEmpty())
            return "No element in deque";
        return this.items[0];
    }

    size()
    {
        return len;
    }
    
    isEmpty()
    {
        return this.items.length==0;
    }

    printQueue()
    {
        var str = "";
        for(let i=0;i<this.items.length;i++)
            str+=this.items[i]+" ";
        return str; 
    }
}


var deq = new Deque();
module.exports = deq;
