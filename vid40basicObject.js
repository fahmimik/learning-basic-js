let person = { //object diawali dan diakhiri dengan kurung kurawal {}, artinya setiap 'properti' (data yang ada didalam kurung kurung kurawal disebut dengan properti) dipisahkan dengan koma
    name: 'Razan',
    age: 0.1,
    weight: [3.33, 3.9, 4.0],
    address: { // didalam object bisa membuat object lagi
        street: 'Jl. Kehidupan',
        city: 'Tegal',
        province: 'Jawa Tengah',
    }

};
// pemanggilan object bisa dengan dot '.' atau bracket '[]'
console.log('nama saya: '+person.name);