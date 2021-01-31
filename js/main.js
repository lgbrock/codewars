function countPositivesSumNegatives(input) {
    let summedArr = [0, 0]
    if (!input || input.length < 1) {
        return [];
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            summedArr[0]++
        } else {
            summedArr[1] += input[i];
        }
    }
    return summedArr;
}