function Developer(name) {
  this.name = name
  this.type = "Developer"
}

function Tester(name) {
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function introduce() {
  console.log("Hello, my name is " + this.name + " and I work as a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Prashant", 1))
employees.push(employeeFactory.create("Tony", 2))
employees.push(employeeFactory.create("Abhinav", 1))
employees.push(employeeFactory.create("Daljeet", 1))
employees.push(employeeFactory.create("Jananie", 2))

employees.forEach( emp => {
  introduce.call(emp)
})