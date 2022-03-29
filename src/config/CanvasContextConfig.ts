export default class CanvasContextConfig {
    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly ctx: CanvasRenderingContext2D
        ) {}

    public configurate() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        return this.ctx
    }
}
