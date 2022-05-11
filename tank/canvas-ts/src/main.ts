import './style.css'

class Blackboard {
  constructor(public el = document.querySelector<HTMLCanvasElement>('#canvas')!, public app = el.getContext('2d')!, private width: number = el.width, private height: number = el.height, private bgColor = '#000', private btn: HTMLDivElement = document.createElement('div'), private lineColor: string = '#fff') {
    this.initCanvas()
    this.bindEvent()
  }
  private initCanvas() {
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.width, this.height)
    this.btn.style.cssText = "margin-top:10px;"
    this.el.insertAdjacentElement('afterend', this.btn)
  }
  private bindEvent() {
    const Callable = this.drawLine.bind(this)
    this.el.addEventListener('mousedown', () => {
      // 开始绘制路径
      this.app.beginPath()
      // 准备颜料
      this.app.strokeStyle = this.lineColor
      // 鼠标移动事件
      this.el.addEventListener('mousemove', Callable)
    })
    // 移除事件
    document.addEventListener('mouseup', () => {
      this.el.removeEventListener('mousemove', Callable)
    })
  }
  private drawLine(e: MouseEvent) {
    // 绘制点
    this.app.lineTo(e.offsetX, e.offsetY)
    // 绘制
    this.app.stroke()
  }
  // 更换背景颜色，画笔颜色
  public toggColor(bgcolor: string) {
    this.bgColor = bgcolor
    // 因为初始化后已经渲染成黑色了,所以切换背景我们要重新渲染一次
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.el.width, this.el.height)
    return this
  }
  // 粉笔颜色
  public styleColor(): this {
    const colorArr: string[] = ['#ff4757', '#3742fa', '#ffffff', '#2f3542']
    const el: HTMLDivElement = document.createElement('div')
    colorArr.forEach((item) => {
      const div: HTMLDivElement = document.createElement('div')
      div.style.cssText = `width:20px;height:20px;background:${item
        }`
      el.insertAdjacentElement('afterbegin', div)
      div.addEventListener('click', () => {
        this.lineColor = item
      })
    })
    el.className = 'colorCont'
    this.btn.insertAdjacentElement('beforeend', el)
    return this
  }
  public rubber(): this {
    const el = document.createElement('button')
    el.innerText = "橡皮擦"
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      console.log(this.bgColor)
      this.lineColor = this.bgColor
      this.app.lineWidth = 15
    })
    return this
  }
  // 写字
  public write(): this {
    const el = document.createElement('button')
    el.innerText = '写字'
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.lineColor = 'white'
      this.app.lineWidth = 1
    })
    return this
  }
  public clear(): this {
    const el = document.createElement('button')
    el.innerText = "擦黑板"
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.app.fillStyle = this.bgColor
      this.app.fillRect(0, 0, this.el.width, this.el.height)
    })
    return this
  }
  // 截图
  public screenshot(): this {
    const el = document.createElement('button')
    el.innerText = "截图"
    this.btn.insertAdjacentElement('afterbegin', el)
    const img = document.createElement('img')
    el.addEventListener('click', () => {
      // 截图方法
      img.src = this.el.toDataURL("image/jpeg")
    })
    img.classList.add("img-container")
    this.btn.insertAdjacentElement('beforeend', img)
    return this
  }
}

const instance = new Blackboard()

instance.clear().toggColor('#16a085').rubber().styleColor().write().screenshot()