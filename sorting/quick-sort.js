/*
1. Divide and Conquer approach => recursion is used
2. In-place sorting
3. Unstable sorting (unlike merge sort)
4. Time complexity - O(n log n) / O(n log n) / O(n^2). Worst case complexity happens when the array is already sorted and can
be prevented by using a randomized pivot.
5. Space complexity - O(log n)
 */

const partition = (arr, start, end) => {
    const pivot = arr[end];
    let partitionIndex = start;

    for (let idx = start; idx < end; idx++) {
        if (pivot > arr[idx]) {
            [arr[partitionIndex], arr[idx]] = [arr[idx], arr[partitionIndex]];
            partitionIndex++;
        }
    }
    [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
    return partitionIndex;
}

const quickSort = (arr, start, end) => {
    if (start < end) {
        const partitionIndex = partition(arr, start, end);
        quickSort(arr, start, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, end);
    }
};

// const input = [2, 3, 7, 0, 1, 6, 9, 1];
const input = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(input, 0, input.length - 1);
console.log(input);
