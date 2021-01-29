function getCount(str) {
    str = str.toLowerCase
    let vowels = ('aeiou')
    let vowelsCount = 0;
    // enter your majic here
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

let solution = getCount('hi');
console.log(solution)