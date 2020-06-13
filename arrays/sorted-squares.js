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

// start=0; end=4; i=4 [x, x, x, x, 100];
// start=0; end=3; i=3 [x, x, x, 16, 100];
// start=1; end=3; i=2 [x, x, 9, 16, 100];
// start=1; end=2; i=1 [x, 1, 9, 16, 100];
// start=2; end=2; i=0 [0, 1, 9, 16, 100];