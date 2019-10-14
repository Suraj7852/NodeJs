var util = require('../Utility/utility');
class Node{
    constructor(ele)
    {
        this.ele = ele;
        this.next = null;
    }
}

class QueueList{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    enqueue(ele)
    {
        var node = new Node(ele);
        var curr;
        if(this.head == null)
            this.head = node;
        else
        {
            curr = this.head;
            while(curr.next != null)
            {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    dequeue()
    {
        var curr;
        curr = this.head;
        if(curr == null)
            return "No element found";
        else
        {
            this.head = this.head.next;
        }
        this.size--;
        return curr.ele;
    }

    QueueSort()
    {
        var arr = [];
        var i=0,it=0,curr;
        curr = this.head;
        while(it<this.size)
        {
            arr[i++] = curr.ele;
            curr = curr.next;
            it++; 
        }
        return util.BubbleSortInt(arr);  
    }

    printQueue() 
    { 
	    var curr = this.head; 
	    var str = ""; 
        while (curr) 
        { 
		    str += curr.ele+" "; 
		    curr = curr.next; 
	    } 
        return str; 
    }  
    front()
    {
        if(this.head == null)
            return "No element found";
        var curr = this.head;
        return curr.ele;
    }
    isEmpty()
    {
        return this.size === 0;
    }
}

var Queue = new QueueList();
module.exports = Queue;