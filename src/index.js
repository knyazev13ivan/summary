// import './style/style.css'

import {
  NavigationComponent
} from './components/navigation.component.js'
import {
  TermsComponent
} from './components/terms.component.js'

const navigation = new NavigationComponent('.nav-page')

const cssTerms = new TermsComponent('.css-terms')
const jsTerms = new TermsComponent('.js-terms')
const domTerms = new TermsComponent('.dom-terms')
const reactTerms = new TermsComponent('.react-terms')

navigation.registerTabs([{
    name: 'css',
    component: cssTerms
  },
  {
    name: 'js',
    component: jsTerms
  },
  {
    name: 'dom',
    component: domTerms
  },
  {
    name: 'react',
    component: reactTerms
  }
])

function testing() {
  let elem = document.createElement('div')
  elem.style.cssText = `position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  width: 600px;
  height: 500px;
  background-color: #222222;
  color: #cccccc;`
  document.body.append(elem)

  // =========================
  


}

// testing()