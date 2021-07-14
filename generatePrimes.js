function getPrimes(x){
  // số nguyên tố là số lơn hơn 0 và 1 chia hết cho 1 và chính nó, ngoài ra ko chia hết cho số nào
    // tạo biến result chứa kết quả trả về
    // lặp qua từ 3 -> x mỗi lần +2 (số nguyên tố là số lẻ)
    // nếu là số nguyên số push vào mảng
    let result = []
      for(let i = 3; i <= x; i+=2) {
        let primeNum  = checkPrime(i)
        if(primeNum) {
          result.push(primeNum)
        }
      }
    return result;
}
function checkPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return num
}
//  [
//  3,  5,  7, 11, 13, 17, 19, 23,
//  29, 31, 37, 41, 43, 47, 53, 59,
// 61, 67, 71, 73, 79, 83, 89, 97,
//  101
getPrimes(101)