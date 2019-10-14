class Queue{
    constructor()
    {
        this.items = [];
        this.size = 0;
    }
    
    enqueue(ele)
    {
        this.size++;
        return this.items.push(ele);
    }

    dequeue()
    {
        if(this.isEmpty())
            return "Underflow";
        this.size--;
        return this.items.shift();
    }

    front()
    {
        if(this.isEmpty())
            return "No element in queue";
        return this.items[0];
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

    size()
    {
        return s;
    }

}
var queue = new Queue();
module.exports = queue;
