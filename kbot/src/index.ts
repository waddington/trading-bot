import { Strategy } from './bot/strategies/Strategy'

export class Kbot {
    private strategies: Strategy[]

    constructor() {
        this.strategies = []
    }

    addStrategy(strategy: Strategy) {
        this.strategies.push(strategy)
    }
}
