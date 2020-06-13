const findNumbersWithEvenDigits = (nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            total++;
        }
    }
    return total;
};

console.log(findNumbersWithEvenDigits([12, 345, 2, 6, 7896]));