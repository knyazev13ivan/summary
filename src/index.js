import './style/style.css'

import {
  NavigationComponent
} from './components/navigation.component.js'
import {
  TermsComponent
} from './components/terms.component.js'

const navigation = new NavigationComponent('.nav-page')

const cssTerms = new TermsComponent('.css-terms')
// const jsTerms = new TermsComponent('.js-terms')
const domTerms = new TermsComponent('.dom-terms')
const tsTerms = new TermsComponent('.ts-terms')
const reactTerms = new TermsComponent('.react-terms')

navigation.registerTabs([{
    name: 'css',
    component: cssTerms
  },
  // {
  //   name: 'js',
  //   component: jsTerms
  // },
  {
    name: 'ts',
    component: tsTerms
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