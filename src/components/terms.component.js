import { Component } from "../core/component.js";

export class TermsComponent extends Component {
  constructor(el) {
    super(el)

    this.activeTerm = document.querySelector('.term-item')
    this.activeDescription = document.querySelector('.description-item-1')
  }

  init() {
    this.$el.addEventListener('click', (event) => {
      if (event.target.classList.contains('term-item')) {

        this.activeTerm.classList.remove('active')
        this.activeTerm = event.target
        this.activeTerm.classList.add('active')

        this.activeDescription.classList.add('hide')
        this.activeDescription = event.target.nextElementSibling
        this.activeDescription.classList.remove('hide')
      }
    })
  }
}