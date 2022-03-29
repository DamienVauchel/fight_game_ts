import Sprite from "../model/Sprite"
import Dimension from "../interface/Dimension"
import Position from "../interface/Position"
import Velocity from "../interface/Velocity"
import SpriteManager from "../manager/SpriteManager"

interface StartReturn {
    enemy: Sprite
    player: Sprite
}

export default class GameController {
    private readonly ENEMY_INITIAL_POSITION: Position = { x: 400, y: 100 } 
    private readonly ENEMY_INITIAL_VELOCITY: Velocity = { x: 0, y: 0 } 
    private readonly ENEMY_DIMENSION: Dimension = { width: 50, height: 150 } 
    private readonly ENEMY_COLOR: string = 'red'

    private readonly PLAYER_INITIAL_POSITION: Position = { x: 0, y: 0 } 
    private readonly PLAYER_INITIAL_VELOCITY: Velocity = { x: 0, y: 0 } 
    private readonly PLAYER_DIMENSION: Dimension = { width: 50, height: 150 } 
    private readonly PLAYER_COLOR: string = 'blue'

    private readonly spriteManager: SpriteManager

    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly canvasCtx: CanvasRenderingContext2D
    ) {
        this.spriteManager = new SpriteManager(this.canvas, this.canvasCtx)
    }

    public start(): StartReturn {
        const player = this.spriteManager.createSprite({
            position: this.PLAYER_INITIAL_POSITION, 
            dimensions: this.PLAYER_DIMENSION, 
            color: this.PLAYER_COLOR,
            velocity: this.PLAYER_INITIAL_VELOCITY
        })
        const enemy = this.spriteManager.createSprite({
            position: this.ENEMY_INITIAL_POSITION, 
            dimensions: this.ENEMY_DIMENSION, 
            color: this.ENEMY_COLOR,
            velocity: this.ENEMY_INITIAL_VELOCITY
        })

        return { enemy, player }
    }
}
