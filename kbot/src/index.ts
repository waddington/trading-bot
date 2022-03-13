import { Strategy } from './bot/strategies/Strategy'

class Kbot {
    private strategies: Strategy[]

    constructor() {
        this.strategies = []
        console.log("Created kkkkkBot")
    }

    addStrategy(strategy: Strategy) {
        this.strategies.push(strategy)
    }
}

export type {
    Strategy
}

export {
    Kbot
}
