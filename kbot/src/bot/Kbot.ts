import { Strategy } from './strategies/Strategy'
import { LoggerInstance } from './logging'

type ConnectDetails = {
    apiKey: string,
    apiSecret: string,
    binanceDevMode: boolean

}

export class Kbot {
    private strategies: Strategy[]
    private apiKey: string
    private apiSecret: string
    private binanceDevMode: boolean

    constructor(connectionDetails: ConnectDetails) {
        LoggerInstance.info("Created new instance of KBot")
        LoggerInstance.info(connectionDetails)
        this.strategies = []
        this.apiKey = connectionDetails.apiKey
        this.apiSecret = connectionDetails.apiSecret
        this.binanceDevMode = connectionDetails.binanceDevMode
        this.checkConnectionDetailsAreSet()
    }

    private checkConnectionDetailsAreSet() {
        if (this.apiKey.length === 0 ) {
            LoggerInstance.error("No Binance API KEY set.")
            process.exit()
        }

        if (this.apiKey.length === 0 ) {
            LoggerInstance.error("No Binance API SECRET set.")
            process.exit()
        }

        if (!this.binanceDevMode) {
            LoggerInstance.warn("##############################")
            LoggerInstance.warn("##############################")
            LoggerInstance.warn("Attention: started bot in real mode!")
            LoggerInstance.warn("##############################")
            LoggerInstance.warn("##############################")
        }
    }

    addStrategy(strategy: Strategy) {
        LoggerInstance.info(`Adding strategy: ${strategy.name}`)
        this.strategies.push(strategy)
    }


}
