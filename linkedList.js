class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.size) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.size) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    let node = new Node(value);
    let left = this.getValueWithIndex(index - 1);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else if (index === this.size - 1) {
      this.tail.next = node;
      this.tail = node;
    } else {
      node.next = left.next;
      left.next = node;
    }
    this.size++;
  }

  getValueWithIndex(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  getIndexWithValue(value) {
    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curr.value === value) {
        return i;
      }
    }
  }

  arrayToLinkedlist(array) {
    let curr;
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        const node = new Node(array[i]);
        this.head = node;
        this.tail = node;
        curr = this.head;
      } else {
        const node = new Node(array[i]);
        curr.next = node;
        this.tail = node;
        curr = curr.next;
      }
      this.size++;
    }
    return this.head
  }

  sort() {}

  print() {
    let curr = this.head,
      temp = "";
    while (curr) {
      temp += curr.value + " ";
      curr = curr.next;
    }
    console.log(temp);
  }
}


module.exports= new LinkedList()