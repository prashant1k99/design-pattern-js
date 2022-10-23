const Standard = function () {
  this.calculate = (charge) => 2 * charge
}

const Professional = function () {
  this.calculate = (charge) => 5 * charge
}

const Mega = function () {
  this.calculate = (charge) => 20 * charge
}

const CostForPlan = function () {
  this.plan = ''
}

CostForPlan.prototype = {
  calculatePrice: function (charge) {
    return this.plan.calculate(charge)
  },
  setPlan: function (plan) {
    this.plan = plan
    return this
  },
}

const charge = 5

const costForPlan = new CostForPlan()

const standard = new Standard()
console.log(costForPlan.setPlan(standard).calculatePrice(charge)) // 10
console.log(costForPlan.setPlan(new Professional()).calculatePrice(charge)) // 25
console.log(costForPlan.setPlan(new Mega()).calculatePrice(charge)) // 100