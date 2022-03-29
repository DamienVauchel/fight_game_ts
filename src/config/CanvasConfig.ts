export default class CanvasConfig {
    constructor(private readonly canvas: HTMLCanvasElement) {}

    public configurate() {
        this.resize(1024, 576)

        return this.canvas
    }

    private resize(width: number, height: number): HTMLCanvasElement {
        this.canvas.width = width
        this.canvas.height = height

        return this.canvas
    }
}
