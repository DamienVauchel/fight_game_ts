import App from "./App"
import "../public/scss/main.scss"

const app = new App()

function animate() {
    window.requestAnimationFrame(animate)
    app.canvasCtx.fillStyle = app.BG_COLOR
    app.canvasCtx.fillRect(0, 0, app.canvas.width, app.canvas.height)
    app.player.update(app.GRAVITY)
    app.enemy.update(app.GRAVITY)
}

animate()
