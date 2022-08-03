//write your code here to make the tests pass
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    // office is an object of Office class
    for (let i = 1; i <= 10; i++) {
      const document = new Document(this.name);
      office.documents.push(document);
    }
  }
}

class Manager {
  constructor(name) {
    this.employees = [];
    this.name = name;
  }
  hireEmployee(name) {
    const employee = new Employee(name);
    this.employees.push(employee);
  }
  askEmployeesToWork(office) {
    const employeeObject = new Employee();
    for(let employee in this.employees){
      employeeObject.work(office);

    }
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireCleaner(name) {
    const cleaner = new Cleaner(name);
    this.cleaners.push(cleaner);
  }
  hireManager(name) {
    const manager = new Manager(name);
    this.managers.push(manager);
  }
  startWorkDay() {
  }
}
