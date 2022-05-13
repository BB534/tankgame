import config from '../config'
type positionType = { x: number, y: number }

class Position {
  collection: positionType[] = []
  // 批量获取唯一坐标
  public Getposition(num: number) {
    const collection: positionType[] = []
    for (let index = 0; index < num; index++) {
      while (true) {
        const position = this.position()
        const exists = collection.some(c => c.x == position.x && c.y == position.y)
        if (!exists) {
          collection.push(position)
          this.collection.push(position)
          break;
        }
      }
    }
    return collection
  }
  // 生成坐标
  public position() {
    // 随机位置 向下取整(画布宽度 / 贴图宽度) 等分 然后 * 贴图宽度 高度上下都需要空出来用作敌我坦克开始位置
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * ((config.canvas.height / config.model.height) - 5)) * config.model.height + config.model.height
    }
  }
}

export default new Position()