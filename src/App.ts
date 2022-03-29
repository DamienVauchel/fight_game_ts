import CanvasConfig from "./config/CanvasConfig"
import CanvasContextConfig from "./config/CanvasContextConfig"
import Sprite from "./model/Sprite"
import GameController from "./service/GameController"

export default class App {
    public readonly BG_COLOR: string = 'black'
    public readonly GRAVITY: number = 0.2

    public canvas: HTMLCanvasElement
    public canvasCtx: CanvasRenderingContext2D
    public player: Sprite
    public enemy: Sprite

    private readonly gameController: GameController

    constructor() {
        this.configurateCanvas()
        this.configurateCanvasCtx()
        this.gameController = new GameController(this.canvas, this.canvasCtx)

        const { enemy, player } = this.gameController.start()
        this.enemy = enemy
        this.player = player
    }

    private configurateCanvas():void {
        this.canvas = document.querySelector('canvas')
        const canvasConfig = new CanvasConfig(this.canvas)

        canvasConfig.configurate()
    }

    private configurateCanvasCtx(): void {
        this.canvasCtx = this.canvas.getContext('2d')
        const canvasCtxConfig = new CanvasContextConfig(this.canvas, this.canvasCtx)

        canvasCtxConfig.configurate()
    }
}
