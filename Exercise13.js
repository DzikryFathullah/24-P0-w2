function xo(str) {
    // you can only write your code here!
    var index = 0
    var counterX = 0
    var counterO = 0
    while (index < str.length) {
        if (str[index] === 'x') {
            counterX++
        } else {
            counterO++
        }
        index++
    }
    if (counterX === counterO) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true