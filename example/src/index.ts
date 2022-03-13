
import { Kbot} from '../../kbot/src'
import { DemoStrategy } from './Strategies'

const bot = new Kbot()
bot.addStrategy(new DemoStrategy("Demo Strategy 1"))


export {}

