//Passangers Management
// a. addPassenger
// a.1 addPassenger()
    // listName
    // array list
        //Rules:
        // 1. jika angkot kosong, penumpang naik duduk dikursi pertama
        // 2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
        // 3. jika ada kursi kosong (karena penumpang turun), maka penumpang yang naik berikutnya duduk dikursi kosong terlebih dahulu
        // 4. asumsi kursi tidak akan pernah penuh dan akan bertambah terus jika ada penumpang naik
        // 5. nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun 

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
        console.log(passengerName+' adalah nama yang sama');
        // kembalikan isi array & keluar dari function
        return list;
    }

    // jika seluruh kursi terisi
    else if (i == list.length - 1) { //mengecek jika seluruh kursi sudah dicek
        // tambah penumpang di akhir array
        list.push(passengerName);
        // kembalikan isi array & keluar dari function
        return list;
    }
}
}
}
// let continueAdding = true;
// while (continueAdding){
//     let passengerName = prompt('Masukkan nama penumpang: ');
//     if (passengerName == null || passengerName.trim() === ""){
//         alert('nama tidak boleh kosong !');
//     } else {
//         addPassenger(passengerName, list);
//     }
//     continueAdding = confirm('tambah?');
// }

// console.log('input dari prompt: ', inputName);
// console.log('hasil akhir: ', list);

// 1. deletePassenger()
// 1.1 namaPenumpang
// 1.2 array penumpang
// Rules:
// a. jika angkot kosong, tampilkan pesan bahwa angkot kosong
// b jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
// c. jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya
let deletePassenger = function (passengerName, list){
    if (list.length == 0){
        console.log('masih belum ada penumpang.');
    } else {
        for (let i =0; i < list.length; i++){
            if(list[i] == passengerName){
                list [i] = undefined;
                return list;
            } else if (i == list.length -1){
                console.log(passengerName+' tidak ada di dalam list');
                return list;
            }
        }
    }
}
