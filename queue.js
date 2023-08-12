class Pair {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
}

class Node {
    constructor(p) {
        this.pair=p;
        this.next=null;
    }
}

class queue {
    constructor() {
        this.first=null;
        this.last=null;
        this.size=0;
    }
    enqueue(x,y) {
        let pair=new Pair(x,y);
        let node=new Node(pair);
        if(this.size==0) {
            this.first=node;
            this.last=node;
        }
        else {
            this.last.next=node;
            this.last=node;
        }
        this.size++;
    }
    front() {
        if(this.size>0) {
            let res=new Pair();
            res=this.first.pair;
            this.first=this.first.next;
            this.size--;
            return res;
        }
    }
    is_empty() {
        if(this.size==0) {
            return true;
        }
        else {
            return false;
        }
    }
}