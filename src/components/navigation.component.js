import { Component } from "../core/component.js";

export class NavigationComponent extends Component {
  constructor(el) {
    super(el)

    this.tabs = []

    this.activeTab;
    this.activeTerms;
  }

  init() {
    this.activeTab = document.querySelector('.nav-page__dom');
    this.activeTab.classList.add('active')

    this.activeTerms = {name: 'dom', component: new Component('.dom-terms')}
    this.activeTerms.component.show()
    
    this.$el.addEventListener('click', (event) => {
      if (event.target.classList.contains('tabs')) {

        this.activeTab.classList.remove('active')
        this.activeTab = event.target
        this.activeTab.classList.add('active')
        
        this.activeTerms.component.hide()
        this.activeTerms = this.tabs.find(e => e.name == event.target.dataset.name)
        this.activeTerms.component.show()
      }
    })
  }

  registerTabs(tabs) {
    this.tabs = tabs
  }
}