import modelAbstract from './modelAbstract'
import { image } from '../service/image'
import wall from '../canvas/wall'
export default class extends modelAbstract implements Model {
  canvas: CanvasModel = wall
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw()
  }
}