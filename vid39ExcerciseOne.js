//Passangers Management
// a. Passangers board
// a.1 addlist()
    // listName
    // array list
        //Rules:
        // 1. jika angkot kosong, penumpang naik duduk dikursi pertama
        // 2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
        // 3. jika ada kursi kosong (karena penumpang turun), maka penumpang yang naik berikutnya duduk dikursi kosong terlebih dahulu
        // 4. asumsi kursi tidak akan pernah penuh dan akan bertambah terus jika ada penumpang naik
        // 5. nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun 
// b. list get off
// b.1 deletelist()

let list = [];
// let inputName = prompt('masukkan nama: ');
let addPassenger = function(passengerName, list){
    //jika angkot kosong
    if (list.length == 0){
        // tambah penumpang diawal array
        list.push(passengerName);
    // kembalikan isi array & keluar dari function
    return list;
} else {
    // telusuri seluruh kursi dari awal
        for (let i = 0; i < list.length; i++){
        //jika ada kursi kosong
        if (list[i] == undefined){
            // tmabah penumpang di kursi tersebut
            list[i] = passengerName;
            // kembalikan isi array & keluar dari function
            return list;
        }
    // jika ada nama yang sama
    else if(list[i] === passengerName){
        // tampilkan pesa kesalahannya
        console.log(passengerName+'nama sama');
        // kembalikan isi array & keluar dari function
        return list;
    }

    // jika seluruh kursi terisi
    else if (i == list.length - 1) {
        // tambah penumpang di akhir array
        list.push(passengerName);
        // kembalikan isi array & keluar dari function
        return list;
    }
}
}
}
let continueAdding = true;
while (continueAdding){
    let passengerName = prompt('Masukkan nama penumpang: \n');
    if (passengerName == null || passengerName.trim() === ""){
        alert('nama tidak boleh kosong !');
    } else {
        addPassenger(passengerName, list);
    }
    continueAdding = confirm('tambah?');
}

// console.log('input dari prompt: ', inputName);
console.log('hasil akhir: ', list);
