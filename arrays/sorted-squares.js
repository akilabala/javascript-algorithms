const sortedSquares = (arr) => {
    const squares = new Array(arr.length);
    let start = 0;
    let end = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[start] ** 2 > arr[end] ** 2) {
            squares[i] = arr[start] ** 2;
            start++;
        } else {
            squares[i] = arr[end] ** 2;
            end--;
        }
    }
    return squares;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));