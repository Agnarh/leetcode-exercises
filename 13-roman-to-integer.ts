function romanToInt(s: string): number {
    let result = 0;

    for (let index = 0; index < s.length; index++) {
        const curr = s[index];

        switch (curr) {
            case 'I':
                if (index < s.length - 1) {
                    if (s[index + 1] === 'V') {
                        result += 4;
                        index += 1;
                    } else if (s[index + 1] === 'X') {
                        result += 9;
                        index += 1;
                    } else {
                        result += 1;
                    }
                } else {
                    result += 1;
                }
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if (index < s.length - 1) {
                    if (s[index + 1] === 'L') {
                        result += 40;
                        index += 1;
                    } else if (s[index + 1] === 'C') {
                        result += 90;
                        index += 1;
                    } else {
                        result += 10;
                    }
                } else {
                    result += 10;
                }
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if (index < s.length - 1) {
                    if (s[index + 1] === 'D') {
                        result += 400;
                        index += 1;
                    } else if (s[index + 1] === 'M') {
                        result += 900;
                        index += 1;
                    } else {
                        result += 100;
                    }
                } else {
                    result += 100;
                }
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            default:
                break;
        }
    }

    return result;
}

export const run = () => {
    return romanToInt('III');
};
