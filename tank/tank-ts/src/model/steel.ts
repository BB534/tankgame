import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
import steel from '../canvas/steel'
export default class extends ModelAbstract implements Model {
  canvas: CanvasModel = steel;
  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
    super.draw()
  }
}