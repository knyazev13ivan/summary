// import './style/style.css'

import { NavigationComponent } from './components/navigation.component.js'
import { termsComponent } from './components/terms.component.js'

const navigation = new NavigationComponent('.nav-page')

const cssTerms = new termsComponent('.css-terms')
const jsTerms = new termsComponent('.js-terms')
const domTerms = new termsComponent('.dom-terms')
const reactTerms = new termsComponent('.react-terms')

navigation.registerTabs([
  {name: 'css', component: cssTerms},
  {name: 'js', component: jsTerms},
  {name: 'dom', component: domTerms},
  {name: 'react', component: reactTerms}
])

