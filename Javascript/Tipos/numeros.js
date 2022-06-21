function verificaNum(arr) {
    if(!arr.length||!arr) return -1;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]%2===0)arr[i]=0;
    }
    return arr
}

console.log(verificaNum( [1,3,4,6,80,33,23,90,30,40,41,42]))