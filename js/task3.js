class Worker{
    constructor(fullName,dayRate, workingDays){
      this.fullName = fullName;
      this._dayRate = dayRate;
      this._workingDays = workingDays;
    }
    #experience = 1.2;
    showSalary(){
      return this._workingDays * this._dayRate
    }
    showSalaryWithExperience(){
        return this.showSalary() * this.#experience
    }
    get getExperience(){
      return this.#experience;
    }
    set setExperience(data){
        return this.#experience = data;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);                 
console.log("Salary:",worker2.showSalary());
console.log("New experience: " + worker2.getExperience);
console.log("Salary:",worker2.showSalaryWithExperience());
worker2.setExperience = 1.5;
console.log("New experience: " + worker2.getExperience);
console.log("Salary:",worker2.showSalaryWithExperience());

const worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.getExperience);
worker3.showSalaryWithExperience();
worker3.setExperience = 1.5;
console.log("New experience: " + worker3.getExperience);
worker3.showSalaryWithExperience();