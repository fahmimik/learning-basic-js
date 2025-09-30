let confirmation = true;
while (confirmation){

    // get data from player
    let player = prompt('silahkan pilih: gajah, semut, orang');
    
    // get data from computer
    // generate randomize
    let computer = Math.random(); // this is used library JS to get randomize 0 - 1
    if(computer < 0.34){
        computer = 'gajah';
} else if(computer >= 0.34 && computer < 0.67){
    computer = 'semut';
} else {
    computer = 'orang';
}
console.log(computer);

// set the rules
let result = '';
if (player == computer){
    result = 'Seri !';
} else if(player == 'gajah'){
    // if (computer == 'orang'){ // versi menggunakan if else
    //     result = 'Menang !!';
    // } else {
        //     result = 'Kalah !!!';
        // }
        
        // versi untuk menggunakan ternary
        result = (computer == 'orang') ? 'Menang !!' : 'Kalah !!!';
    } else if (player == 'orang'){
    // if (computer == 'gajah'){ // versi menggunakan ef else
        //     result = 'Kalah !!!';
        // } else {
    //     result = 'Menang !!';
    // }
    
    //versi untuk menggunakan ternary
    result = (computer == 'gajah') ? 'Kalah !!!' : 'Menang !!';
} else if(player == 'semut'){
    result = (computer == 'orang') ? 'Kalah !!!' : 'Menang !!';
} else {
    result = ' Pilihan yang diinput salah ! '
}
alert('Kamu memilih: '+player+' dan Komputer memilih: '+computer+'\nSehingga hasilnya adalah: '+result);
// set the results
confirmation = confirm('lagi?');
}

alert('Thank You!!!');