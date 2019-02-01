# js-sortable

## Bubble sort

## Insertion sort

## Selection sort

## Merge sort
- Follow device and conquer algorithm.
- Is not in-place sorting algorithm. It requires extra space to sort the array.
- It takes O(nlg(n)) time to sort an array

## Heap
### What is a heap
### Heap properties
- Shape: heap shoould form a complete tree, that means all of the levels of the tree, except the last level, must be full filled with node.
- Order: In max heap, the parent node alway bigger then it's childs, which means root node will have the large value.
### Heap sort
- Is an in-place sorting algorithm. It does not requires extra space to sort the array.

## Quick sort
- Follow device and conquer algorithm.
- Is in-place sorting algorithm.
- Quick sort is an unstable algorithm.
- Time complexity of Quick sort depends on:
  - The way we choose pivot. For un-balanced sorting, it takes O(n^2) to sort the array. For balanced sorting, it takes O(nlg(n))
  - How sorted the array already is. So do not use quick sort for mostly sorted array.

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