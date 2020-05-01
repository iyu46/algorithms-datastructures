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