class Standard {
  baseAmount = 2
  constructor() {
    this.calculate = (charge) => this.baseAmount * charge
  }
}

class Professional {
  baseAmount = 5
  constructor() {
    this.calculate = (charge) => this.baseAmount * charge
  }
}

class Mega {
  baseAmount = 20
  constructor() {
    this.calculate = (charge) => this.baseAmount * charge
  }
}

class CostForPlan {
  constructor(plan) {
    this.plan = plan || ''
  }
  calculatePrice(charge) {
    return this.plan.calculate(charge)
  }
  setPlan(plan) {
    this.plan = plan
    return this
  }
}


const charge = 5

const standard = new Standard()

const costForPlan = new CostForPlan(standard)
console.log(costForPlan.calculatePrice(2)) // 4
console.log(costForPlan.setPlan(standard).calculatePrice(charge)) // 10
console.log(costForPlan.setPlan(new Professional()).calculatePrice(charge)) // 25
console.log(costForPlan.setPlan(new Mega()).calculatePrice(charge)) // 100