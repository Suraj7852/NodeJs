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
    }

    remove()
    {
        var current;
        if(this.head == null)
            return "No element";
        else
        {
            current = this.head;
            while(current.next.next!=null)
            {
                current = current.next;
            }
            current.next = null;
        }

    }

    insertAt(ele,index)
    {
        if(index>0&&index>this.size)
            return false;
        else
        {
            var node = new Node();
            
        }
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
list.add(5);
list.add(6);
list.add(9);
list.remove();
list.remove();
console.log(list.printList())