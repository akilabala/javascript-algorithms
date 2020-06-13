const partition = (arr, start, end) => {
    const pivot = arr[end];
    let partitionIndex = start;   // Index of smaller element

    for (let idx = start; idx < end; idx++) {
        if (pivot > arr[idx]) {
            [arr[partitionIndex], arr[idx]] = [arr[idx], arr[partitionIndex]];
            partitionIndex++;
        }
    }
    [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
    return partitionIndex;
}

const quickSelect = (arr, start, end, k) => {
    if (start < end) {
        const partitionIndex = partition(arr, start, end);
        console.log(`start=${start} | end=${end} | pIndex=${partitionIndex} | arr=${arr} | k=${k}`);
        if (partitionIndex > k-1) {
            return quickSelect(arr, start, partitionIndex - 1, k);
        } else if (partitionIndex < k-1) {
            return quickSelect(arr, partitionIndex + 1, end, k);
        } else if (partitionIndex === k-1) {
            console.log(`arr[k-1]=${arr[k-1]}`);
            return arr[k-1];
        }
    } else if (start === end) {
        console.log(`start=${start} | end=${end} | arr=${arr} | k=${k}`);
        console.log(`### arr[k-1]=${arr[k-1]}`);
        return arr[k-1];
    }
};

// const input = [2, 3, 7, 0, 1, 6, 9, 1];
const input = [7, 2, 1, 6, 8, 5, 3, 4];
// const input = [7, 10, 4, 3, 20, 15];
console.log(quickSelect(input, 0, input.length - 1, 2));
console.log(input);
