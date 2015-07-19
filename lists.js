/**
 * Implementation of lists
 */

// Initialize list class - function
function List(){
    this.listSize    = 0;
    this.pos         = 0;
    // initialize  empty array to store our values
    this.dataStore   = [];
    this.clear       = clear;
    this.find        = find;
    this.toString    = toString;
    this.insert      = insert;
    this.append      = append;
    this.remove      = remove;
    this.front       = front;
    this.end         = end;
    this.prev        = prev;
    this.next        = next;
    this.length      = length;
    this.currPos     = currPos;
    this.moveTo      = moveTo;
    this.getElement  = getElement;
    this.contains    = contains;
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
// Returns all elemnts of the list
function toString(){
    return this.dataStore;
}

// Inserts elemnt in specified position
function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;

}

function contains(element){
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

// Remove all elements from the list
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0){
        --this.pos;
    }
}

function next(){
    if(this.pos < this.listSize - 1){
        ++this.pos;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}

/**
 * Iteration over this list can be done like this


for(names.front(); names.currPos() < names.length(); names.next()){
     //assign   names.getElement() to variable
}

/*






