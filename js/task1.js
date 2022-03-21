class Student{

    constructor(fullName,direction){
  
    this.fullName = fullName;
    this.direction = direction;
  }
  

showFullName()
{
  
  return this.fullName;
  }
  static studentBuilder(){
    let newstudent = new Student("Ihor Kohut","qc")
  }

  get direction () {
    return this._direction
  }
  set direction (direction){
    this._direction = direction
  }


  nameIncludes(data){
   
      return this.showFullName().includes(data)
    
  } 
}

const student1 = new Student('Ivan Petrenko', 'web');
const student2 = new Student("Sergiy Koval","python");
const student3 = Student.studentBuilder();  
console.log(student2.showFullName());
console.log(student1.nameIncludes("Ivan"));
