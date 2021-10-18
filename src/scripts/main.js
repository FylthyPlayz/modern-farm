console.log("Welcome to the main module")
import { addPlant } from "./field.js";
import {createPlan} from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan() 
// console.log(yearlyPlan)

plantSeeds(yearlyPlan)


const plantsUsed = usePlants()
console.log(plantsUsed)
