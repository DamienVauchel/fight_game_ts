export default class CanvasConfig {
    private readonly CANVAS_WIDTH: number = 1024
    private readonly CANVAS_HEIGHT: number = 576

    constructor(private readonly canvas: HTMLCanvasElement) {}

    public configurate() {
        this.resize(this.CANVAS_WIDTH, this.CANVAS_HEIGHT)

        return this.canvas
    }

    private resize(width: number, height: number): HTMLCanvasElement {
        this.canvas.width = width
        this.canvas.height = height

        return this.canvas
    }
}
