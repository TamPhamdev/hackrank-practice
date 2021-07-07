function anagram(dic, query) {
  let dicSorted = dic.map(e => e.split('').sort().join(''))
  let querySorted = query.map(e => e.split('').sort().join(''))
    let result = [];
    querySorted.forEach(e => {
        let count = 0;
        for(let i = 0; i < dicSorted.length; i ++) {
            if(e === dicSorted[i]) {
                count++
            }
        }
        result.push(count);
    })
    return result;
}



anagram(['heater','cold','clod','reheat','docl'], ['codl','heater','abcd'])