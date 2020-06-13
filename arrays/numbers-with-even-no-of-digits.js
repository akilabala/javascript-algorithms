// const getNumberOfDigits = (num) => {
//     let numOfDigits = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         numOfDigits++;
//     }
//     return numOfDigits;
// };
//
const findNumbers = (nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            total++;
        }
    }
    return total;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));