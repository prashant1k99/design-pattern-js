class BaseVehicle {
  constructor(options) {
    this.wheels = options.wheels;
    this.doors = options.doors;
    this.color = options.color;
    this.vehicleDriven = 0
  }
}
class Car extends BaseVehicle {
  constructor(options = {
    wheels: 4,
    doors: 4,
    color: "White"
  }) {
    super(options);
    this.vehicleType = 'Car'
  }
}
class Truck extends BaseVehicle {
  constructor(options = {
    wheels: 6,
    doors: 2,
    color: "Grey"
  }) {
    super(options);
    this.vehicleType = 'Truck'
  }
}
class VehicleFactory {
  create = (vehicleType, options) => {
    let vehicle;
    switch (vehicleType) {
      case 1:
        vehicle = new Car(options);
        break;
      case 2:
        vehicle = new Truck(options);
        break;
      default:
        console.log('Vehicle type not covered');
        break;
    }
    vehicle.startEngine = () => console.log(`Reving ${vehicle.vehicleType} engine`);
    vehicle.driveVehicle = (kms) => {
      console.log(`Driving ${vehicle.vehicleType}...`)
      vehicle.vehicleDriven = vehicle.vehicleDriven + kms
    };
    vehicle.stopEngine = () => console.log(`Stop ${vehicle.vehicleType} engine`);
    return vehicle;
  };
}
const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.create(1, {
  wheels: 4,
  doors: 2,
  color: "black",
});
console.log(car);
// Car {
//   wheels: 4,
//   doors: 2,
//   color: 'black',
//   vehicleDriven: 0,
//   vehicleType: 'Car',
//   startEngine: [Function (anonymous)],
//   driveVehicle: [Function (anonymous)],
//   stopEngine: [Function (anonymous)]
// }

console.log(car.startEngine());
// Reving Car engine
console.log(car.driveVehicle(4));
// Driving Car...
console.log(car)
// Car {
//   wheels: 4,
//   doors: 2,
//   color: 'black',
//   vehicleDriven: 4,
//   vehicleType: 'Car',
//   startEngine: [Function (anonymous)],
//   driveVehicle: [Function (anonymous)],
//   stopEngine: [Function (anonymous)]
// }


const truck = vehicleFactory.create(2, {
  wheels: 4,
  doors: 2,
  color: "yellow"
});
console.log(truck);
// Truck {
//   wheels: 4,
//   doors: 2,
//   color: 'yellow',
//   vehicleDriven: 0,
//   vehicleType: 'Truck',
//   startEngine: [Function (anonymous)],
//   driveVehicle: [Function (anonymous)],
//   stopEngine: [Function (anonymous)]
// }
console.log(truck.startEngine());
// Reving Truck engine
console.log(truck.stopEngine());
// Stop Truck engine