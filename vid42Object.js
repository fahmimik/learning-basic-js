let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Object Literal
let mhs = {
    name : "Razan", // kiri key, kanan value
    nim : '019238912',
    email: 'razan@email.com',
    major: 'Kedokteran'
};
    mhs.disp = function () {
        console.log(this)
        // console.log(mhs);
}
mhs.disp();



// -----------------------------------------

// Function Declaration menggunakan input dari user
// function createObjectMhs(name, nim, email, major) {
//     console.log(this);
//     let functMhs = {};
//     functMhs.name = name;
//     functMhs.nim = nim;
//     functMhs.email = email;
//     functMhs.major = major;
//     return functMhs;
// }
// createObjectMhs();

// let inputName = prompt('Masukkan nama: ');
// let inputNim = prompt('Masukkan NIM: ');
// let inputEmail = prompt('Masukkan Email: ');
// let inputMajor = prompt('Masukkan Jurusan: ');

// let functMhs2 = createObjectMhs(inputName, inputNim, inputEmail, inputMajor);

// console.log(functMhs2);


// ----------------------------------------------------






// Constructor --- bedanya dengan function declaration adlaah tidak ada deklarasi object dan return object
function Student(name, nim, email, major){ //diawali huruf besar seperti membuat kelas, tetapi konsepnya hanya konversi dan jika menggunakan huruf kecil juga tidak masalah tetapi untuk memudahkan dalam perbedaan 'Constructor'
    this.name = name;
    this.nim = nim;
    this.email = email;
    this.major = major;
};


// let inputName2 = prompt('Masukkan nama: ');
// let inputNim2 = prompt('Masukkan NIM: ');
// let inputEmail2 = prompt('Masukkan Email: ');
// let inputMajor2 = prompt('Masukkan Jurusan: ');

// let student2 = new Student(inputName2, inputNim2, inputEmail2, inputMajor2); // menggunakan new untuk constructor dan tidak ada deklarasi object dan return

// console.log(Student);






// -------------------------------------

// modern syntax -- 
// "syntatic sugar" dari constructor function + prototype *lebih sering digunakan dalam industri karena lebih bersih dan mudah dibaca, tetapi tidak semua browser support

// class Student3 {
//     constructor(name, nim, email, major) {
//         this.name = name;
//         this.nim = nim;
//         this.email = email;
//         this.major = major;
//     }
    
//     disp(){
//         console.log(student3a);
//     }
// }
// let inputName3 = prompt('Masukkan nama: ');
// let inputNim3;
// let nimRegex = /^\d{10}$/;
//     do {
//         inputNim3 = prompt('Masukkan Nim: ');
//         if (!nimRegex.test(inputNim3)){
//             alert('Nim tidak valid, coba lagi!');
//         }
//     } while (!nimRegex.test(inputNim3));    
// let inputEmail3;
//     do {
//             inputEmail3 = prompt('Masukkan Email: ');
//             if (!regex.test(inputEmail3)) {
//                 alert('Email tidak valid, coba lagi!');
//             }
//         }while (!regex.test(inputEmail3));
//         let inputMajor3 = prompt('Masukkan Jurusan: ');

// let student3a = new Student3(inputName3, inputNim3, inputEmail3, inputMajor3)
// student3a.disp();



// ---------------------------------------------------





// this --> Object global / window
// setiap buat function dengan cara apapun ada keyword this yang didefinisikan
// this pada function declaratioan akan mengembalikan object global (window)
//this pada obejct literal akan mengembalikan object yang bersangkutan (nilai object itu sendiri bukan lagi window/global)
// this pada constructor akan mengembalikan object yang baru dibuat, contohnya seperti:
class Halo {
    constructor(name, nim, major){
        console.log(this);
        console.log('contructor new syntax');
    }
}
let obj1 = new Halo();
let obj2 = new Halo();

console.log(obj1 === obj2);


