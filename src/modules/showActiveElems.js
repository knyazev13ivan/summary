export function showActiveElems() {
  let activeMenuSelector = localStorage.getItem('activeMenu') || `.nav-page__css`
  document.querySelector(activeMenuSelector).classList.add('active')

  let activeExpressionSelector = localStorage.getItem('activeExpression') || `.css-expression`
  document.querySelector(activeExpressionSelector).classList.remove('hide')

  let menuItems = document.querySelectorAll('.nav-page ul li')
  let expressions = document.querySelectorAll('.expression')
  let contentItems = document.querySelectorAll('.content-item')

  for (const item of menuItems) {
    item.addEventListener('click', () => {

      document.querySelector(activeMenuSelector).classList.remove('active')

      localStorage.setItem('activeMenu', `.nav-page__${item.dataset.name}`)
      activeMenuSelector = localStorage.getItem('activeMenu')
      item.classList.add('active')

      document.querySelector(activeExpressionSelector).classList.add('hide')

      localStorage.setItem('activeExpression', `.${item.dataset.name}-expression`)
      activeExpressionSelector = localStorage.getItem('activeExpression')
      document.querySelector(activeExpressionSelector).classList.remove('hide')
    })
  }

  let currentActiveContentItem = contentItems[0]

  for (const item of contentItems) {
    item.addEventListener('click', () => {
      currentActiveContentItem.classList.remove('active')
      currentActiveContentItem = item

      item.classList.add('active')
    })
  }
}