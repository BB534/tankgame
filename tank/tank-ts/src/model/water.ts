import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
import water from '../canvas/water'
export default class extends ModelAbstract implements Model {
  name: string = 'water'
  canvas: CanvasModel = water;
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
}