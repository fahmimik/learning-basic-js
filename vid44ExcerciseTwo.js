// 1. have driver data
// 2. have route data
// 3. have payment
// 4. have passengers
// 4.a addPassengers
// 4b. removePassengers (payment)
class Transportation {
    constructor(driver, route, passengers, cash){
        this.driver = driver;
        this.route = route;
        this.passengers = passengers;
        this.cash = cash;
    }

        addPassenger (passengerName){
            this.passengers.push(passengerName);
            return this.passengers;
        }

        removePassenger (passengerName, payment) {
            if(this.passengers.length === 0){
                alert('angkot masih kosong!');
                return false;
            }
            for (let i = 0; i<this.passengers.length; i++){
                if (this.passengers[i] === passengerName){
                    this.passengers[i] = undefined;
                    this.cash += payment;
                    return this.passengers;
                }
            }
        }
};

class B{
sayHello(aInstance, name) {
    aInstance.addPassenger(name);    
}
}

const transportation1 = new Transportation('Bahlil', ['Anyer', 'Panarukan'], [], 0);
const transportation2 = new Transportation('Pigai', ['Jakarta', 'Surabaya'], [], 0);
const b = new B(); // instance method untuk menghubungakan antara Class B dan Class A dan dapat memanggil dengan b.sayHello(*nama variabel (transporatation1)*, *isi dari nilai*);

// transportation1.showed();