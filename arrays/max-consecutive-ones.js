const findMaxConsecutiveOnes = (nums) => {
    let globalMax = 0;
    let localMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ++localMax;
        } else {
            globalMax = Math.max(globalMax, localMax);
            localMax = 0;
        }
    }
    return Math.max(globalMax, localMax);
};

module.exports = {findMaxConsecutiveOnes};