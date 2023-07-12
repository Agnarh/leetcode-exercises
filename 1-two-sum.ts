function twoSum(nums: number[], target: number): number[] {
    const hash = nums.reduce((acc, x, i) => {
        acc[x] = i;
        return acc;
    }, {} as Record<number, number>);

    for (let index = 0; index < nums.length; index++) {
        const curr = nums[index];
        const other = hash[target - curr];

        if (other && other !== index) {
            return [index, other];
        }
    }
}

export const run = () => {
    return twoSum([1, 3, 4, 2], 6);
};
