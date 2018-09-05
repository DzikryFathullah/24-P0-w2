// 1. Melakukan Looping Menggunakan While
var indexLoop1 = 2
console.log('LOOPING PERTAMA')
while (indexLoop1 <= 20) {
    console.log(indexLoop1 + ' - I love Coding')
    indexLoop1++
}

var indexLoop2 = 20
console.log('LOOPING KEDUA')
while (indexLoop2 >= 2) {
    console.log(indexLoop2 + ' - I will become fullstack Developer ')
    indexLoop2--
}

console.log('--------------------------------------')

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for (var inLoop1 = 1; inLoop1 <= 20; inLoop1++) {
    console.log(inLoop1 + ' - I love Coding')
}
console.log('LOOPING KEDUA')
for (var inLoop2 = 20; inLoop2 >= 1; inLoop2--) {
    console.log(inLoop2 + ' - I will become fullstack Developer ')
}

console.log('--------------------------------------')

console.log('Perulangan ganjil Genap')
var iLoop1 = 1
while (iLoop1 <= 100) {
    if (iLoop1 % 2 === 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }

    iLoop1 = iLoop1 + 1
}

console.log('Perulangan pertambahan 2')
var iLoop2 = 1
while (iLoop2 <= 100) {
    if (iLoop2 % 3 === 0) {
        console.log(iLoop2 + ' kelipatan 3')
    }
    iLoop2 = iLoop2 + 2
}

console.log('Perulangan pertambahan 5')
var iLoop3 = 1
while (iLoop3 <= 100) {
    if (iLoop3 % 6 === 0) {
        console.log(iLoop3 + ' kelipatan 6')
    }
    iLoop3 = iLoop3 + 5
}
console.log('Perulangan pertambahan 9')
var iLoop4 = 1
while (iLoop4 <= 100) {
    if (iLoop4 % 10 === 0) {
        console.log(iLoop4 + ' kelipatan 10')
    }
    iLoop4 = iLoop4 + 9
}
