function filledOrder(arr, k) {
 let sorted =  arr.sort()
  let  count = 0
  for (let i = 0; i < sorted.length; i++) {
    if(sorted[i] <= k) {
      count++;
      k = k - sorted[i]
    }
  }
  return count
}

filledOrder([10,30, 40], 2)