/**
 * Implementation of lists
 */

// Initialize list class - function
function List(){
    this.listSize    = 0;
    this.pos         = 0;
    // initialize  empty array to store our values
    this.dataStore   = [];
    //this.clear       = clear;
    this.find        = find;
    this.toString    = toString;
    //this.insert      = insert;
    this.append      = append;
    this.remove      = remove;
    //this.front       = front;
    //this.end         = end;
    //this.prev        = prev;
    //this.next        = next;
    this.length      = length;
    //this.currPos     = currPos;
    this.moveTo      = moveTo;
    //this.getElement  = getElement;
    //this.contains    = contains;
}

// After we append element the size is incremented
function append(element){
    this.dataStore[this.listSize++] = element;

}

// Find element in the list
function find(element){
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return i;
        }
    }

}

// Remove element from the list
function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// Number of elements in a list
function length(){
    return this.listSize;
}
function toString(){
    return this.dataStore;
}









