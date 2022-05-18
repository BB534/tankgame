import canvasAbstract from './canvasAbstract'

import model from '../model/bullet'
import tank from './tank'
import bullet from '../model/bullet'
import play from './play'
import audio from '../service/audio'
export default new class extends canvasAbstract implements CanvasModel {
  intervalId = 0
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }

  render(): void {
    // super.createModels()
    // super.renderModels()
    this.intervalId = setInterval(() => {
      this.createBullet()
      super.renderModels()
    }, 50)
  }
  createBullet() {
    tank.models.forEach(tank => {
      const isExists = this.models.some(m => m.tank == tank)
      if (!isExists) {
        this.models.push(new bullet(tank))
      }
    })
  }
  addPlayBullet() {
    audio.aBuil()
    this.models.push(new bullet(play.models[0]))
  }
  stop() {
    clearInterval(this.intervalId)
  }
}('bullet')

