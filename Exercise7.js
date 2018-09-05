//1. Menyusun Barisan Bintang
var rows1 = 5; // input the number of rows

while (rows1 > 0) {
    console.log('*')
    rows1--
}

console.log('--------------------------')

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5; // input the number of rows
while (rows2 > 0) {
    var bin = ''
    var rows2dalam = 5
    while (rows2dalam > 0) {
        bin += '*'
        rows2dalam--
    }
    console.log(bin)
    rows2--
}

console.log('--------------------------')

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5 // input the number of rows
while (rows3 > 0) {
    var rows3dalam = 5
    var simpan = ''
    while (rows3dalam - (rows3 - 1) > 0) {
        simpan += '*'
        rows3dalam--
    }
    console.log(simpan)
    rows3--
}