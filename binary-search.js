const values = [5,3,8,1,4,2,6,10,7,9,0]

const binary = (val, array) => {
  let arr = array.sort((a, b) => a -b)
  let lower = 0
  let upper = arr.length - 1

  while(lower <= upper) {
    const  middle = lower + Math.floor(( upper - lower) / 2)
    if(val === arr[middle]) {
      return middle
    }
   if(val < arr[middle]) {
      upper = middle -1
    } else {
      lower = middle + 1
    }
  }
  return -1
}
console.log('object :>> ', binary(7,values));