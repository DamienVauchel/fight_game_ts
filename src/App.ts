import ServiceContainer, { Services } from "./config/ServiceContainer"
import Sprite from "./model/Sprite"

export default class App {
    public readonly BG_COLOR: string = 'black'
    public readonly GRAVITY: number = 0.2

    public canvas: HTMLCanvasElement
    public canvasCtx: CanvasRenderingContext2D
    public player: Sprite
    public enemy: Sprite

    private readonly serviceContainer: ServiceContainer

    constructor() {
        this.canvas = document.querySelector('canvas')
        this.canvasCtx = this.canvas.getContext('2d')
        this.serviceContainer = new ServiceContainer(this.canvas, this.canvasCtx)
        this.serviceContainer.initServices()

        this.serviceContainer.getService(Services.canvasConfig).configurate()
        this.serviceContainer.getService(Services.canvasCtxConfig).configurate()
        const { enemy, player } = this.serviceContainer.getService(Services.gameController).start()

        this.enemy = enemy
        this.player = player
    }
}
