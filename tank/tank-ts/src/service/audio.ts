export default {
  el(id: string) {
    return document.querySelector<HTMLAudioElement>(id)!
  },
  aStart() {
    this.el('#start').play()
  },
  aBuil() {
    this.el('#buiu').play()
  },
  aBlast() {
    this.el('#ablast').play()
  }
}