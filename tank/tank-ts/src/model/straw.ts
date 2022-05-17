import ModelAbstract from './modelAbstract'
import { image } from '../service/image'
import straw from '../canvas/straw'
class Straw extends ModelAbstract implements Model {
  name: string = 'straw'
  canvas: CanvasModel = straw
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}

export default Straw