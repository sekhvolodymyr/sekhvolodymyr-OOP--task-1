class Person{
  constructor(name,surname){
    this.name = name;
    this.surname = surname;
  }
  showFullName(){
    return this.name +' '+this.surname;
  }
}

class Student extends Person{

    constructor(name,surname,year){
      super(name,surname);
      this._year = year;
    }
    showFullName(midleName){
      this.midleName = midleName;
      return super.showFullName() +' '+ midleName;
    }
    showCourse(){
    const curCourse = new Date().getFullYear() - this._year;
    return curCourse;
    }

}

let stud1 = new Student('Ivan','Petrenko',2017);
console.log(stud1.showFullName('Petrovych'))
console.log('Current course:',stud1.showCourse())