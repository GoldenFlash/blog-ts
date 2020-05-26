class node {
  element: any;
  constructor(value:any) {
    this.element = value;
  }
}
export default class nodeList {
  static provitevalue = 1;
  prev: null;
  head: node;
  next: null;
  constructor(value:any) {
    this.head = new node(value);
    this.prev = null;
    this.next = null;
  }

  static creat() {
    console.log("creat")
  }
}
