/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in one parameter: a vector to be sorted. The <int> next to vect specifies that the input vector is expected to only hold integers, but the sort itself can handle any type of element. The ampersand (&) symbol next to vector<int> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. */
void heapSort(vector<T> & vect) {
  /* Don't run the algorithm if the input vector is only one item big. It's already 'sorted'. */
  for (int step = (vect.size() / 2) - 1; step >= 0; step--) {
    /* placeholder */
    heapify(vect, vect.size(), step);
   /* placeholder */
  }
  /* placeholder */
  for (int step = vect.size() - 1; step >= 0; i--) {
     /* placeholder */
    swap(vect[0], vect[step]);
     /* placeholder */
    heapify(vect, step, 0);
   /* placeholder */
  }
/**/
}
/* An example call to heapSort() is shown at the bottom that would sort the entire 'items' vector. */
heapSort(items);

