import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soyBeanSeed = createSoybean()
const sunFlowerSeed = createSunflower()
const wheatSeed = createWheat()
// const plantingPlan = createPlan()


export const plantSeeds = (plantingPlan) => {
    for (const childArrays of plantingPlan) {
        for (const plant of childArrays) {
            if (plant === "Asparagus") {
                addPlant(asparagusSeed)
            } else if
                (plant === "Corn") {
                addPlant(cornSeed)
            } else if
                (plant === "Potato") {
                addPlant(potatoSeed)
            } else if
                (plant === "Soybean") {
                addPlant(soyBeanSeed)
            } else if
                (plant === "Sunflower") {
                addPlant(sunFlowerSeed)
            } else if
                (plant === "Wheat") {
                addPlant(wheatSeed)
            }
        }
    }
}

