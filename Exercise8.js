//Tugas 1
function shoutOut(str) {
    console.log("Halo Function!")
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

console.log('--------------------------------------')

//Tugas 2
function calculateMultiply(ang1, ang2) {
    return ang1 * ang2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('--------------------------------------')

//Tugas 3
function processSentence(name, age, address, hobby) {
    return 'Nama saya ' + name + ', Umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"