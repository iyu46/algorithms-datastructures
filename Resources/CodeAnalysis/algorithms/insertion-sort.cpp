/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in two parameters: a vector to be sorted, and the index of the vector to which you want to sort up to. The <int> next to vect specifies that the input vector is expected to only hold integers, but the sort itself can handle any type of element. The ampersand (&) symbol next to vector<int> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. */
void insertionSort(vector<int> & vect, int size) {
/* We use a for-loop to iterate through the vect and perform operations on each element. Insertion sort is an iterative algorithm which means each iteration, it performs a certain set of instructions to guarantee that every element of the vector up to a certain index is sorted. */
  for (int step = 1; step < size; step++) {
    /* key is set to the value of the current index in the iteration. */
    int key = vect[step];
    /* j is set to the index of the previous element. */
    int j = step - 1;
    /* We use a while loop to move the current element to its correct place in the vector. For descending order, change key<vect[j] to key>vect[j]. */
    while (key < vect[j] && j >= 0) {
      /* placeholder */
      vect[j + 1] = vect[j];
      /* placeholder */
      --j;
    /**/
    }
    /* placeholder */
    vect[j + 1] = key;
  /**/
  }
/**/
}
/* An example call to insertionSort() is shown at the bottom that would sort the entire 'items' vector. */
insertionSort(items, items.size() - 1);

