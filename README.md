## Puropse of this repo

This repository is inspired by the book "Grokking algorithms. An illustrated guide for programmers and other curious people" by Aditya Y. Bhargava.
I implemented algorithms that are mentioned in this book to refresh some of the knowledge and also learn something new.

## Implemented algorithms

### Binary search

It divides array in half and check if search value is higher or lower than the value of the element in the middle. Works only for SORTED arrays.

Implemented two versions of binary search:

-   recursive - _binarySearch.js_
-   using loops - _binarySearchRecursive.js_

### Quicksort

Quicksort is an example of divide and conquer algorithm. It divides problem to smaller pieces (in this example array is divided in half in every iteraion) and then easier problem is being solved.

In my repo I implemented using recursion.

### Breadth first search (BFS)

Breadth-first search is used to calculate the shortest path for an UNWEIGHTED graph. It also checks if there is possible way from start node to finish node.

_This implementation returns true if it can find the way from start to finish node_

### Dijkstra

Dijkstra’s algorithm is used to calculate the shortest path for a WIGHTED graph. Algorithm works only when all the weights are positive.

My implementation returns an array with a path. Example:

```
['start', 'b', 'a', 'end']
```

You can read this as path:

```
start --> b --> a --> end
```

Right now it only show the path, but I will update it so it will also return a single value of the shortest path.

### Recurisve functions

In _recursive_functions_ folder you can find some functions written using recrusion. These are not always algorithms, but only functions to refresh some ideas while using recursion.

Written functions:

-   biggestNumber.js
-   sum.js

## Tests

In the _tests_ folder you can find unit tests for every algorithm/function I implemented.

To run tests use this command in main folder:

```
npm test
```

You should see test results and coverage in the console. Also, the _coverage_ folder is created.

</br>
</br>

---

This is not a secret knowledge, feel free to copy the code and informations :)
