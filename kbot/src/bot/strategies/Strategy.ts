interface IStrategy {
    name: string
}

export abstract class Strategy implements IStrategy {
    constructor(name: string) {
        this.name = name
    }

    name: string
}
