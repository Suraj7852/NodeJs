const util =  require('../Utility/utility');
class Node{
    constructor(ele)
    {
        this.ele = ele;
        this.next = null;
    }
}

class StackLink{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    push(ele)
    {
        var node = new Node(ele);
        var curr;
        if(this.head == null)
            this.head = node;
        else
        {
            curr = this.head;
            while(curr.next!=null)
            {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    pop()
    {
        var curr,prev;
        curr = this.head;
        if(this.head == null)
            return "No element found:";
        else
        {
            while(curr.next!=null)
            {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.ele;
    }
    StackSort()
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
        return util.BubbleSortIntRev(arr);
        
    }
    printStack() 
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
    peek()
    {
        var curr = this.head;
        if(this.head == null)
            return "No element found";
        else
        {
            while(curr.next != null)
            {
                curr=curr.next;
            }
        }
        return curr.ele;
    }
    isEmpty()
    {
        return this.size === 0;
    }
}

var st = new StackLink();
module.exports = st;
