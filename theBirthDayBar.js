function birthday(s, d, m) {
  const count = 0
  for(let i = 0; i < s.length; i++) {
    let chunk = s.slice(i, i +m)
    let total =  chunk.reduce((a,b) => a + b, 0)
    if(total === d) {
      count++
    }
  }
  return count
}
// https://www.hackerrank.com/challenges/the-birthday-bar/problem
birthday([1 ,2 ,1 ,3 ,2], 3,2)