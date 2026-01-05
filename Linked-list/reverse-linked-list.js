function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
var reverseList = function(head) {
let prev=null;
let curr=head;
while(curr!==null){
    let nextTemp=curr.next;
    curr.next=prev;
    prev=curr;
    curr=nextTemp;
}
return prev;
};
const head = arrayToList([1,2,3,4,5]);
const reversed = reverseList(head);
console.log(listToArray(reversed))