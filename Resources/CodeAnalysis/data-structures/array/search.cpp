/* The function takes in three parameters: an array to search through, the size of the array (arrays cannot self-determine their size, so you must provide the size) and the target value to be searched for. T in this case is an arbitrary type. This function returns a boolean based on whether or not the target value exists in the array. */
bool search(T[] array, int size, T target) {
/* We use a for-loop to iterate through the array and check if elements match the target value. */
  for (int step = 0; step < size; step++) {
    /* Return true if an array element matches the one we're looking for. */
    if (array[step] == target) {
      /**/
      return true;
    /**/
    }
  /**/
  }
  /* Else, return false - the for-loop has ended by this point, meaning that no element in the array matches the target value. */
  return false;
/**/
}
/* This is an example array of 5 elements. */
int arr[5] = { 1, 2, 3, 4, 5 };
/* An example call to search() is shown that would search arr for 3. It would return true. */
search(arr, 5, 3);
/* An example call to search() is shown that would search arr for 6. It would return false. */
search(arr, 5, 6);
