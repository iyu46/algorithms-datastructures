/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in three parameters: a vector to be sorted, a small integer, and a larger integer. These two integers indicate what area of the vector is to be sorted. The <T> next to vect specifies what type the vector expects to be given to hold. In this case, <T> is a special notation that represents an arbitrary type, which means that the function can take in a vector that holds anything. The ampersand (&) symbol next to vector<T> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. The two integers are bound to the size of the array, so they can be anywhere between 0 and the size of the vector minus one, because the numbers are used to access the vector through index, and vectors are indexed starting from 0. */
void quickSort(vector<T> & vect, int low, int high) {
  /* Don't run the algorithm if the input vector is only one item big. It's already 'sorted'. */
  if (n <= 1) return;
  /* Randomly pick a 'pivot' value from the elements in the vector. */
  int pivot = selectPivot(vect, low, high);
  /* Make a vector Lo that contains all the elements which are smaller than p. */
  vector<T> Lo = partition(vect, p, <);
  /* Make a vector Lo that contains all the elements which are equal to p. */
  vector<T> Eq = partition(vect, p, =);
  /* Make a vector Lo that contains all the elements which are bigger than p. */
  vector<T> Hi = partition(vect, p, >);
  /* Call Quick Sort recursively on the first half of the given vector section to sort it. */
  quickSort(Lo, 0, Lo.size() - 1);
  /* Call Quick Sort recursively on the last half of the given vector section to sort it. */
  quickSort(Hi, 0, Hi.size() - 1);
  /* Call merge to attach the first half of the sorted vector to the second half. By joining these pieces, we guarantee that all elements in the vector from low to high are correctly sorted. See the proof section for a formal description of why that is the case. */
  merge(Lo, Eq, Hi);
/**/
}
/* An example call to quickSort() is shown at the bottom that would sort the entire 'items' vector. */
quickSort(items, 0, items.size() - 1);

