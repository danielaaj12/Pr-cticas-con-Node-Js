function fiboDe(times, index = 0, i = 0, j = 1, arr = []) {
    if (!times) return i;
    else if (index < times / 2 - 1) {
        index += 1;
        i += j; 
        j += i;
        arr.push(i, j);
        return fiboDe(times, index, i, j, arr);
    }
    if(times % 2) {
        return arr;
    }
    arr.push(i, j);
    return arr;
}

console.log(fiboDe(50));
console.log(fiboDe(13));
console.log(fiboDe(10));
console.log(fiboDe(2));
console.log(fiboDe(1));
console.log(fiboDe(0));