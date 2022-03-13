
import { Kbot} from '../../kbot/src'
import { DemoStrategy } from './Strategies'

import dotenv from 'dotenv'

dotenv.config()

const binanceConnectionDetails = {
    apiKey: process.env.API_KEY ?? "",
    apiSecret: process.env.API_SECRET ?? "",
    binanceDevMode: (process.env.DEV_MODE ?? "false") !== "false" // defaults to dev mode unless "false" is the value
}

const bot = new Kbot(binanceConnectionDetails)

bot.addStrategy(new DemoStrategy("Demo Strategy 1"))


export {}

