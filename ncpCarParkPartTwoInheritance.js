class Cars {
    constructor(reg) {
        this._reg = reg;
        this._hours = 0;
        this._cost = 0.00;
    }
    get reg() {
        return this._reg;
    }
    get hours() {
        return this._hours;
    }
    get cost() {
        return this._cost;
    }
    increaseCost() {
        this._hours++
        this._cost += 1.50;
    }
}

class Staff extends Cars{
    constructor(reg, staffNumber, ){
        super(reg);
        this._staffNumber = staffNumber;
        this._takenHours = 0;
        this._creditsRemaining = 10;
    }
    get staffNumber(){
        return this._staffNumber;
    }
    get takenHours(){
        return this._takenHours
    }
    get creditsRemaining(){
        return this._creditsRemaining
    }

    decreaseCredits(){
        this._takenHours = this._takenHours + 1;
        this._creditsRemaining -= 1.50
    }
}

// const matthew = new Staff(545353,101,);
// matthew.decreaseCredits();
// console.log(matthew.creditsRemaining);
// console.log(matthew.takenHours);

const credits = (reg, time) => {
    const staff = new Staff (reg);
    for ( i = 0; i < time; i++){
        staff.decreaseCredits();
    }
    console.log(`Welcome staff member ${reg}. You have ${staff.creditsRemaining} remaining`)
}

const pay = (reg, hrs) => {
    const cars = new Cars(reg);
    for (i = 0; i < hrs; i++) {
        cars.increaseCost();
    }
    console.log(`Welcome ${reg}. You pay £${cars.cost} for ${cars.hours} hours`)
}

pay("J444KW", 4);
credits("WN04 JGB", 5);