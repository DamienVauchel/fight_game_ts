import SpriteManager from "../manager/SpriteManager";
import GameController from "../service/GameController";
import CanvasConfig from "./CanvasConfig";
import CanvasContextConfig from "./CanvasContextConfig";

type LoadedServices = {
    [key in Services]: any
}

export enum Services {
    canvasConfig = 'canvasConfig',
    canvasCtxConfig = 'canvasCtxConfig',
    gameController = 'gameController',
    spriteManager = 'spriteManager'
}

export default class ServiceContainer {
    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly canvasCtx: CanvasRenderingContext2D,
        private readonly services: LoadedServices = {
            canvasConfig: null,
            canvasCtxConfig: null,
            gameController: null,
            spriteManager: null
        }
    ){}

    public initServices(): void {
        this.services.canvasConfig = new CanvasConfig(this.canvas)
        this.services.canvasCtxConfig = new CanvasContextConfig(this.canvas, this.canvasCtx)
        this.services.spriteManager = new SpriteManager(this.canvas, this.canvasCtx)
        this.services.gameController = new GameController(this.services.spriteManager)
    }

    public getService(service: Services): any {
        return this.services[service]
    }
}
