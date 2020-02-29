/* Because we're using the std::vector container, we must include the std library where the vector container is defined. */
using namespace std;
/* The function takes in three parameters: a vector to be sorted, a small integer, and a larger integer. These two integers indicate what area of the vector is to be sorted. The <T> next to vect specifies what type the vector expects to be given to hold. In this case, <T> is a special notation that represents an arbitrary type, which means that the function can take in a vector that holds anything. The ampersand (&) symbol next to vector<T> indicates that the input vector will be passed by reference instead of by copy - meaning that the input vector will be directly modified and operated on in the code. The two integers are bound to the size of the array, so they can be anywhere between 0 and the size of the vector minus one, because the numbers are used to access the vector through index, and vectors are indexed starting from 0. */
void mergeSort(vector<T> & vect, int low, int high) {
/* Check if the low parameter is a lower number than the high parameter. Because Merge Sort works by splitting the vector into small sections, sorting them all, and then piecing them back together, this conditional statement is needed to tell the algorithm when the vector sections are at their smallest (which means no more splitting can be done). */
  if (low < high) {
    /* We split the given vector section in half and call Merge Sort again recursively on the two new halves. Middle gives the index number at the center of the given vector section by taking the average of low and high. Something important to remember is that dividing two integers in C++ like we do to calculate middle can only result in another integer. This is because the final number is rounded down to the nearest integer before being returned, so middle can only be a whole number. */
    int middle = (low + high) / 2
    /* Call Merge Sort recursively on the first half of the given vector section to sort it. */
    mergeSort(vect, low, middle);
    /* Call Merge Sort recursively on the second half of the given vector section to sort it. We write middle + 1 because we don't want to sort any elements twice - the previous mergeSort call is already sorting the element at the middle position. In the event that it turns out middle + 1 equals high, the if statement at the top of the function will prevent any further splitting of that section. */
    mergeSort(vect, middle + 1, high);
    /* Call merge to attach the first half of the sorted vector to the second half. By joining these pieces, we guarantee that all elements in the vector from low to high are correctly sorted. See the proof section for a formal description of why that is the case. */
    merge(vect, low, middle, high);
  }
}
/* An example call to mergeSort() is shown at the bottom that would sort the entire 'items' vector. */
mergeSort(items, 0, items.size() - 1);

