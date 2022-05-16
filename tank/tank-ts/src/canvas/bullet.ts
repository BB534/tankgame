import canvasAbstract from './canvasAbstract'

import model from '../model/bullet'
import tank from './tank'
import bullet from '../model/bullet'
export default new class extends canvasAbstract implements CanvasModel {
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }

  render(): void {
    // super.createModels()
    // super.renderModels()
    setInterval(() => {
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
    console.log(this.models)
  }
}('bullet')
