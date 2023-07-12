function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let curr = x;
    const result = [];

    while (curr !== 0) {
        const digit = curr % 10;
        result.push(digit);
        curr = Math.floor(curr / 10);
    }

    let flag = true;

    for (let index = 0; index < result.length; index++) {
        if (result[index] !== result[result.length - index - 1]) {
            flag = false;
            break;
        } 
    }

    return flag;
}

export const run = () => {
    return isPalindrome(10);
};
