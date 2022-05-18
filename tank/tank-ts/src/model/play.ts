import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
import play from '../canvas/play'
import _ from 'lodash';
import { direactionEnum } from '../enum/direaction';
import config from '../config';
import utils from '../utils';
import bullet from '../canvas/bullet';
export default class extends ModelAbstract implements Model {
  name: string = 'play'
  canvas: CanvasModel = play;
  bindEvent = false
  image(): HTMLImageElement {
    let direaction = this.name + _.upperFirst(this.direaction)
    return image.get(direaction as any)!
  }
  render(): void {
    super.draw()
    if (this.bindEvent == false) {
      let thFn = (event: KeyboardEvent) => {
        if (event.code == 'Space') {
          bullet.addPlayBullet()
        }
      }
      let playBuller = _.throttle(thFn, 500)
      document.addEventListener('keydown', this.changeDireaction.bind(this))
      document.addEventListener('keydown', this.move.bind(this))
      document.addEventListener('keydown', playBuller)
    }
  }
  changeDireaction(event: KeyboardEvent) {
    this.bindEvent = true
    switch (event.code) {
      case 'ArrowUp':
        this.direaction = direactionEnum.top
        break;
      case 'ArrowDown':
        this.direaction = direactionEnum.bottom
        break;
      case 'ArrowLeft':
        this.direaction = direactionEnum.left
        break
      case 'ArrowRight':
        this.direaction = direactionEnum.right
        break
    }
  }
  move(event: KeyboardEvent) {
    let x = this.x
    let y = this.y
    switch (event.code) {
      case 'ArrowUp':
        y -= config.playMove
        break;
      case 'ArrowDown':
        y += config.playMove
        break;
      case 'ArrowLeft':
        x -= config.playMove
        break
      case 'ArrowRight':
        x += config.playMove
        break
    }
    if (utils.isCanvasTouch(x, y) || utils.isModelTouch(x, y)) {
      return
    }
    this.x = x
    this.y = y
    this.canvas.renderModels()
  }
}  