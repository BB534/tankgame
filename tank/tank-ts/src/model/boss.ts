import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
import boss from '../canvas/boss'
export default class extends ModelAbstract implements Model {
  name: string = 'boss'
  canvas: CanvasModel = boss;
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
    super.draw()
  }
}