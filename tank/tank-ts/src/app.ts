import './style.scss'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import play from './canvas/play'
import { promise } from './service/image'
import audio from './service/audio'
const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

export default {
  isPlay: false,
  state: 9,
  timer: 0,
  bootstrap() {
    app.addEventListener('click', async () => {
      await this.start()
      this.timer = setInterval(() => {
        if (tank.models.length == 0) this.state = 1
        if (play.models.length == 0 || boss.models.length == 0) this.state = 0
        if (this.state != 9) this.stop()
      }, 100)
    })
  },
  stop() {
    clearInterval(this.timer)
    tank.stop()
    bullet.stop()
    this.text()
  },
  text() {
    const el = document.createElement('canvas')
    el.width = config.canvas.width
    el.height = config.canvas.height
    const ctx = el.getContext('2d')!
    ctx.fillStyle = 'red'
    ctx.font = '80px 黑体'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillText(this.state == 1 ? '赢了！' : '很遗憾！再接再厉!', el.width / 2, el.height / 2)
    app.appendChild(el)
  },
  async start() {
    if (this.isPlay) return
    audio.aStart()
    this.isPlay = true
    app.style.backgroundImage = 'none'
    await Promise.all(promise)
    straw.render()
    wall.render()
    water.render()
    steel.render()
    tank.render()
    bullet.render()
    boss.render()
    play.render()
  }
}