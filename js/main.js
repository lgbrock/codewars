//Count the Monkeys 2.17.20
function monkeyCount(n) {
  const monkeys = []
  for(i = 1; i<n+1; i++){
    monkeys.push(i)
  }
  return monkeys;
  }


// Remove String Spaces 2.19.20
function noSpace(x){
  return x.split(" ").join('')
  }