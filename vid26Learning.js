let confirmation = true;
while (confirmation){
    let life = 3;
    let random = Math.floor(Math.random() * 10) + 1; // untuk generate angka random 1 - 10, harus diluar loop karena untuk menyimpan selama nyawa masih ada.
    console.log(random);
    while(life > 0){
        let input = parseInt(prompt ('Tebak angka 1 - 10'));
        let result = '';
        if (input === random){
            result = 'Benar !';
            alert('Sisa nyawa anda: '+life+'\nangka yang anda masukkan adalah: '+input+' dan angka yang benar adalah: '+random+'\nSehingga jawaban anda adalah: '+result);
            break; //keluar loop while ketika benar
        } else if (input >=1 && input <=10){    // ini untuk memastikan terhadap pengecekan terhadap input >0 dan <=10
            result = (random > input) ? 'Terlalu Rendah !' : 'Terlalu Tinggi !';
            life--;
            alert('Sisa nyawa anda: '+life+'\n'+result);
        } else {
            result = 'Angka yang anda masukkan diluar ketentuan !';
            life--;
            alert('Sisa nyawa anda: '+life+'\n'+result);
        }
    }
    if (life === 0){
        alert('Game Over !, nyawa anda habis !')
    }
    confirmation = confirm('lagi?');
}
    

