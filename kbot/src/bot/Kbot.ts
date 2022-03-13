import { Strategy } from './strategies/Strategy'
import { LoggerInstance } from './logging'

export class Kbot {
    private strategies: Strategy[]

    constructor() {
        LoggerInstance.info("Created new instance of KBot")
        this.strategies = []
    }

    addStrategy(strategy: Strategy) {
        LoggerInstance.info(`Adding strategy: ${strategy.name}`)
        this.strategies.push(strategy)
    }
}
