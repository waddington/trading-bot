import { Strategy } from "../../../kbot/src";

export class DemoStrategy extends Strategy {
    constructor(name: string) {
        super(name)
        // console.log(`Created new Strategy: ${name}`)
    }
}
