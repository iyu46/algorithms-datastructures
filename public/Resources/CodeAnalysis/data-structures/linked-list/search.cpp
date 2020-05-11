/* The following struct defines a Node data structure to use for a Linked List implementation. */
struct Node {
  /* Field that will contain an object of data type T. */
  T data;
  /* Pointer to the previous element in the list. Optional. */
  //Node* prev;
  /* Pointer to the next element in the list. This field in the last element of the list will point to NULL. */
  Node* next;
/**/
};
/**/
// ------------------------------- //
/* The search function takes in two parameters: a linked list to search through (using its head pointer) and the target value to be searched for. T in this case is an arbitrary type. This function returns a pointer to the node in the list that contains the target value in its data field. */
Node* search(Node* head, T target) {
  /* Store the head in a local variable curr, which will be used in the proceeding while-loop. */
  Node* curr = head;
  /* We use a while-loop to iterate over the list. We make the condition "curr != NULL" as the last node in the list will point to NULL for its 'next' field. */
  while (curr != NULL) {
    /* Check if the current node's data field matches what we're looking for. */
    if (curr->data == target) {
      /* If it does, return this node. This exits both the while-loop and the function. */
      return curr;
    /**/
    }
    /* If it doesn't, move on to the next node in the list. */
    curr = curr->next;
  /**/
  }
  /* Else, return NULL - the while-loop has ended by this point, meaning that no element in the list matches the target value. */
  return NULL;
/**/
}
/* An example call to search() is shown that would search list1 for 3 and store the result in found. */
Node* found = search(list1, 3);
/**/
// ------------------------------- //
/* The insert function takes in two parameters: a linked list to add to (using its head pointer) and a value that will be appended. T in this case is an arbitrary type. This implementation inserts nodes at the beginning of the list (mutating the head pointer through the ampersand).*/
void insert(Node* & head, T value) {
  /* Allocate space in memory for a new Node that will contain the data for the node to be inserted into the list. */
  Node* newNode = new Node;
  /* Set the new node's data field to the input value parameter. */
  newNode->data = value;
  /* Set the new node to be in front of the rest of the list. */
  newNode->next = head;
  /* Redirect the input head pointer to the new head (the inserted node). */
  head = newNode;
/**/
}
/* An example call to insert() is shown that would insert 3 into a linked list of integers. */
insert(list2, 3);
