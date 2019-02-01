# js-sortable

## Bubble sort

## Insertion sort
- The efficiency of insertion sort depends on how sorted the array is.
- In best case, it take O(n) to sort array if the elements of array are in the right place.

## Selection sort

## Merge sort
- Follow device and conquer algorithm.
- Is not in-place sorting algorithm. It requires extra space to sort the array.
- It takes O(nlg(n)) time to sort an array
- Steps:
  - Device the array into 2 hafts.
  - Sort 2 hafts of the array.
  - Device recursively until it reach the base case, that is each haft has the length of 1, which means the array already sorted.
  - Merge the subarray to form sorted array.
- Important notes:
  - Device technique.
  - Merge arrays technique.

## Heap
### What is a heap
### Heap properties
- Shape: heap shoould form a complete tree, that means all of the levels of the tree, except the last level, must be full filled with node.
- Order: In max heap, the parent node alway bigger then it's childs, which means root node will have the large value.
### Heap sort
- Is an in-place sorting algorithm. It does not requires extra space to sort the array.
- Steps:
  - Build max heap base on the input array.
  - Swap the root node (max item) to the end of the array.
  - Heapify the remaining items of the array.
  - Repeat until reach the first element of array.
- Important notes:
  - Build max heap and heapify technique.

## Quick sort
- Follow device and conquer algorithm.
- Is in-place sorting algorithm.
- Quick sort is an unstable algorithm.
- Time complexity of Quick sort depends on:
  - The way we choose pivot. For un-balanced sorting, it takes O(n^2) to sort the array. For balanced sorting, it takes O(nlg(n))
  - How sorted the array already is. So do not use quick sort for mostly sorted array.
- Steps:
  - Partition the array by choosing pivot value:
    - The first half (on the left) is smaller than pivot.
    - The second half (on the right) is bigger than pivot.
  - Keep partition the array recursively, until it reaches the base case, that is the array has only one element (which means already sorted)
  - No need combine step since it's an inplace sorting algorithm.
- Important notes:
  - Partition technique.
  - Choosing pivot technique.

## Counting sort
- Only for array of integers.
- We need to know the range k of the items inside the array.
- Work best in case of the range of the integers are not too wide, which means not much bigger than range k.
- Steps:
  - Create counting array, length of k.
  - Couting appearance of each item.
  - Add 2 consecutive items in counting array.
  - Iterate over the original array, for each iteam, find the value of that in counting array, push to new array.

| Factors | Bubble sort | Selection sort | Insertion sort | Merge sort | Heap sort | Quick sort | Counting sort | 
| :---    | :---        | :---           | :---           | :---       | :---      | :---       | :---        |
| Comperision sort?   | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Stable?   | ? | ? | ? | ? | ? | ? | ? |
| Recursive?   | No | No | No | Yes | No | Yes | No |
| Time complexity?   | O(n^2) | O(n^2) | O(n^2) | O(nlog(n)) | O(nlog(n)) | O(nlog(n)) | O(n +k) |
| Inplace?   | Yes | Yes | Yes | No | Yes | No | Yes |