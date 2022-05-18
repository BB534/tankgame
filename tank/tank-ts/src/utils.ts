import config from './config'

import wall from './canvas/wall'
import steel from './canvas/steel'
import boss from './canvas/boss'
export default {
  isCanvasTouch(x: number, y: number, width: number = config.model.width, height: number = config.model.height,): boolean {
    return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
  },
  isModelTouch(x: number, y: number, width: number = config.model.width, height: number = config.model.height, models = [...boss.models, ...wall.models, ...steel.models]): Model | undefined {
    // 模型碰撞检测
    return models.find((model) => {
      // 如果坦克 x < 障碍模型左侧 > 模型右侧 那么就没有碰撞
      // 如果坦克 y < 模型顶部 > 模型底部 那么就没有碰撞 
      const state = x + width <= model.x || x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height
      return !state
    })
  }
}