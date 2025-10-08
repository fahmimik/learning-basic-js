//rekursif adalah function yang memanggil dirinya sendiri sama seperti looping

//contoh penggunaan function rekursif tanpa 'Base Case'
// function test(n){
//     console.log(n);
//     return test(n-1);
// }
// test(10); //dimulai dari 10, dan akan terus berkurang 1 hingga tak terhingga

//contoh penggunaan looping biasa
function test(n){
    for (let i = n; i>0; i--){
        console.log(i);
    }
}
test(10);
console.log('---------------');

//contoh penggunaan function rekursif dengan 'Base Case'
function test2(m){
    if (m === 0) return; //base case untuk menghentikan pemanggilan rekursif, bisa juga menggunakan kurung kurawal { return; }
    console.log(m);
    test2(m-1);
}
test2(10); //dimulai dari 10, dan masuk ke function untuk terus berulang hingga m = 0, lalu berhenti

console.log('---------------');

//contoh rekursif untuk menghitung faktorial
function faktorial (n){
    if (n === 0) return 1;
    return n * faktorial(n-1); //mengambil nilai n, lalu mengalikan dengan fungsi faktorial itu sendiri dengan nilai n-1
}
console.log(faktorial (5));

console.log('---------------');

//contoh baris kode faktorial dengan looping biasa
function faktorial2(n){
    let result = 1; //karena faktorial 0 = 1, maka inisialisasi result = 1
    for (let i = n; i>0; i--){
        result *= i; //result = result * i
    }
    return result;
}
console.log(faktorial2(5));