/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in one parameter: a vector to be sorted. The <int> next to vect specifies that the input vector is expected to only hold integers, but the sort itself can handle any type of element. The ampersand (&) symbol next to vector<int> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. */
void bubbleSort(vector<int> & vect) {
/* We use a for-loop to iterate through the vector and perform operations on each element. Insertion sort is an iterative algorithm which means each iteration, it performs a certain set of instructions to guarantee that every element of the vector up to a certain index is sorted. */
  for (int step = 0; step < vect.size() - 1; step++) {
    /* We use a for loop to iterate over the rest of the vector to move bigger elements towards the end of the vector. At the end of this iteration, we want the biggest element to 'bubble up' to its correct place in the vector. */
    for (int further = 0;  further < vect.size() - step - 1; further++) {
      /* Check if the current element is actually bigger than the element that's ahead of it. */
      if (vect[further] > vect[further + 1]) {
        /* If it is, we swap the two so that the bigger element is now more towards the end of the list. */
        swap(vect[further], vect[further + 1]);
      /**/
      }
    /**/
    }
  /**/
  }
/**/
}
/* An example call to bubbleSort() is shown at the bottom that would sort the entire 'items' vector. */
bubbleSort(items);

