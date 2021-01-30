function getCount(str) {
    // str = str.toLowerCase
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // enter your majic here
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}

let solution = getCount('abracadabra');
console.log(solution)