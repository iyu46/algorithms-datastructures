//// This implementation of Insertion Sort is written in C++, and uses an array as the base container.

//// The function takes in two parameters: the array that's to be sorted, and the size of that array.
//// Since we are using an array and have not included the std library, we must provide the size of the array when we call the function as there is no simple way to obtain the length of an array in native C++.
void insertionSort(int array[], int size) {
//// We use a for-loop to iterate through the array and perform operations on each element.
  for (int step = 1; step < size; step++)
  {
    int key = array[step];
    int j = step - 1;
    while (key < array[j] && j >= 0)
    {
      // For descending order, change key<array[j] to key>array[j].
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
}

