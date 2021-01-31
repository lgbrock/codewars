function sumMix(x) {
    const newArr = x.map(el => Number(el));
    const reducer = newArr.reduce((acc, currentVal) => acc + currentVal)

    return reducer
}

//turn into number
//reduce method to return number
//return number