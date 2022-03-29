import CanvasConfig from "./config/CanvasConfig"
import CanvasContextConfig from "./config/CanvasContextConfig"

export default class App {
    private canvas: HTMLCanvasElement
    private canvasCtx: CanvasRenderingContext2D
    
    constructor() {
        this.configurateCanvas()
        this.configurateCanvasCtx()
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
