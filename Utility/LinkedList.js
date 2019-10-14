const util = require('../Utility/utility');
class Node{
    constructor(ele)
    {
        this.ele = ele;
        this.next = null;
    }
}

class LinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(ele)
    {
        var node = new Node(ele);
        var current;

        if(this.head == null)
            this.head = node;
        else
        {
            current = this.head; 

            while(current.next!=null)
            {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
        return node.ele;
    }

    insertAt(ele,index)
    {
        if(index>0&&index>this.size)
            return false;
        else
        {
            var node = new Node(ele);
            var curr,prev;
            if(index==0)
            {
                node.next = this.head;
                this.head = node;
            }
            else
            {
                curr = this.head;
                var it = 0;
                while(it<index)
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    ListSort()
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

    removeFrom(index)
    {
        if(index>0&&index>this.size)
            return -1;
        else
        {
            var curr,prev,it=0;
            curr = this.head;
            prev = curr;
            if(index === 0)
                this.head = curr.next;
            else
            {
                while(it<index)
                {
                    it++;
                    prev = curr;
                    curr  = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.ele;
        }
    }

    removeElement(ele)
    {
        var current = this.head;
        var prev = null;
        while(current!=null)
        {
            if(current.ele === ele)
            {
                if(prev == null)
                    this.head = current.next;
                else
                {
                    prev.next = current.next;       
                }
                this.size--;
                return current.ele;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(ele)
    {
        var count=0;
        var current = this.head;
        while(current!=null)
        {
            if(current.ele === ele)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty()
    {
        return this.size==0;
    }

    sizeList()
    {
        return this.size;   
    }
     
    printList() 
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
}

var list = new LinkedList();
module.exports = list;