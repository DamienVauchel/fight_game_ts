import Dimension from "../interface/Dimension";
import Position from "../interface/Position";
import Velocity from "../interface/Velocity";
import Sprite from "../model/Sprite";

interface CreateParams {
    position: Position
    dimensions: Dimension
    color: string
    velocity: Velocity
}

export default class SpriteManager {
    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly canvasCtx: CanvasRenderingContext2D
    ) {}

    public createSprite({
        position,
        dimensions,
        color,
        velocity
    }: CreateParams): Sprite {
        return new Sprite(
            { position, dimensions, color, velocity }, 
            this.canvas.height, 
            this.canvasCtx
        )
    }
}
