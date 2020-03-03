/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in one parameter: a vector to be sorted. The <int> next to vect specifies that the input vector is expected to only hold integers, but the sort itself can handle any type of element. The ampersand (&) symbol next to vector<int> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. */
void selectionSort(vector<int> & vect) {
/* We use a for-loop to iterate through the vector and perform operations on each element. Insertion sort is an iterative algorithm which means each iteration, it performs a certain set of instructions to guarantee that every element of the vector up to a certain index is sorted. */
  for (int step = 0; step < vect.size() - 1; step++) {
    /* currentMin is set to the current index in the iteration. At the end of this iteration, we want the value at vect[step] to be the smallest element in the vector between the current index and the end of the vector. */
    int currentMin = step;
    /* We use a for loop to iterate over the rest of the vector to find (and 'select') the smallest element currently in this section of the vector. For descending order, change vect[currentMin] < vect[further] to vect[currentMin] > vect[further]. */
    for (int further = step + 1;  further < vect.size(); further++) {
      /* Check if the new element that was found further in the array is smaller than the current saved one. */
      if (vect[further] < vect[currentMin]) {
        /* If it is, we save its location (its index) to currentMin. */
        currentMin = further;
      /**/
      }
    /**/
    }
    /* Check if the index where we found the smallest value is not also the current index. */
    if (currentMin != step) {
      /* If the two elements are at different places in the vector, swap them. */
      swap(vect[step], vect[currentMin])
    /**/
    }
  /**/
  }
/**/
}
/* An example call to selectionSort() is shown at the bottom that would sort the entire 'items' vector. */
selectionSort(items);

