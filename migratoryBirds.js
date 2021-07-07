function migratoryBirds( arr) {
  let sorted = arr.sort();
  let ans = sorted[0];
  let maxOccur = 1,
      counter = 0;

  for (let i = 0; i < sorted.length; i++) {
      counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
      if (counter > maxOccur) {
          ans = sorted[i];
          maxOccur = counter;
      }
  }
  return ans;


}
// https://www.hackerrank.com/challenges/migratory-birds/problem
migratoryBirds( [1 ,2, 3, 4, 5, 4 ,3, 2 ,1, 3 ,4])