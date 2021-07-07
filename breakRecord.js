function breakingRecords(scores) {
  let highest = 0
  let lowest = 0
  let currentHighest  = scores[0]
  let currentLowest = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if( scores[i +1 ] <  currentLowest ) {
      lowest ++
      currentLowest= scores[i +1 ]
    } else if(scores[i +1 ] > currentHighest  ){

      highest ++
      currentHighest = scores[i +1 ]
    }
  }
  return [highest, lowest]

}

breakingRecords([10, 5, 20, 20, 4 ,5, 2 ,25, 1])