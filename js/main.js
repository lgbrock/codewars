// Count the Monkeys 2.17.20
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


  // Beginner - Lost Without a Map
  function maps(x){
    const y = x.map(value => value *2)
    return y
  }
  
  maps([1,2,3])


  // Find the smallest integer in the array
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b) => a-b)[0]
    }
  }
  
