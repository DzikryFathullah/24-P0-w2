var nama = 'dzikry';
var peran = 'tabib';
if (nama === '' || peran === '') {
    console.log('Nama harus diisi!!');
} else if (peran === 'ksatria') {
    console.log('Selamat datang di dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu');
} else if (peran === 'tabib') {
    console.log('Selamat datang di dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');
} else if (peran === 'penyihir') {
    console.log('Selamat datang di dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('Hallo ' + nama + ', pilih peranmu untuk memulai game!');
}