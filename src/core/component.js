export class Component {
  constructor(el) {
    this.$el = document.querySelector(el)

    this.init()
  }

  init() {}

  hide() {
    console.log(this.$el);
    this.$el.classList.add('hide')
  }

  show() {
    this.$el.classList.remove('hide')
  }
}