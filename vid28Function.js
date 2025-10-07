let firstCube = prompt('masukkan sisi kubus pertama: ');
let secondCube = prompt('masukkan sisi kubus kedua: ');

function sumTwoVolumeCubes (a, b){
    let firstVolume;
    let secondVolume;
    let total;

    firstVolume = a * a * a;
    secondVolume = b * b * b;

    total = firstVolume + secondVolume;
    return total;
}

alert('total jumlah kedua kubus adalah: '+ sumTwoVolumeCubes(firstCube,secondCube));
console.log(sumTwoVolumeCubes(firstCube,secondCube));