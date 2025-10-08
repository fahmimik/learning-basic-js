let firstCube = parseInt(prompt('masukkan sisi kubus pertama: '));
let secondCube = parseInt(prompt('masukkan sisi kubus kedua: '));

//contoh basic function
// function sumTwoVolumeCubes (a, b){
//     let firstVolume;
//     let secondVolume;
//     let total;

//     firstVolume = a * a * a;
//     secondVolume = b * b * b;

//     total = firstVolume + secondVolume;
//     return total;
// }



//contoh refactoring sederhana
function sumTwoVolumeCubes (a,b){
    return a*a*a + b*b*b // untuk case ini dapat langsung dikembailak ke rumus mate matika, sehingga menghemat variable dan mempercepat proses eksekusi
}

function plus(a,b){
    return a + b;
}

alert('total jumlah kedua kubus adalah: '+ sumTwoVolumeCubes(firstCube,secondCube));
console.log(sumTwoVolumeCubes(firstCube,secondCube));
console.log(plus(sumTwoVolumeCubes(firstCube,secondCube), sumTwoVolumeCubes(firstCube,secondCube))); // contoh penggunaan function di dalam function



//vid 29 parameter dan argument
//pembuktian variabel argumnets
function test(){
    return arguments;
}
let coba = test(1,2,3,'hi', true);
console.log(coba[3]); // 'hi'
console.log(coba); // untuk memanggi keseluruhan argumen yang ada di function test




// contoh penggunaan variabel arguments dengan for
function test2(){
    let result = 0;
    for (let i=0; i<arguments.length;i++){ //arguments.length untuk mengetahui panjang arguments yang ada
        result += arguments[i]; //dia akan melooping yang ada pada arguments, dan menambahkannya ke result
    }
    return result;
}
let coba2 = test2(5,5,1,1);
console.log(coba2);
