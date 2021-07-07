function devineSumPairs(n, k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let remain = arr.slice(i+1, arr.length+1)
    remain.map(e => {
      if((e+arr[i]) % k === 0 ){
        count++
      }
    })
  }
  return count
}

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
devineSumPairs(6,3,[1, 3, 2, 6, 1, 2])