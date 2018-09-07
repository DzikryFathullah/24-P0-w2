function konversiMenit(menit) {
    // you can only write your code here!
    var hasilMenit = 0
    var hasilDetik = 0

    while (menit >= 60) {
        hasilMenit++
        menit = menit - 60
    }
    hasilDetik = menit
    if (String(hasilDetik).length === 1) {
        return hasilMenit + ':' + '0' + String(hasilDetik)
    } else {
        return hasilMenit + ':' + hasilDetik
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00