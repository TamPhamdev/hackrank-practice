function romanToInt(s) {
 let symbol = {
  I   :          1,
  V    :         5,
  X     :        10,
  L      :       50,
  C       :      100,
  D        :     500,
  M         :    1000,
 }
 let result = 0
  for(let i = s.length -1; i >= 0; i--) {
    let currVal = Number(symbol[s[i]])
    let preVal = i + 1 >= s.length ? null : Number(symbol[s[i+1]])
   result = preVal !== null && currVal < preVal ? result - currVal : result + currVal
  }
  return result
}

romanToInt(["M","C","M","X","C","I","V"])