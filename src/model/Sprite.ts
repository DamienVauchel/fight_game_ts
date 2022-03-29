import Velocity from "../interface/Velocity"
import Dimension from "../interface/Dimension"
import Position from "../interface/Position"

interface ConstructorParams {
    position: Position
    dimensions: Dimension
    color: string
    velocity: Velocity
}

export default class Sprite {
    private readonly position: Position
    private readonly dimensions: Dimension
    private readonly color: string
    private readonly velocity: Velocity
    
    constructor(
        {position, dimensions, color, velocity}: ConstructorParams, 
        private readonly canvasHeight: number,
        private readonly canvasCtx: CanvasRenderingContext2D
    ) {
        this.position = position
        this.dimensions = dimensions
        this.color = color
        this.velocity = velocity
    }

    public draw() {
        this.canvasCtx.fillStyle = this.color
        this.canvasCtx.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    public update(gravity: number) {
        this.draw()

        if (this.position.y + this.dimensions.height + this.velocity.y >= this.canvasHeight) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
            this.position.y += this.velocity.y
        }
    }
}
