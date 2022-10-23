function Car(options) {
  this.brandName = options.name;
  this.wheels = options.wheels;
  this.doors = options.doors;
  this.color = options.color;
  this.driven = 0
  this.type = "Car"
}

function Truck(options) {
  this.brandName = options.name;
  this.wheels = options.wheels;
  this.doors = options.doors;
  this.color = options.color;
  this.driven = 0
  this.type = "Truck"
}

function VehicleFactory() {
  this.create = (type, options) => {
    let vehicle
    switch(type) {
      case 1:
        vehicle =  new Car(options)
        break;
      case 2:
        vehicle =  new Truck(options)
        break;
      default:
        console.log('Unidentified Vehicle')
        break;
    }

    vehicle.drive = (drive) => {
      console.log(`Driving ${vehicle.type}...`)
      vehicle.driven = vehicle.driven + drive
    }
    return vehicle
  }
}

function describe() {
  console.log(this)
  console.log(`This is a ${this.brandName} ${this.type} which has ${this.doors} and is in ${this.color} color. It is driven ${this.driven} kms`)
}

const vehicleFactory = new VehicleFactory()
const vehicle = []

const bmwCar = vehicleFactory.create(1, {
  name: 'BMW',
  wheels: 4,
  doors: 2,
  color: 'Black'
})
bmwCar.drive(500)

vehicle.push(bmwCar)

const merTruck = vehicleFactory.create(2, {
  name: 'Mercedes Banez',
  wheels: 8,
  doors: 2,
  color: 'Black'
})
merTruck.drive(1500)
vehicle.push(merTruck)

vehicle.forEach( emp => describe.call(emp))

// OUTPUT:
// Driving Car...
// Driving Truck...
// Car {
//   brandName: 'BMW',
//   wheels: 4,
//   doors: 2,
//   color: 'Black',
//   driven: 500,
//   type: 'Car',
//   drive: [Function (anonymous)]
// }
// This is a BMW Car which has 2 and is in Black color. It is driven 500 kms
// Truck {
//   brandName: 'Mercedes Banez',
//   wheels: 8,
//   doors: 2,
//   color: 'Black',
//   driven: 1500,
//   type: 'Truck',
//   drive: [Function (anonymous)]
// }
// This is a Mercedes Banez Truck which has 2 and is in Black color. It is driven 1500 kms